import { project, projects } from "./project.js";
import { todo } from "./todo.js";

export function createProject (name) {
  const newProject = project(name);
  projects.push(newProject);
}

export function createTodo(title, description, dueDate, priority, project) {
  const newTodo = todo(
    title,
    description,
    dueDate,
    priority,
  );

  project.addTodo(newTodo);
}

createTodo(
  "Finish Todo List",
  "Complete the Odin Project Todo List",
  "2026-09-20",
  "High",
  projects[1]
);
