from flask import Blueprint

bp = Blueprint("download", "__main__")

from app.controller.download import routes
