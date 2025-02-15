from flask import Blueprint, jsonify, request

auth_blueprint = Blueprint("auth", __name__)

@auth_blueprint.route("/login", methods=["POST"])
