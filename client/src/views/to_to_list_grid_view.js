const PubSub = require('../helpers/pub_sub.js');
const ToDoListView = require('./to_do_list_view.js');

const ToDoListView = function (container) {
  this.container = container;
};

ToDoListView.prototype.bindEvents = function () {
  PubSub.subscribe('ToDoList:data-loaded', (event) => {
    this.render(event.detail);
  });
};
ToDoListView.prototype.render = function (toDoList) {
  this.container.innerHTML = '';
  const toDoListView = new ToDoListView(this.container);
  toDoList.forEach((task) => toDoListView.render(task));
};
module.exports = ToDoListView;
