# Running Backend
This one is hosted on render. Otherwise, if you want to run it locally, you can follow the steps shown below

## Requirements
- Docker (have it installed)

## Steps
- `cd` into the backend dir
- run the following commands in order;
```
    docker compose build
    docker compose up -d flask_db
    docker compose up flask_app
```

You should have your backend running at this point