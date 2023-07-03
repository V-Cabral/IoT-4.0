class BaseConfig(object):
    DEBUG = False
    DB_USER = "77y5k37bq6xt9smg3a67"
    DB_PASS = "pscale_pw_2d5xwyKOVjb91AwXF3l2eouSRWLpRneZyyAZ4V3vdHv"


class DevelopmentConfig(BaseConfig):
    DEBUG = True


class ProductionConfig(BaseConfig):
    DEBUG = False
