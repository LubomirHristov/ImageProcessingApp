import os
import image_processing
from flask import current_app as app, request
from constants import ALLOWED_EXTENSIONS
from helpers import allowed_file
from werkzeug.utils import secure_filename


@app.route("/process", methods=["POST"])
def process_image() -> str:
    """Transforms an image to text and returns the the text.
    After processing the image is deleted.

    Returns:
        str: The textual representation of an image.
    """

    # Check if file is sent
    if "file" not in request.files:
        return "No file found!"

    file = request.files["file"]

    # Check for empty filename
    if file.filename == "":
        return "Empty filename!"

    # Check if file type is valid
    if not allowed_file(filename=file.filename, allowed_extensions=ALLOWED_EXTENSIONS):
        return "Invalid file type!"

    if file:
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config["UPLOAD_FOLDER"], filename))
        # Process image
        image_text = image_processing.process_image(
            "{}/{}".format(app.config["UPLOAD_FOLDER"], filename)
        )
        os.remove(os.path.join(app.config["UPLOAD_FOLDER"], filename))
        return image_text
