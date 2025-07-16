// rendern and html functions

import { getFormLs } from './local-storage-api';
import { refs } from './refs';

export const renedernTask = tasks => {
  const markup = tasks
    .map(({ title, description }) => {
      return `<li class="task-list-item" data-title="${title}">
    <button type="button" class="task-list-item-btn">Delete</button>
    <h3>${title}</h3>
    <p>${description}</p>
</li>`;
    })
    .join('');
  refs.list.innerHTML = markup;
};
