const PubSub = require('../helpers/pub_sub.js');

const ToDoListView = function (container) {
  this.container = container;
};

ToDoListView.prototype.render = function (listItem) {
  const listItemContainer = document.createElement('div');
  listItemContainer.id = 'listItem';

  const task = this.createHeading(listItem.task);
  listItemContainer.appendChild(task);

  const date = this.createDetail('Date', listItem.date);
  listItemContainer.appendChild(date);

  const complete = this.createDetail('Complete', listItem.complete);
  listItemContainer.appendChild(complete);

  const deleteButton = this.createDeleteButton(listItem._id);
  listItemContainer.appendChild(deleteButton);

  this.container.appendChild(listItemContainer);
};

ToDoListView.prototype.createHeading = function (textContent) {
  const heading = document.createElement('h1');
  heading.textContent = textContent;
  return heading;
};

ToDoListView.prototype.createDetail= function (label, text) {
  const detail = document.createElement('p');
  detail.textContent = `${label}: ${text}`;
  return detail;
};

ToDoListView.prototype.createDeleteButton= function (listItemId) {
  const button = document.createElement('button');
  button.classList.add('delete-btn');
  button.value = listItemId;

  button.addEventListener('click', (event) => {
    PubSub.publish('ToDoListView:list-item-delete-clicked', event.target.value);
  });
  return button;
};
module.exports = ToDoListView;
