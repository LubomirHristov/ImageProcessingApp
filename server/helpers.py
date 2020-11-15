def allowed_file(filename: str, allowed_extensions: set) -> bool:
    """Check if the file extension matched an image extension

    Args:
        filename (str): The name of the file

    Returns:
        bool: if the file is an image
    """

    return "." in filename and filename.rsplit(".", 1)[1].lower() in allowed_extensions
