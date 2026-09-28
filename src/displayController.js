import { projects } from "./project.js";

export function renderProjects() {
  const content = document.querySelector("#content");

  projects.forEach((project) => {
    const projectsContainer = document.createElement("div");
    const projectButton = document.createElement("button");

    projectsContainer.classList.add("projects");

    projectButton.textContent = project.name;

    projectButton.addEventListener("click", () => {
      renderTodos(project);
    });

    projectsContainer.append(projectButton);
    content.appendChild(projectsContainer);
  });
}

export function renderTodos (project) {
  const todosContainer = document.querySelector("#todos");

  todosContainer.innerHTML = "";

  project.todos.forEach((todo) => {
    const todoContent  = document.createElement("div");
    const todoDetails = document.createElement("div");
    const todoTitle = document.createElement("div");
    const todoDescription = document.createElement("div");
    const todoDueDate = document.createElement("div");
    const todoPriority = document.createElement("div");
    // const todoComplete = document.createElement("div");
    const deleteButton = document.createElement("button");

    todoTitle.textContent = todo.title;
    todoDescription.textContent = todo.description;
    todoDueDate.textContent = todo.dueDate;
    todoPriority.textContent = todo.priority;
    // todoComplete.textContent = todo.complete;

    todoDetails.style.display = "none";

    deleteButton.textContent = "Delete";

    todoTitle.addEventListener("click", () => {
      if(todoDetails.style.display === "none"){
        todoDetails.style.display = "block";
      }else{
        todoDetails.style.display = "none";
      }
    });

    todoDetails.append(
      todoDescription,
      todoDueDate,
      todoPriority,
      // todoComplete
    );
    todoContent.append(
      todoTitle,
      todoDetails,
      deleteButton
    );
    todosContainer.append(todoContent);
  });
}