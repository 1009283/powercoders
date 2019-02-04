/**
 * Represents an item in the shopping list.
 */
class ShoppingListItem {
  /**
   * @param name {string} Name of the item
   * @param quantity {string} Quantity of the item
   */
  constructor(name, quantity) {
    this.name = name;
    this.quantity = quantity;
  }
  /**
   * Creates and returns an 'li' element for inclusion in the shopping list.
   *
   * @returns {HTMLElement} li element
   */
  toListItem() {
    const listItem = document.createElement('li');
    const span = document.createElement('span');
    const spanText = document.createTextNode(this.name);
    const deleteButton = document.createElement('i');
    deleteButton.addEventListener('click', function (event) {
      listItem.remove();

      document.getElementById('clear').disabled =
          document.querySelectorAll('li').length === 0;
    });

    listItem.appendChild(span);
    span.appendChild(spanText);
    if (this.quantity !== '') {
      listItem.appendChild(document.createTextNode(' '));
      const quantityText = document.createElement('span');
      quantityText.textContent = `(${this.quantity})`;
      listItem.appendChild(quantityText);
    }
    listItem.appendChild(deleteButton).className = 'fas fa-trash';
    return listItem;
  }
}