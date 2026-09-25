import { projects } from "./project.js";

export function renderProjects() {
  const content = document.querySelector("#content");

  projects.forEach((project) => {
    const projectsContainer = document.createElement("div");
    const projectButton = document.createElement("button");

    projectsContainer.classList.add("projects");

    projectButton.textContent = project.name;

    projectButton.addEventListener("click", () => {
      console.log(project);
      
    });

    projectsContainer.append(projectButton);
    content.appendChild(projectsContainer);

    project.todos.forEach((todo) => {
      const todoElement = document.createElement("div");

      todoElement.textContent = todo.title;

      projectsContainer.append(todoElement);
    });
  });
}