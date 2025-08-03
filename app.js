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

function displayWatchedMovies() {}

// Show Data

// Update Data and add as favourite or recommended

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

// Filter Data

// Sort Data alphanumeric or by date
