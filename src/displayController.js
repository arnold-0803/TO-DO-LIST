import { projects } from "./project.js";
import { completeTodo, deleteTodo, editTodo } from "./todoController.js";

export function renderProjects() {
  const content = document.querySelector("#content");

  content.innerHTML = "";

  projects.forEach((project) => {
    const projectsContainer = document.createElement("div");
    const projectButton = document.createElement("button");

    projectsContainer.classList.add("projects");

    projectButton.textContent = project.name;

    projectButton.addEventListener("click", () => {
      renderTodos(project);
    });

    projectsContainer.append(projectButton);
    content.appendChild(projectsContainer);
  });
}

export function renderTodos (project) {
  const todosContainer = document.querySelector("#todos");

  todosContainer.innerHTML = "";

  project.todos.forEach((todo) => {
    const todoContent  = document.createElement("div");
    const todoDetails = document.createElement("div");
    const todoTitle = document.createElement("div");
    const todoDescription = document.createElement("div");
    const todoDueDate = document.createElement("div");
    const todoPriority = document.createElement("div");
    const deleteButton = document.createElement("button");
    const completeCheckbox = document.createElement("input");
    const editButton = document.createElement("button");

    todoTitle.textContent = todo.title;
    todoDescription.textContent = todo.description;
    todoDueDate.textContent = todo.dueDate;
    todoPriority.textContent = todo.priority;

    todoDetails.style.display = "none";

    deleteButton.textContent = "Delete";

    completeCheckbox.type = "checkbox";
    completeCheckbox.checked = todo.completed;

    editButton.textContent = "Edit";

    todoTitle.addEventListener("click", () => {
      if(todoDetails.style.display === "none"){
        todoDetails.style.display = "block";
      }else{
        todoDetails.style.display = "none";
      }
    });

    deleteButton.addEventListener("click", () => {
      deleteTodo(todo, project);
      todoContent.remove();
    });

    completeCheckbox.addEventListener("change", () => {
      completeTodo(todo, completeCheckbox.checked);
    });

    editButton.addEventListener("click", () => {
      const titleInput = document.createElement("input");
      titleInput.value = todo.title;
      todoTitle.replaceWith(titleInput);

      const descriptionInput = document.createElement("textarea");
      descriptionInput.value = todo.description;

      const dueDateInput = document.createElement("input");
      dueDateInput.type = "date";
      dueDateInput.value = todo.dueDate;

      const priorityInput = document.createElement("input");
      priorityInput.value = todo.priority;

      const saveButton = document.createElement("button");
      saveButton.textContent = "Save";

      saveButton.addEventListener("click", () => {
        editTodo(
          todo,
          titleInput.value,
          descriptionInput.value,
          dueDateInput.value,
          priorityInput.value
        );

        renderTodos(project);
      });

      todoDetails.innerHTML = "";

      todoDetails.append(
        descriptionInput,
        dueDateInput,
        priorityInput,
        saveButton
      );

      todoDetails.style.display = "block";
    });

    todoDetails.append(
      todoDescription,
      todoDueDate,
      todoPriority
    );
    todoContent.append(
      completeCheckbox,
      todoTitle,
      todoDetails,
      editButton,
      deleteButton
    );
    todosContainer.append(todoContent);
  });
}