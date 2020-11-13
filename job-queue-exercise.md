# Job Queue Application

- Task: Implement a JavaScript frontend and Python backend to process images to text.
- Position: Learning and Development Devops Automation Engineer

## Constraints

---

- You must complete the task independently.
- The frontend should be implemented in React preferably, but other modern frameworks are acceptable.
- The backend must be implemented in Python.
- You must use a Git repository and commit frequently.
- We suggest spending around 3 hours on the task as we don't want to take up too much of your time. However you are more than welcome to spend longer if you wish.
- The frontend, backend, and any additional components must run in their own Docker container.
- The Docker containers should be orchestrated using Docker Compose.
- For the purpose of this exercise, please do not modify the contents of `image_processing.py`

## Evaluation

---

- We expect the application to handle multiple incoming job requests.
- The primary goal of this exercise is to see how you handle the connection and communication between multiple systems.
- The code you deliver will be evaluated and we will be doing a review with you.

## Main Tasks

---

- Implement a frontend that allows a user to upload images for processing.
- The frontend should give an overview of jobs in progress.
- Implement a backend that can accept the uploaded images, process them using the image_processing module and display the result.
- It should be possible to start multiple jobs at the same time.

Example usage of the supplied code:
```
import image_processing
image_processing.process_image("/path/to/image.jpg")
```

## Submission

Please submit either a GitHub repository link, or a zip/tar archive of your work.
If submitting an archive, please email it as an attachment to the person who sent you the homework exercise.
Please also include a README with your submission which should indicate to another developer how to setup and run your solution.

## FAQs

---

- Can I use ___?
    - You're free to use whatever libraries, tools, components you desire but bear in mind the purpose of this exercise is to demonstrate your technical skill.
- Can I publish my code on GitHub?
    - Yes, not a problem.
- Other questions
    - Please forward them on to us and we'd be more than happy to answer.
