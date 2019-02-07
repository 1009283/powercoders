/** HTML View for the ShoppingList. */
class View {
  /**
   * @param model {!Model} App data model
   * @param controller {!Controller} App controller
   */
  constructor(model, controller) {

    console.log('View ready!');

    /** @private {!Model} App data model */
    this.model_ = model;

    /** @private {!Controller} App controller */
    this.controller_ = controller;

    /** @private {!HTMLElement} Shopping list element */
    this.shoppingList_ = document.querySelector('ul');

    /** @private {!HTMLElement} Input widget for items */
    this.inputBox_ = document.getElementById('item');

    /** @private {!HTMLElement} Input widget for quantities */
    this.quantiyBox_ = document.getElementById('quantity');

    /** @private {!HTMLElement} Button to add an Item */
    this.addItemButton_ = document.getElementById('add');

    /** @private {!HTMLElement} Button to clear the list */
    this.clearListButton_ = document.getElementById('clear');

    /** @private {!HTMLElement} Shopping list element */
    this.addItemButton_.addEventListener('click', () => this.addItem());
    this.clearListButton_.addEventListener('click', () => this.controller_.clearList());
    this.inputBox_.addEventListener('keyup', (event) => this.onkeyup(event));
    this.quantiyBox_.addEventListener('keyup', (event) => this.onkeyup(event));
  }
  /** Update the UI with the shopping list contents */
  update() {
    while (this.shoppingList_.firstChild) {
      this.shoppingList_.firstChild.remove();
    }

    for (let i = 0; i < this.model_.items.length; i++) {
      const item = this.model_.items[i];
      const listItem = item.toListItem();
      const deleteButton = listItem.querySelector('i');
      deleteButton.addEventListener('click', () => this.controller_.deleteItem(i));
      this.shoppingList_.appendChild(listItem);
    }
    this.addItemButton_.disabled = true;
    this.inputBox_.value = '';
    this.quantiyBox_.value = '';
    this.inputBox_.focus();
    this.clearListButton_.disabled = this.model_.items.length === 0;
  }

  /**
   * Notifies the controller tho add an item to the list.
   */
  addItem() {
    const trimmedValue = this.inputBox_.value.trim();
    const trimmedQuantity = this.quantiyBox_.value.trim();

    this.controller_.addItem(trimmedValue, trimmedQuantity);
  }

  /**
   * Handle keyup events for input widgets. Conditionally
   * enable/disable the addItemButton, and add the item if
   * it's not the empty string.
   *
   * @param event
   */
  onkeyup(event) {
    const trimmedValue = this.inputBox_.value.trim();

    this.addItemButton_.disabled = trimmedValue === '';

    if (trimmedValue === '') {
      return;
    }

    if (event.key !== 'Enter') {
      return;
    }

    this.addItem();
  }
}
