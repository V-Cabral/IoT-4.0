from flask import Blueprint

bp = Blueprint("powerpoint", __name__)

from app.controller.powerpoint import routes
