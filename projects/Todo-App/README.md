# To-Do List Application

This is a simple Vanilla JS application that allows users to create a to-do list and persist the tasks even after the page is refreshed. The application uses JavaScript's DOM manipulation and Local Storage API to create a user-friendly and functional to-do list.

## Features

- Add tasks to the list
- Check tasks as completed
- Delete tasks from the list
- Tasks are persisted in the browser's local storage, so they will remain even after the page is refreshed.

## Functions

- **fetchAddTask()**: Creates an input field and a button for the user to add a task.
- **fetchTask()**: Pushes the task to an array of tasks, updates the local storage and calls the function addTaskToList() to add the task to the task list.
- **addTaskToList()**: Creates an HTML element for the task and appends it to the task list. It also adds event listeners to the check and delete buttons for each task.
- **checkAndDelete()**: Add event listeners for check and delete buttons for each task, which allows the user to check and delete tasks.
- **refresh()** : fetching the tasks even after refreshing.

## How to use

- Click on the "Add Task" button to add a task
- Enter the task in the input field and click the "Add" button
- The task will be added to the list
- To check a task as completed, click on the checkbox icon next to the task
- To delete a task, click on the delete icon next to the task
- Tasks will be persisted in the browser's local storage, so they will remain even after the page is refreshed.
