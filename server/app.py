import os
import image_processing
from flask import Flask, request
from flask_cors import CORS
from werkzeug.utils import secure_filename

UPLOAD_FOLDER = './uploads'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

cors = CORS(app)


@app.route('/process/<image_name>')
def hello_world(image_name: str) -> str:
    return image_processing.process_image("uploads/{}".format(image_name))


def allowed_file(filename) -> bool:
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route('/upload', methods=['POST'])
def upload_image() -> str:
    if 'file' not in request.files:
        return 'No file found!'

    file = request.files['file']

    if file.filename == '':
        return 'Empty filename!'

    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        return 'File uploaded successfully!'
