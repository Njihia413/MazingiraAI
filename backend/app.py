from flask import Flask, request, jsonify, make_response, session, redirect, url_for
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity, get_jwt
from flask_bcrypt import Bcrypt 
from flask_sqlalchemy import SQLAlchemy
from os import environ
from flask_cors import CORS

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

class User(db.Model):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key=True)
  email = db.Column(db.String(120), unique=True, nullable=False)
  password = db.Column(db.Text(), unique=True, nullable=False)
  full_name = db.Column(db.Text(), unique=False, nullable=True)

  def json(self):
    return {'id': self.id, 'email': self.email, 'full_name': self.full_name}

db.create_all()

# @app.before_request
# def before_request():
#   headers = {'Access-Control-Allow-Origin': '*',
#               'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
#               'Access-Control-Allow-Headers': 'Content-Type'}
#   if request.method.lower() == 'options':
#     return jsonify(headers), 200

#create a test route
@app.route('/api/test', methods=['GET'])
def test():
  return make_response(jsonify({'message': 'test route'}), 200)

@app.route('/api/login', methods=['POST'])
def login():
  data = request.get_json()

  user = User.query.filter_by(email=data['email']).first()

  if user and bcrypt.check_password_hash(user.password, password):
    access_token = create_access_token(identity=user.id)
    return make_response(jsonify({'message': 'Login Success', 'access_token': access_token}), 200)
  else:
    return make_response(jsonify({'message': 'Login Failed'}), 401)

@app.route('/api/logout', methods=['POST'])
@jwt_required()
def logout():
  pass

# create a user
@app.route('/api/signup', methods=['POST'])
def create_user():
  try:
    data = request.get_json()
    hashed_password = bcrypt.generate_password_hash(data['password']).decode('utf-8')
    user = User(email=data['email'], full_name=data['full_name'], password=hashed_password)
    db.session.add(user)
    db.session.commit()
    access_token = create_access_token(identity=user.id)
    return make_response(jsonify({'message': 'signup successful!', 'access_token': access_token}), 201)
  except Exception as e:
    return make_response(jsonify({'message': 'error creating user'}), 500)

# get all users
@app.route('/api/users', methods=['GET'])
@jwt_required()
def get_users():
  try:
    users = User.query.all()
    return make_response(jsonify([user.json() for user in users]), 200)
  except Exception as e:
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
