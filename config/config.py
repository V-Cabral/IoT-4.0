class BaseConfig(object):
    DEBUG = False
    DB_USER = "poneilwxgcyqu70ticlh"
    DB_PASS = "pscale_pw_HBxCH5V7KhIqIcJrw7psLeZQyHL22okQR7xiaZdIasq"


class DevelopmentConfig(BaseConfig):
    DEBUG = True


class ProductionConfig(BaseConfig):
    DEBUG = False
