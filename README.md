# Image processing application

A simple application that transforms images to text.

## Description

---

### Frontend

- Consists of a button to add images and a list of image cards
- Steps to add and process an image:
    1. Add an image slot
    2. Click "Choose file" and select an image
    3. Click "Process" and wait for the image text
- Image text field is scrollable if text is longer
- Loading spinner shown while the server is processing the image
- Multiple images can be processed simultaniously
- Responsive design

### Backend

- Served by Gunicorn
- Gunicorn spawns 4 workers and 4 threads to handle work load (can be increased)

## Requirements

Docker Engine version **18.06.0** and higher.

## Run

---

In the project root directory:

```bash
docker-compose up
```
Access 127.0.0.1:3001 to view the application

## Tests

---

```bash
pytest server/tests
```

Travis CI is used to run tests on git push.

## Future improvements

---

- Write frontend tests
- Some UI changes  
- Add a button that can remove an image card  
- Put image card limit  
- Consider using message queues   
- Reconsider base image of server docker container to something smaller

