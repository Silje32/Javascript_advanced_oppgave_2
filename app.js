/* A system that logs watched movies and series and rates them */

// Defining constants
const list = document.querySelector("#list");
const input = document.querySelector("#input");
const showFavourites = document.querySelector("completed");
const sortBy = document.querySelector("sort-by");

let tasks = [];
let filters = { completed: false, sortType: "time-desc" };

// Add Data To Local Storage
const saveTasksToStorage = () =>
  localStorage.setItem("tasks", JSON.stringify(tasks));

// Sort
sortBy.addEventListener("change", (e) => {
  filters.sortType = e.target.value;
  renderPage();
});

toggleCompleted.addEventListener("change", (e) => {
  // filters.coompleted = !filters. completed
  filters.toggle.Completed = e.target.checked;
  renderPage();
});

// Show Data - make the list
const taskForm = document.querySelector("#task-form");
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(taskForm);
  const userInput = formData.get("task-input");

  if (!userInput) {
    return alert("Input cannot be empty.");
  }
  // Clear the input field after submission
  taskInput.value = "";

  /* Pushe tasks */
  tasks.push({
    timestamp: new Date(),
@@ -54,126 +58,126 @@
  });

  return inputElement;
};


// Update Data and add as favourite or recommended

// Filter Data

// Sort Data alphanumeric or by date



// Edit task button
// Edit
const editTaskButton = (task, descriptionElement) => {
  const buttonElement = document.createElement("button");
  buttonElement.classList.add("edit-button");
  buttonElement.textContent = "Edit";

  buttonElement.addEventListener("click", (e) => {
    task.description = descriptionElement.value;
    descriptionElement.readOnly = !descriptionElement.readOnly;
    buttonElement.textContent = descriptionElement.readOnly ? "Edit" : "Save";
    saveTasksToStorage();
  });

  return buttonElement;
};

// Remove Data - Delete
const deleteTaskButton = (task) => {
  const buttonElement = document.createElement("button");
  buttonElement.classList.add("delete-button");
  buttonElement.textContent = "Delete";

  buttonElement.addEventListener("click", (e) => {
    const taskIndex = tasks.indexOf(task);
    if (taskIndex > -1) {
      tasks.splice(taskIndex, 1);
    }

    saveTasksToStorage();
    renderPage();
  });

  return buttonElement;
};

const buildPage = (tasksArr) => {
  console.log(tasksArr);
  listContainer.replaceChildren();
  tasksArr.forEach((task) => {
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");

    const timestampElement = document.createElement("p");
    timestampElement.classList.add("datetime");
    timestampElement.textContent = task.timestamp.toLocaleString("en-UK");

    const descriptionElement = document.createElement("input");
    descriptionElement.classList.add("description");
    descriptionElement.readOnly = true;
    descriptionElement.value = task.description;

    //Buttons
    const inputElement = completeTaskInput(task);
    const editBtn = editTaskButton(task, descriptionElement);
    const deleteBtn = deleteTaskButton(task);

    taskContainer.append(
      timestampElement,
      descriptionElement,
      inputElement,
      editBtn,
      deleteBtn
    );

    listContainer.prepend(taskContainer);
  });
};
const renderPage = () => {
  const storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    tasks = JSON.parse(storedTasks);
  }
  buildPage(filterArray(tasks));
};

// Filter Data

// Sort Data alphanumeric or by date
