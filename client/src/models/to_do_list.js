const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const ToDoList = function (url) {
  this.url = url;
};

// ToDoList.prototype.bindEvents = function () {
//   PubSub.subscribe('')
//
// };
ToDoList.prototype.getData = function () {
  const request = new Request(this.url);
  request.get()
  .then((to_do_list) => {
    PubSub.publish('ToDoList:data-loaded', to_do_list);
  })
  .catch(console.error);
};

module.exports = ToDoList;
