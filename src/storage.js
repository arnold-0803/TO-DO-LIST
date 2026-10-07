import { project, projects } from "./project.js"; 
import { todo } from "./todo.js";

export function saveProjects(projects) {
  localStorage.setItem("projects", JSON.stringify(projects));
  
}

export function loadProjects() {
  const savedProjects = JSON.parse(localStorage.getItem("projects"));

  projects.length = 0;

  savedProjects.forEach((savedProject) => {
    const newProject = project(savedProject.name);

    savedProject.todos.forEach((savedTodo) => {
      const newTodo = todo(
        savedTodo.title,
        savedTodo.description,
        savedTodo.dueDate,
        savedTodo.priority
      );

      newProject.addTodo(newTodo);
    });

    projects.push(newProject);
    console.log(newProject);
  });
}