import { renderProjects, renderTodos } from "./displayController.js";
import { projects } from "./project.js";
import { loadProjects, saveProjects } from "./storage.js";
import { createProject, createTodo } from "./todoController.js";

const projectNameInput = document.querySelector("#project-name");
const addProjectButton = document.querySelector("#add-project");

addProjectButton.addEventListener("click", () => {
  if(projectNameInput.value === "") {
    return;
  }

  createProject(projectNameInput.value);

  renderProjects();
  renderProjectOptions();
  saveProjects(projects);
});

const todoProjectSelect = document.querySelector("#todo-project");
const todoTitleInput = document.querySelector("#todo-title");
const todoDescriptionInput = document.querySelector("#todo-description");
const todoDueDateInput = document.querySelector("#todo-due-date");
const todoPriorityInput = document.querySelector("#todo-priority");
const addTodoButton = document.querySelector("#add-todo");

addTodoButton.addEventListener("click", () => {
  if(todoTitleInput.value === ""){
    return;
  }
  
  const selectedProject = projects[todoProjectSelect.value];

  createTodo(
    todoTitleInput.value,
    todoDescriptionInput.value,
    todoDueDateInput.value,
    todoPriorityInput.value,
    selectedProject
  );

  renderTodos(selectedProject);
  saveProjects(projects);

  todoTitleInput.value = "";
  todoDescriptionInput.value = "";
  todoDueDateInput.value = "";
  todoPriorityInput.value = "";
});

function renderProjectOptions () {
  todoProjectSelect.innerHTML = "";

  projects.forEach((project) => {
    const option = document.createElement("option");

    option.value = projects.indexOf(project);
    option.textContent = project.name;

    todoProjectSelect.append(option);
  });
}

loadProjects();
renderProjectOptions();
renderProjects();
