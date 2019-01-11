document.addEventListener('DOMContentLoaded', function (event) {
  let inputBox = document.getElementById('item');
  let shoppingList = document.querySelector('ul');

  document.querySelector('button').addEventListener('click', function (event) {
    if (inputBox.value.trim() !=='') {
      shoppingList.appendChild(createNewListItem(inputBox.value.trim()));
      inputBox.value = '';
    }
    inputBox.focus();
  });

  inputBox.addEventListener('keyup', function (event) {
    if (inputBox.value.trim() !=='') {
      if (event.key === 'Enter') {
        shoppingList.appendChild(createNewListItem(inputBox.value.trim()));
        inputBox.value = '';
      }
    }
  });

  inputBox.focus();
});

function createNewListItem(itemName) {
  let listItem = document.createElement('li');
  let span = document.createElement('span');
  let spanText = document.createTextNode(itemName);
  let deleteButton = document.createElement('button');
  let buttonText = document.createTextNode('Delete');
  deleteButton.addEventListener('click', function (event) {
    console.log('Delete Button is clicked: ' + itemName);
    listItem.remove();
  });

  listItem.appendChild(span);
  span.appendChild(spanText);
  listItem.appendChild(deleteButton);
  deleteButton.appendChild(buttonText);
  return listItem;
}
