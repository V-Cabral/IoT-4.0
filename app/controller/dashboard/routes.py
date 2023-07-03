from app.controller.dashboard import bp
from flask import render_template, Response, jsonify, request
from app.models.models import load_data, add_data_to_db


@bp.route("/dashboard")
def dashboard():
    return render_template("dashboard/dashboard.html")


@bp.route("/get-data")
def get_data():
    data = load_data()
    return jsonify(data)


@bp.route("/esp32-data", methods=["POST"])
def esp32_data():
    data = request.json
    print(data)
    # add_data_to_db({"rpm": 1000})
    return Response(status=200)
