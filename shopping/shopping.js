document.addEventListener('DOMContentLoaded', function (event) {
  const inputBox = document.getElementById('item');
  const shoppingList = document.querySelector('ul');
  const addItemButton = document.getElementById('add');
  const clearListButton = document.getElementById('clear');

  addItemButton.addEventListener('click', function (event) {
    const trimmedValue = inputBox.value.trim();

    shoppingList.appendChild(createNewListItem(trimmedValue));
    inputBox.value = '';
    inputBox.focus();
    clearListButton.disabled = false;
  });

  clearListButton.addEventListener('click', function (event) {
    const listItems = document.querySelectorAll('li');
    listItems.forEach(function (element) {
      element.remove();
    });
    clearListButton.disabled = true;
  });



  inputBox.addEventListener('keyup', function (event) {
    const trimmedValue = inputBox.value.trim();
    addItemButton.disabled = inputBox.value.trim() === '';

    if (trimmedValue === '') {
      return;
    }

    if (event.key !== 'Enter') {
      return;
    }

    shoppingList.appendChild(createNewListItem(trimmedValue));
    inputBox.value = '';
    addItemButton.disabled = true;
    clearListButton.disabled = false;
  });
  inputBox.focus();
  clearListButton.disabled = true;
});

/**
 * Creates and returns an 'li' element for inclusion in the shopping list.
 *
 * @param {string} itemName Name of the item to add to the list
 * @returns {HTMLElement} li element
 */
function createNewListItem(itemName) {
  const listItem = document.createElement('li');
  const span = document.createElement('span');
  const spanText = document.createTextNode(itemName);
  const deleteButton = document.createElement('i');
  deleteButton.addEventListener('click', function (event) {
    listItem.remove();

    document.getElementById('clear').disabled =
        document.querySelectorAll('li').length === 0;
  });

  listItem.appendChild(span);
  span.appendChild(spanText);
  listItem.appendChild(deleteButton).className = 'fas fa-trash';
  return listItem;
}




