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

ListItemView.prototype.createHeading = function (textContent) {
  const heading = document.createElement('h1');
  heading.textContent = textContent;
  return heading;
};

ListItemView.prototype.createDetail= function (textContent) {
  const detail = document.createElement('p');
  detail.textContent = textContent;
  return detail;
};

ListItemView.prototype.createDeleteButton= function (listItemId) {
  const button = document.createElement('button');
  button.classList.add('delete-btn');
  button.value = ListItemId;

  button.addEventListener('click', (event) => {
    PubSub.publish('ToDoListView:list-item-delete-clicked', event.target.value);
  });
  return button;
};
module.exports = ListItemView;
