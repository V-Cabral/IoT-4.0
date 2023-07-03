from app.controller.download import bp
from app.models.models import load_data
from flask import Response
import csv
import io


@bp.route("/download")
def dowload_csv_file():
    data = load_data()
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
