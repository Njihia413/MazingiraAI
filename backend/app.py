from flask import Flask, request, jsonify, make_response, session, redirect, url_for
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity, get_jwt
from flask_bcrypt import Bcrypt
from flask_sqlalchemy import SQLAlchemy
from os import environ
from flask_cors import CORS
import contextlib
from sqlalchemy import MetaData, create_engine
from sqlalchemy.ext.declarative import declarative_base


app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}}) # This will enable CORS for all routes

# Configuration
app.config['SQLALCHEMY_DATABASE_URI'] = environ.get('DB_URL')
app.config['SECRET_KEY'] = 'maureen_njihia'
app.config["JWT_SECRET_KEY"] = 'maureen_njihia'
app.config['JWT_TOKEN_LOCATION'] = ['headers']

# Database Initialization
db = SQLAlchemy(app)

# JWT Initialization
jwt = JWTManager(app)

# bcrypt initialization
bcrypt = Bcrypt(app)

# delete tables
engine = create_engine(environ.get('DB_URL'))
def drop_table(table_name, engine=engine):
  Base = declarative_base()
  metadata = MetaData()
  metadata.reflect(bind=engine)

  if table_name in metadata.tables.keys():
    table = metadata.tables[table_name]
    Base.metadata.drop_all(engine, [table], checkfirst=True)

drop_table('messages')
drop_table('chats')
drop_table('users')


class User(db.Model):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key=True)
  email = db.Column(db.String(120), unique=True, nullable=False)
  password = db.Column(db.Text(), unique=True, nullable=False)
  full_name = db.Column(db.Text(), unique=False, nullable=True)
  chats = db.relationship('Chat', cascade = "all,delete", backref='users')

  def json(self):
    return {'id': self.id, 'email': self.email, 'full_name': self.full_name, 'chats': [chat.json() for chat in self.chats]}

  def __repr__(self):
    return f'<User "{self.email}">'

class Chat(db.Model):
  __tablename__ = 'chats'

  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
  messages = db.relationship('Message', cascade = "all,delete", backref='chats')

  def json(self):
    return {'id': self.id, 'user_id': self.user_id, 'messages': [message.json() for message in self.messages]}

  def __repr__(self):
    return f'<Chat "{self.id}">'


class Message(db.Model):
  __tablename__ = 'messages'

  id = db.Column(db.Integer, primary_key=True)
  chat_id = db.Column(db.Integer, db.ForeignKey('chats.id'))
  question = db.Column(db.Text)
  answer = db.Column(db.Text)

  def json(self):
    return {'id': self.id, 'chat_id': self.chat_id, 'question': self.question, 'answer': self.answer}

  def __repr__(self):
    return f'<Message "{self.question[:20]}...">'

db.create_all()

# @app.before_request
# def before_request():
#   headers = {'Access-Control-Allow-Origin': '*',
#               'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
#               'Access-Control-Allow-Headers': 'Content-Type'}
#   if request.method.lower() == 'options':
#     return jsonify(headers), 200


#create a test route
@app.route('/api/test_gpt_health', methods=['GET'])
def test_gpt_health():
  return make_response(jsonify({'message': gpt_client.health.health()}), 200)

@app.route('/api/test_gpt_ingestion', methods=['GET'])
def test_gpt_ingestion():
  ingested_file_doc_id = None
  with open("./files/example.pdf", "rb") as f:
    ingested_file_doc_id = gpt_client.ingestion.ingest_file(file=f).data[0].doc_id

  return make_response(jsonify({'message': "ingested file doc id: {}".format(ingested_file_doc_id)}), 200)



#create a test route
@app.route('/api/test', methods=['GET'])
def test():
  return make_response(jsonify({'message': 'test route'}), 200)

@app.route('/api/login', methods=['POST'])
def login():
  data = request.get_json()
  user = User.query.filter_by(email=data['email']).first()
  if user and bcrypt.check_password_hash(user.password, data['password']):
    access_token = create_access_token(identity=user.id)
    return make_response(jsonify({'user': user.json(), 'access_token': access_token}), 200)
  else:
    return make_response(jsonify({'message': 'Login Failed'}), 401)

@app.route('/api/me', methods=['GET'])
@jwt_required()
def get_me():
  user_id = get_jwt_identity()
  user = User.query.filter_by(id=user_id).first()
  if user:
    access_token = create_access_token(identity=user.id)
    return make_response(jsonify({'user': user.json(), 'access_token': access_token}), 200)
  else:
    return make_response(jsonify({'message': 'unauthorized'}), 401)

@app.route('/api/logout', methods=['POST'])
@jwt_required()
def logout():
  pass

# create a user
@app.route('/api/signup', methods=['POST'])
def create_user():
  # try:
  data = request.get_json()
  hashed_password = bcrypt.generate_password_hash(data['password']).decode('utf-8')
  user = User(email=data['email'], full_name=data['full_name'], password=hashed_password)
  db.session.add(user)
  db.session.commit()
  access_token = create_access_token(identity=user.id)
  return make_response(jsonify({'user': user.json(), 'access_token': access_token}), 201)
  # except Exception as e:
  #   return make_response(jsonify({'message': 'error creating user'}), 500)

# get all users
@app.route('/api/users', methods=['GET'])
@jwt_required()
def get_users():
  try:
    users = User.query.all()
    return make_response(jsonify([user.json() for user in users]), 200)
  except Exception as e:
    print(e)
    return make_response(jsonify({'message': 'error getting users'}), 500)

# update a user
@app.route('/api/users/<int:id>', methods=['PUT'])
@jwt_required()
def update_user(id):
  try:
    user_id = get_jwt_identity()
    user = User.query.filter_by(id=user_id).first()
    if user:
      data = request.get_json()
      user.email = data['email']
      db.session.commit()
      return make_response(jsonify({'message': 'user updated'}), 200)
    return make_response(jsonify({'message': 'user not found'}), 404)
  except Exception as e:
    return make_response(jsonify({'message': 'error updating user'}), 500)

# delete a user
@app.route('/api/users/<int:id>', methods=['DELETE'])
@jwt_required()
def delete_user(id):
  try:
    user_id = get_jwt_identity()
    user = User.query.filter_by(id=user_id).first()
    if user:
      db.session.delete(user)
      db.session.commit()
      return make_response(jsonify({'message': 'user deleted'}), 200)
    return make_response(jsonify({'message': 'user not found'}), 404)
  except Exception as e:
    return make_response(jsonify({'message': 'error deleting user'}), 500)

# create chat
@app.route('/api/chats', methods=['POST'])
@jwt_required()
def create_chat():
  data = request.get_json()
  try:
    user_id = get_jwt_identity()
    user = User.query.filter_by(id=user_id).first()
    if user:
      chat = Chat(user_id=user_id)
      db.session.add(chat)
      db.session.commit()
      return make_response(jsonify({'chat': chat.json()}), 200)
    return make_response(jsonify({'message': 'unauthorized'}), 401)
  except Exception as e:
    return make_response(jsonify({'message': 'error creating chat'}), 500)

# get chats
@app.route('/api/chats', methods=['GET'])
@jwt_required()
def get_chats():
  data = request.get_json()
  try:
    user_id = get_jwt_identity()
    user = User.query.filter_by(id=user_id).first()
    if user:
      chats = user.chats
      return make_response(jsonify([chat.json() for chat in chats]), 200)
    return make_response(jsonify({'message': 'unauthorized'}), 401)
  except Exception as e:
    return make_response(jsonify({'message': 'error creating chat'}), 500)

# get chat
@app.route('/api/chats/<int:id>', methods=['GET'])
@jwt_required()
def get_chat(id):
  data = request.get_json()
  try:
    user_id = get_jwt_identity()
    user = User.query.filter_by(id=user_id).first()
    if user:
      chat = [chat for chat in user.chats if chat.id == id]
      if len(chat) == 1:
        chat = chat[0]
        return make_response(jsonify({'chat': chat.json()}), 200)
    return make_response(jsonify({'message': 'unauthorized'}), 401)
  except Exception as e:
    return make_response(jsonify({'message': 'error getting chat'}), 500)

# delete chat
@app.route('/api/chats/<int:id>', methods=['DELETE'])
@jwt_required()
def delete_chat(id):
  data = request.get_json()
  try:
    user_id = get_jwt_identity()
    user = User.query.filter_by(id=user_id).first()
    if user:
      chat = [chat for chat in user.chats if chat.id == id]
      if len(chat) == 1:
        chat = chat[0]
        db.session.delete(chat)
        db.session.commit()
        return make_response(jsonify({'chat': chat.json()}), 204)
    return make_response(jsonify({'message': 'unauthorized'}), 401)
  except Exception as e:
    return make_response(jsonify({'message': 'error deleting chat'}), 500)

# create messages
@app.route('/api/messages', methods=['POST'])
@jwt_required()
def create_message():
  data = request.get_json()
  try:
    user_id = get_jwt_identity()
    user = User.query.filter_by(id=user_id).first()
    if user:
      message = Message(chat_id=data['chat_id'], question=data['question'], answer=data['answer'])
      db.session.add(message)
      db.session.commit()
      return make_response(jsonify({'message': message.json()}), 200)
    return make_response(jsonify({'message': 'unauthorized'}), 401)
  except Exception as e:
    return make_response(jsonify({'message': 'error creating message'}), 500)

# create messages
@app.route('/api/messages/<int:id>', methods=['PUT'])
@jwt_required()
def update_message():
  data = request.get_json()
  try:
    user_id = get_jwt_identity()
    user = User.query.filter_by(id=user_id).first()
    if user:
      message = Message.query.filter_by(id=id).first()
      message.answer = data['answer']
      db.session.add(message)
      db.session.commit()
      return make_response(jsonify({'message': message.json()}), 200)
    return make_response(jsonify({'message': 'unauthorized'}), 401)
  except Exception as e:
    return make_response(jsonify({'message': 'error updating message'}), 500)
