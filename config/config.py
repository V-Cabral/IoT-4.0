class BaseConfig(object):
    DEBUG = False
    DB_USER = "cuuig1bkjmw749ng9tqc"
    DB_PASS = "pscale_pw_7jzb4j4u0GXmOOJqfN80DrcXOylKewXoHNpStIp3pME"


class DevelopmentConfig(BaseConfig):
    DEBUG = True


class ProductionConfig(BaseConfig):
    DEBUG = False
