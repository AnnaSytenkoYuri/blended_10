//  addition and delition our tasks

import { getFormLs, savedInLs } from './local-storage-api';
import { renedernTask } from './render-tasks';

const tasks = getFormLs('tasks') || [];

export const getSavedTasks = () => {
    renedernTask(tasks);
};

export const addTask = task => {
  tasks.push(task);
  renedernTask(tasks);
  savedInLs('tasks', tasks);
};

export const deleteTask = (text) => {
    const updateTasks = tasks.filter(task => task.title !== text); 
    tasks.length = 0;
    tasks.push(...updateTasks);

    renedernTask(tasks);
    savedInLs('tasks', tasks);
};
