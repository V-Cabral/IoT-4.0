from sqlalchemy import create_engine, text
from dotenv import load_dotenv
from datetime import datetime
import os
from app import app

load_dotenv()

# Database link: https://planetscale.com/
db_connection_string = (
    "mysql+pymysql://"
    + os.getenv("DB_USER")
    + ":"
    + os.getenv("DB_PASS")
    + "@"
    + os.getenv("DB_HOST")
    + os.getenv("DB_DATABASE")
)

engine = create_engine(
    db_connection_string, connect_args={"ssl": {"ssl_ca": "/etc/ssl/cert.pem"}}
)


def load_data(date=None):
    with engine.connect() as conn:
        if date:
            query = text(
                f"SELECT * FROM sensores WHERE DATE(date_time) = DATE('{date}')"
            )
        else:
            query = text(f"SELECT * FROM sensores ORDER BY id DESC LIMIT 20")

        sensors = conn.execute(query)

        columns = sensors.keys()

        sensors_dict = {column: [] for column in columns}
        for row in reversed(sensors.all()):
            for column, value in zip(columns, row):
                sensors_dict[column].append(value)

    return sensors_dict


def add_data_to_db(data):
    with engine.connect() as conn:
        data["date_time"] = datetime.now()

        query_columns = ",".join(data.keys())
        query_values = ",".join([f":{column}" for column in data.keys()])
        values = data

        query = text(
            f"INSERT INTO sensores ({query_columns.rstrip(',')}) VALUES ({query_values.rstrip(',')})"
        )

        conn.execute(query, values)
