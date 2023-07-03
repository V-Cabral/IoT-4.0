from flask import Flask

app = Flask(__name__)
app.config.from_object("config.config.ProductionConfig")

# Blueprints register
from app.controller.powerpoint import bp as powerpoint_bp
from app.controller.dashboard import bp as dashboard_bp
from app.controller.artigo import bp as artigo_bp
from app.controller.download import bp as download_bp

app.register_blueprint(powerpoint_bp)
app.register_blueprint(dashboard_bp)
app.register_blueprint(artigo_bp)
app.register_blueprint(download_bp)
