// import { todo } from "./todo";

function project (name) {

  return {
    name: name,
    todos: []
  }
}

const projects = [];

projects.push(project("Default"));
projects.push(project("The Odin Project"));
projects.push(project("Personal"));

todo();

const myTodo = todo(
  "Finish Todo List",
  "Complete the Odin Project Todo List",
  "2026-09-20",
  "High"
);


projects[1].todos.push(myTodo)

console.log(projects[1].todos);



