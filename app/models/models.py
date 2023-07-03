from sqlalchemy import create_engine, text
from app import app

# Database link: https://planetscale.com/
db_connection_string = (
    "mysql+pymysql://"
    + app.config["DB_USER"]
    + ":"
    + app.config["DB_PASS"]
    + "@aws-sa-east-1.connect.psdb.cloud/motor"
)

engine = create_engine(
    db_connection_string, connect_args={"ssl": {"ssl_ca": "/etc/ssl/cert.pem"}}
)


def load_data():
    with engine.connect() as conn:
        sensors = conn.execute(text("SELECT * FROM sensores ORDER BY id DESC LIMIT 20"))

        columns = sensors.keys()

        sensors_dict = {column: [] for column in columns}
        for row in reversed(sensors.all()):
            for column, value in zip(columns, row):
                sensors_dict[column].append(value)

    return sensors_dict


def add_data_to_db(data):
    with engine.connect() as conn:
        query_columns = ",".join(data.keys())
        query_values = ",".join([f":{column}" for column in data.keys()])
        values = data

        query = text(
            f"INSERT INTO sensors ({query_columns.rstrip(',')}) VALUES ({query_values.rstrip(',')})"
        )

        conn.execute(query, values)
