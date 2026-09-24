import { projects } from "./project.js";

export function renderProjects() {
  const content = document.querySelector("#content");

  projects.forEach((project) => {
    const projectElement = document.createElement("div");

    projectElement.textContent = project.name;

    content.appendChild(projectElement);
  });
}