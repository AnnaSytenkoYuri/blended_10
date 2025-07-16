// adding event listeners

import { refs } from "./js/refs";
import { addTask, deleteTask, getSavedTasks } from "./js/tasks";

getSavedTasks()

refs.form.addEventListener('submit', (event) => {
  event.preventDefault();

  const title = refs.form.elements['taskName'].value.trim();
  const description = refs.form.elements['taskDescription'].value.trim();

  if(!title || !description) {
    alert('plese fill the fields');
    return;
  } 
  addTask({title, description});
  console.log({title, description});
  refs.form.reset();
})

refs.list.addEventListener('click', (event) => {
  if (event.target.tagName === "BUTTON") {
    const li = event.target.closest('li'); 
    const title = li.dataset.title;; 
    deleteTask(title);
  }
});
