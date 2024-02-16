# To-Do-List-Chrome-Extension-

Manifest File (manifest.json):
manifest_version: Specifies the version of the manifest file. In this case, it's using Manifest V3 (version 3).
name: The name of the extension, which is "ToDo List Extension."
version: The version number of the extension, set to "1.0."
description: A brief description of the extension, indicating that it's a simple ToDo list.
action: Specifies an action to be taken when the user interacts with the extension. In this case, it opens a popup with the HTML file named "popup.html."
permissions: Indicates that the extension requires storage permission.
HTML/JavaScript/CSS Code:
HTML (popup.html):

A simple HTML structure with a title, a link to an external CSS file ("popup.css"), and a body containing a ToDo list with an input field for adding tasks and a button to add new tasks.
CSS (popup.css):

Defines styling for the extension popup, setting the body width, padding, input width, and button margin.
JavaScript (popup.js):

Listens for the DOMContentLoaded event, ensuring that the DOM has fully loaded before executing the script.
Retrieves elements from the HTML, such as the ToDo list, input field, and add button.
Uses Chrome storage to retrieve previously saved tasks and populates the ToDo list on extension load.
Listens for the click event on the "Add Task" button, adds a new task to the list, saves the updated tasks to Chrome storage, and clears the input field.
Provides a function (addTaskToList) to add tasks to the list, complete with a "Delete" button for each task. The deletion removes the task from the list and saves the updated tasks to storage.
In summary, this Chrome extension creates a ToDo list that allows users to add tasks, delete tasks, and persist tasks across browser sessions using Chrome storage. The extension's popup is triggered when the user interacts with it, and it's designed to be a simple and easy-to-use task management tool.





