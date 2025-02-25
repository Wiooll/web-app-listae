from flask import Flask
from flask_cors import CORS
from flask_restful import Api
from routes import initialize_routes

app = Flask(__name__)
CORS(app)  # Permitir requisições do frontend
api = Api(app)

initialize_routes(api)

if __name__ == "__main__":
    app.run(debug=True)
