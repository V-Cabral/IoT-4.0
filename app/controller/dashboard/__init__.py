from flask import Blueprint

bp = Blueprint("dashborad", __name__)

from app.controller.dashboard import routes
