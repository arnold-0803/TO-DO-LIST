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
