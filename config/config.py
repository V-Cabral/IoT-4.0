class BaseConfig(object):
    DEBUG = False
<<<<<<< HEAD
    DB_USER = "cuuig1bkjmw749ng9tqc"
    DB_PASS = "pscale_pw_7jzb4j4u0GXmOOJqfN80DrcXOylKewXoHNpStIp3pME"
=======
    DB_USER = "ertksa9vxqbb9p0xp6dp"
    DB_PASS = "pscale_pw_gezlCU4Czx7ylRWTj971teefkKY0VM1T3XHf9Qo8J67"
>>>>>>> 2dcabd1758da1141b1e34a1579da270d489483b1


class DevelopmentConfig(BaseConfig):
    DEBUG = True


class ProductionConfig(BaseConfig):
    DEBUG = False
