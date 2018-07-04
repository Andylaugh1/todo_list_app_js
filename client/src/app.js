const ToDoListView = require('./views/to_do_list_view.js');
const ToDoListGridView = require('./views/to_do_list_grid_view.js');
const ToDoList = require('./models/to_do_list.js');
const ToDoListFormView = require('./views/to_do_list_form_view.js');

document.addEventListener('DOMContentLoaded', () => {

  const taskForm = document.querySelector('form#new-task-form');
  const toDoListFormView = new ToDoListFormView(taskForm);
  toDoListFormView.bindEvents();

  const toDoListContainer = document.querySelector('div#task-list');
  const toDoListGridView = new ToDoListGridView(toDoListContainer);
  toDoListGridView.bindEvents();

  const toDoListUrl = "http://localhost:3000/api/to_do_list";
  const toDoList = new ToDoList(toDoListUrl);
  toDoList.bindEvents();
  toDoList.getData();
});
