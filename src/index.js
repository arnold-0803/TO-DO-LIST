import { renderProjects, renderTodos } from "./displayController.js";
import { projects } from "./project.js";
import { completeTodo, createProject, createTodo, deleteTodo } from "./todoController.js";

const myTodo = createTodo(
  "Finish Todo List",
  "Complete the Odin Project Todo List",
  "2026-09-20",
  "High",
  projects[1]
);

const projectNameInput = document.querySelector("#project-name");
const addProjectButton = document.querySelector("#add-project");

addProjectButton.addEventListener("click", () => {
  createProject(projectNameInput.value);
  renderProjects();
});

const todoProjectSelect = document.querySelector("#todo-project");

function renderProjectOptions () {
  todoProjectSelect.innerHTML = "";

  projects.forEach((project) => {
    const option = document.createElement("option");

    option.value = project.name;
    option.textContent = project.name;

    todoProjectSelect.append(option);
  });
}

renderProjectOptions();

// createProject("Personal");

console.log(projects);
// console.log(createTodo);

completeTodo(myTodo);

console.log(myTodo.completed);

// deleteTodo(myTodo, projects[1]);

// console.log(projects[1].todos);

renderProjects();

renderTodos(projects[1]);

