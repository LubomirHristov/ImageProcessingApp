import os

# folder path where images will be stored temporarily
UPLOAD_FOLDER = "./uploads"


class Config(object):
    DEBUG = False
    TESTING = False
    CSRF_ENABLED = True
    UPLOAD_FOLDER = UPLOAD_FOLDER
    SECRET_KEY = "this-really-needs-to-be-changed"


class ProductionConfig(Config):
    DEBUG = False
    TESTING = False
    CSRF_ENABLED = True
    WTF_CSRF_ENABLED = True
    SECRET_KEY = "this-really-needs-to-be-changed"


class DevelopmentConfig(Config):
    DEBUG = True
    DEVELOPMENT = True


class TestingConfig(Config):
    TESTING = True
    CSRF_ENABLED = False
    WTF_CSRF_ENABLED = False
    SECRET_KEY = "this-really-needs-to-be-changed"
