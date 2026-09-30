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

export function completeTodo (todo, completed) {
  todo.completed = completed;
}

export function changePriority (todo, newPriority) {
  todo.priority = newPriority;
}

export function deleteTodo (todo, project) {
  const index = project.todos.indexOf(todo);
  
  project.todos.splice(index, 1);
}

export function editTodo (todo, title, description, dueDate, priority) {
  todo.title = title;
  todo.description = description;
  todo.dueDate = dueDate;
  todo.priority = priority;
}
