const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const ToDoList = function (url) {
  this.url = url;
};

ToDoList.prototype.bindEvents = function () {
  PubSub.subscribe('ToDoList:new-task-submitted', (event) => {
    this.postNewTask(event.detail);
  })
};


ToDoList.prototype.getData = function () {
  const request = new Request(this.url);
  request.get()
  .then((to_do_list) => {
    PubSub.publish('ToDoList:data-loaded', to_do_list);
  })
  .catch(console.error);
};

ToDoList.prototype.postNewTask = function (listItem) {
  const request = new Request(this.url);
  request.post(listItem)
    .then((to_do_list) => {
      PubSub.publish('ToDoList:data-loaded', to_do_list);
    })
    .catch(console.error);
};

module.exports = ToDoList;
