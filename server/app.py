from flask import Flask
from flask_cors import CORS
from config.app_config import DevelopmentConfig, TestingConfig, ProductionConfig


def create_app(config_class=ProductionConfig) -> object:
    """Creates the application with its properties

    Args:
        config_class: Configuration object of the app

    Returns:
        object: the appliation
    """
    app = Flask(__name__)
    app.config.from_object(config_class)
    cors = CORS(app)

    with app.app_context():
        # import all routes
        import routes

    return app


if __name__ == "__main__":
    app = create_app()
    # use 0.0.0.0 to use it in container
    app.run(host="0.0.0.0")
