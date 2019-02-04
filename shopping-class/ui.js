function domContentLoaded() {
  const inputBox = document.getElementById('item');
  const inputQuantity = document.getElementById('quantity');
  const shoppingList = document.querySelector('ul');
  const addItemButton = document.getElementById('add');
  const clearListButton = document.getElementById('clear');

  addItemButton.addEventListener('click', function (event) {
    const trimmedValue = inputBox.value.trim();
    const inputQuantityValue = inputQuantity.value.trim();
    const item = new ShoppingListItem(trimmedValue, inputQuantityValue);

    shoppingList.appendChild(item.toListItem());
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

  const item =  new ShoppingListItem(trimmedValue, inputQuantityValue);

  shoppingList.appendChild(item.toListItem());
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


