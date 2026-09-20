import { todo } from "./todo.js";

export function project (name) {

  return {
    name: name,
    todos: [],

    addTodo(newTodo){
      this.todos.push(newTodo);
    }
  }
}

export const projects = [];

projects.push(project("Default"));
projects.push(project("The Odin Project"));

// const myTodo = todo(
//   "Finish Todo List",
//   "Complete the Odin Project Todo List",
//   "2026-09-20",
//   "High"
// );


// projects[1].addTodo(myTodo)

// console.log(projects[1].todos);
