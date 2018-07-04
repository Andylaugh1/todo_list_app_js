const ToDoListView = require('./views/to_do_list_view');
const ToDoListGridView = require('./views/to_do_list_grid_view');
const ToDoList = require('./models/to_do_list.js');

document.addEventListener('DOMContentLoaded', () => {
  const toDoListContainer = document.querySelector('div#task-list');
  const toDoListGridView = new ToDoListGridView(toDoListContainer);
  toDoListGridView.bindEvents();

const toDoListUrl = "http://localhost:3000/api/to_do_list";
const toDoList = new ToDoList(toDoListUrl);
toDoList.getData();
});
