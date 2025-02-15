from flask import Flask
from api.v1.auth.auth import auth_blueprint

app = Flask(__name__)
app.register_blueprint(auth_blueprint, url_prefix="/api/auth/login")

if __name__ == '__main__':
    app.run(debug=True)
