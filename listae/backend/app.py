from flask import Flask
from database import db  # Certifique-se de importar corretamente o db

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///listae.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)  # Agora db estará definido corretamente

if __name__ == '__main__':
    app.run(debug=True)

    # Certifique-se de importar corretamente o db