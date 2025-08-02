/* A system that logs watched movies and series and rates them */

// Defining constants
const list = document.querySelector("#list");
const input = document.querySelector("#input");
const showFavourites = document.querySelector("completed");
const sortBy = document.querySelector("sort-by");

let tasks = [];
let filters = { showCompleted: false, sortType: "time-desc" };

// Add Data To Local Storage
const saveTasksToStorage = () =>
  localStorage.setItem("tasks", JSON.stringify(tasks));

// Sort a todo
sortBy.addEventListener("change", (e) => {
  filters.sortType = e.target.value;
  renderPage();
});

toggleShowCompleted.addEventListener("change", (e) => {
  // filters.showCompleted = !filters.showCompleted
  filters.showCompleted = e.target.checked;
  renderPage();
});

function displayWatchedMovies() {}

// Show Data

// Update Data and add as favourite or recommended

// Remove Data

// Filter Data

// Sort Data alphanumeric or by date
