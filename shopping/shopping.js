/**
 * Creates and returns an 'li' element for inclusion in the shopping list.
 *
 * @param {{name: string, quantity: string}} item Item to append to the list
 * @returns {HTMLElement} li element
 */
function createNewListItem(item) {
  const listItem = document.createElement('li');
  const span = document.createElement('span');
  const spanText = document.createTextNode(item.name);
  const deleteButton = document.createElement('i');
  deleteButton.addEventListener('click', function (event) {
    listItem.remove();

    document.getElementById('clear').disabled =
        document.querySelectorAll('li').length === 0;
  });

  listItem.appendChild(span);
  span.appendChild(spanText);
  if (item.quantity !== '') {
    listItem.appendChild(document.createTextNode(' '));
    const quantityText = document.createElement('span');
    quantityText.textContent = `(${item.quantity})`;
    listItem.appendChild(quantityText);
  }
  listItem.appendChild(deleteButton).className = 'fas fa-trash';
  return listItem;
}

function domContentLoaded() {
  const inputBox = document.getElementById('item');
  const inputQuantity = document.getElementById('quantity');
  const shoppingList = document.querySelector('ul');
  const addItemButton = document.getElementById('add');
  const clearListButton = document.getElementById('clear');

  addItemButton.addEventListener('click', function (event) {
    const trimmedValue = inputBox.value.trim();

    const item = {
      name: trimmedValue,
      quantity: inputQuantity.value.trim()
    };

    shoppingList.appendChild(createNewListItem(item));
    inputBox.value = '';
    inputQuantity.value = '';
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

  inputBox.addEventListener('keyup', onkeyup);
  inputQuantity.addEventListener('keyup', onkeyup);

  inputBox.focus();
  clearListButton.disabled = true;

}

function onkeyup() {
  const inputBox = document.getElementById('item');
  const inputQuantity = document.getElementById('quantity');
  const shoppingList = document.querySelector('ul');
  const addItemButton = document.getElementById('add');
  const clearListButton = document.getElementById('clear');

  const trimmedValue = inputBox.value.trim();
  const inputQuantityValue = inputQuantity.value.trim();
  addItemButton.disabled = inputBox.value.trim() === '';

  if (trimmedValue === '') {
    return;
  }

  if (event.key !== 'Enter') {
    return;
  }

  const item = {
    name: trimmedValue,
    quantity: inputQuantityValue
  };

  shoppingList.appendChild(createNewListItem(item));
  inputBox.value = '';
  inputQuantity.value = '';
  addItemButton.disabled = true;
  clearListButton.disabled = false;
  inputBox.focus();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function (event) {
    domContentLoaded();
  });
} else {
  domContentLoaded();
}


