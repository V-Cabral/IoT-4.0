from app.controller.artigo import bp
from flask import render_template


@bp.route("/artigo")
def artigo():
    return render_template("Artigo/artigo.html")
