import { projects } from "./project.js";
import { saveProjects } from "./storage.js";
import { completeTodo, deleteTodo, editTodo } from "./todoController.js";

export function renderProjects() {
  const content = document.querySelector("#content");

  content.innerHTML = "";

  projects.forEach((project) => {
    const projectsContainer = document.createElement("div");
    const projectButton = document.createElement("button");

    projectsContainer.classList.add("projects");

    projectButton.textContent = project.name;

    if(project === projects[0]){
      projectButton.classList.add("active-project");
    }

    projectButton.addEventListener("click", () => {
      document
        .querySelectorAll(".projects button")
        .forEach((button) => {
          button.classList.remove("active-project");
        });

      projectButton.classList.add("active-project");

      renderTodos(project);
    });

    projectsContainer.append(projectButton);
    content.appendChild(projectsContainer);
  });
}

export function renderTodos (project) {
  const todosContainer = document.querySelector("#todos");

  todosContainer.innerHTML = "";

  if(project.todos.length === 0){
    const emptyState = document.createElement("div");
    const emptyTitle = document.createElement("h3");
    const emptyMessage = document.createElement("p");

    emptyState.classList.add("empty-state");
    emptyTitle.textContent = "Nothing on your list yet";
    emptyMessage.textContent = 
      "Create a task using the form on the right to get started";
    
    emptyState.append(emptyTitle, emptyMessage);
    todosContainer.append(emptyState);
  }

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

    todoContent.classList.add("todo-card");
    todoTitle.classList.add("todo-title");
    todoDescription.classList.add("todo-description");
    todoDueDate.classList.add("todo-due-date");
    todoPriority.classList.add("priority-indicator");

    completeCheckbox.classList.add("todo-checkbox");
    editButton.classList.add("edit-btn");
    deleteButton.classList.add("delete-btn");

    todoTitle.textContent = todo.title;
    todoDescription.textContent = todo.description;
    todoDueDate.textContent = todo.dueDate;
    todoPriority.textContent = todo.priority;

    if(todo.priority){
      todoPriority.classList.add(
        `priority-${todo.priority.toLowerCase()}`
      );
    }

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
      saveProjects(projects);
      todoContent.remove();
    });

    completeCheckbox.addEventListener("change", () => {
      completeTodo(todo, completeCheckbox.checked);
      saveProjects(projects);
    });

    editButton.addEventListener("click", () => {
      const titleInput = document.createElement("input");
      titleInput.value = todo.title;
      todoTitle.replaceWith(titleInput);
      titleInput.classList.add("edit-input");

      const descriptionInput = document.createElement("textarea");
      descriptionInput.value = todo.description;
      descriptionInput.classList.add("edit-input");

      const dueDateInput = document.createElement("input");
      dueDateInput.type = "date";
      dueDateInput.value = todo.dueDate;
      dueDateInput.classList.add("edit-input");

      const priorityInput = document.createElement("input");
      priorityInput.value = todo.priority;
      priorityInput.classList.add("edit-input");

      const saveButton = document.createElement("button");
      saveButton.textContent = "Save";
      saveButton.classList.add("save-btn");

      saveButton.addEventListener("click", () => {
        editTodo(
          todo,
          titleInput.value,
          descriptionInput.value,
          dueDateInput.value,
          priorityInput.value
        );

        saveProjects(projects);

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
      todoPriority
    );
    todoContent.append(
      completeCheckbox,
      todoTitle,
      todoDueDate,
      todoDetails,
      editButton,
      deleteButton
    );
    todosContainer.append(todoContent);
  });
}