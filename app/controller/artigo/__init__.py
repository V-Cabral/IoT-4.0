from flask import Blueprint

bp = Blueprint("artigo", __name__)

from app.controller.artigo import routes
