FROM python:3.11.9
WORKDIR /app
ENV PYTHONUNBUFFERED=1
COPY requirements.txt ./
RUN pip install -r requirements.txt
COPY . .
# Use environment variable for port, default to 4000
ENV PORT=4000
EXPOSE $PORT
CMD gunicorn --bind 0.0.0.0:$PORT app:app