import time
try:
    from PIL import Image
except ImportError:
    import Image
import pytesseract


def process_image(image):
    """Process an image to text."""
    try:
        time.sleep(15)
        return pytesseract.image_to_string(image, timeout=15)
    except RuntimeError:
        # Tesseract processing is terminated
        return None
