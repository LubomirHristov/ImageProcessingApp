from flask import Flask
import image_processing

app = Flask(__name__)


@app.route('/process/<image_name>')
def hello_world(image_name: str) -> str:
    return image_processing.process_image("img/{}".format(image_name))
