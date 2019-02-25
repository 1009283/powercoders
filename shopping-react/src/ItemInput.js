import React, {Component} from 'react';

class ItemInput extends Component {
  render() {
    return (
      <div>
        <label htmlFor="item">Enter a new item:</label>
        <input type="text" id="quantity" size="8" placeholder="quantity" />
        <input type="text" id ="item" placeholder="Type something to buy" />
        <button id="add">Add item</button>
      </div>
    );
  }
}

export default ItemInput;
