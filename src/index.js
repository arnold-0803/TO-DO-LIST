import { projects } from "./project.js";
import { createProject, createTodo } from "./todoController.js";

createProject("Personal");

console.log(projects[1].todos);
// console.log(createTodo);

