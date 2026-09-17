import { project, projects } from "./project";

function createProject (name) {
  const newProject = project(name);
  projects.push(newProject);
}