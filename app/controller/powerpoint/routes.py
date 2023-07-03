from app.controller.powerpoint import bp
from flask import render_template


@bp.route("/")
def slides():
    return render_template("home/home.html")


@bp.route("/slides")
def home():
    return render_template("slides/presentation.html")
