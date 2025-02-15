from flask import Blueprint, request, jsonify, session
from jwt import encode
from os import environ

users = [{
    "email": "juan@meddyg.com",
    "password": "test",
    "name": "Juan",
}]

auth_bp = Blueprint('auth', __name__, url_prefix='/auth')

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    user = next((u for u in users if u['email'] == email), None)

    if not user or user['password'] != password:
        return jsonify({'error': 'Invalid email or password'}), 401
    
    token = encode(
        { 
            'email': email,
            'username': user['name'],
        }, 
        environ.get('SECRET_KEY'), 
        algorithm='HS256'
    )
    session['access_token'] = token

    return jsonify({'message': 'Logged in successfully' }), 201

@auth_bp.route('/logout', methods=['POST'])
def logout():
    session.pop('access_token', None)
    return jsonify({'message': 'Logged out successfully'}), 200
