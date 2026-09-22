import { projects } from "./project.js";
import { completeTodo, createProject, createTodo } from "./todoController.js";

const myTodo = createTodo(
  "Finish Todo List",
  "Complete the Odin Project Todo List",
  "2026-09-20",
  "High",
  projects[1]
);

// createProject("Personal");

console.log(projects[1].todos);
// console.log(createTodo);

completeTodo(myTodo);

console.log(myTodo.completed);


