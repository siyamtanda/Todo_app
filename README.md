# To-Do List App

Welcome to the To-Do List App! This simple web application allows you to manage your tasks efficiently. You can create, read, update, and delete tasks with ease.

## Getting Started

1. Clone this repository to your local machine.

   ```shell
   git clone <repository-url>
2. Navigate to the project directory.
   cd to-do-list-app
3. Navigate to server
   cd to-do-list-app/server
4. Navigate to client
   cd to-do-list-app/client  
5. Install the required dependencies.
   npm install
6. Start application
   npm start

### Features
View Tasks: The app displays your tasks, which can be marked as complete or incomplete.
Add Task: Click the "+" button to open a popup where you can create a new task.
Complete Task: Click on a task to mark it as complete or incomplete.
Delete Task: Click the "x" button to delete a task.
### Technologies Used
Frontend: React.js
Backend: Node.js, Express.js, MongoDB (for storing tasks)
Styling: CSS
### API Endpoints
-GET /todo: Retrieve a list of all tasks.

-POST /todo/new: Create a new task.

-GET /todo/complete/:id: Toggle the completion status of a task.

-DELETE /todo/delete/:id: Delete a task.

-PUT /todo/update/:id: Update the text of a task.

### Folder Structure
client: Contains the React frontend code.
api: Contains the Express.js backend code.
models: Contains the MongoDB schema for tasks.
Usage
Open the app in your web browser.
View your existing tasks.
Click the "+" button to add a new task.
Click on a task to mark it as complete or incomplete.
Click the "x" button to delete a task.
Use the app to stay organized and manage your tasks effectively!
### Contributors
Ndzima Siyamtanda
### License
This project is licensed under the siyamtanda License - see the LICENSE.md file for details.
   
