from app.controller.download import bp
from app.models.models import load_data
from flask import Response, request
import csv
import io


@bp.route("/download", methods=["POST", "GET"])
def download_csv_file():
    date = request.json.get("date")

    data = load_data(date)
    title = list(data.keys())
    rows = zip(*data.values())

    fo = io.StringIO()
    writer = csv.writer(fo)

    writer.writerow(title)
    writer.writerows(rows)

    fo.seek(0)

    return Response(
        fo,
        mimetype="text/csv",
        headers={"Content-Disposition": "attachment;filename=data.csv"},
    )
