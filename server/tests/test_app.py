import pytest
import sys
sys.path.append("../")


def test_valid_file_extention():
    from helpers import allowed_file
    from constants import ALLOWED_EXTENSIONS

    example_files = {"test.jpg", "test.png", "test.jpeg"}

    for file in example_files:
        assert allowed_file(filename=file,
                            allowed_extensions=ALLOWED_EXTENSIONS)


def test_invalid_file_extension():
    from helpers import allowed_file
    from constants import ALLOWED_EXTENSIONS

    example_files = {"test.txt", "test.md", "test.exe"}

    for file in example_files:
        assert not allowed_file(filename=file,
                                allowed_extensions=ALLOWED_EXTENSIONS)
