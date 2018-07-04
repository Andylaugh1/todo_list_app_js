const PubSub = require('../helpers/pub_sub.js');

const ToDoListFormView = function (form) {
  this.form = form;
};

ToDoListFormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (event) => {
    this.handleSubmit(event);
  })
};

ToDoListFormView.prototype.handleSubmit = function (event) {
  event.preventDefault();
  const newTask = this.createTask(event.target);
  PubSub.publish('ToDoList:new-task-submitted', newTask);
  event.target.reset();
};

ToDoListFormView.prototype.createTask = function (form) {
  const newTask = {
    task: form.task.value,
    date: form.date.value,
    complete: form.complete.value
  }
  return newTask;
};
module.exports = ToDoListFormView;
