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

  return newTodo;
}

export function completeTodo (todo) {
  todo.completed = true;
}

export function changePriority (todo, newPriority) {
  todo.priority = newPriority;
}

export function deleteTodo (todo, project) {
  const index = project.todos.indexOf(todo);
}
