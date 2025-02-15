from flask import Flask
from api.v1.auth.auth import auth_blueprint
import dotenv

dotenv.load_dotenv()

app = Flask(__name__)
app.register_blueprint(auth_blueprint)

if __name__ == '__main__':
    app.run(debug=True)
