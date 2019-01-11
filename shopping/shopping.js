document.addEventListener('DOMContentLoaded', function (event) {
  const inputBox = document.getElementById('item');
  const shoppingList = document.querySelector('ul');
  const addItemButton = document.querySelector('button');

  addItemButton.addEventListener('click', function (event) {
    if (inputBox.value.trim() !=='') {
      shoppingList.appendChild(createNewListItem(inputBox.value.trim()));
      inputBox.value = '';
      addItemButton.disabled = true;
    }
    inputBox.focus();
  });

  inputBox.addEventListener('keyup', function (event) {
    if (inputBox.value.trim() !=='') {
      addItemButton.disabled = false;
      if (event.key === 'Enter') {
        shoppingList.appendChild(createNewListItem(inputBox.value.trim()));
        inputBox.value = '';
      }
    }
    if (inputBox.value.trim() === '') {
      addItemButton.disabled = true;
    }
  });

  inputBox.focus();
});

function createNewListItem(itemName) {
  const listItem = document.createElement('li');
  const span = document.createElement('span');
  const spanText = document.createTextNode(itemName);
  const deleteButton = document.createElement('button');
  const buttonText = document.createTextNode('Delete');
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
