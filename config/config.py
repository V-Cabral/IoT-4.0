class BaseConfig(object):
    DEBUG = False
    SERVER_NAME = "localhost:5000"
    DB_USER = "ertksa9vxqbb9p0xp6dp"
    DB_PASS = "pscale_pw_gezlCU4Czx7ylRWTj971teefkKY0VM1T3XHf9Qo8J67"


class DevelopmentConfig(BaseConfig):
    DEBUG = True


class ProductionConfig(BaseConfig):
    DEBUG = False
