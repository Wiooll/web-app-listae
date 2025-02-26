from flask import Flask, jsonify
from flask_cors import CORS
from database import db  # Certifique-se de importar corretamente o db


app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///listae\var\app-instance\listae.db'  # Certifique-se de usar o caminho correto para o banco de dados 'listae.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)  # Agora db estará definido corretamente

if __name__ == '__main__':
    app.run(debug=True)