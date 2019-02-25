import React, {Component} from 'react';

class ShoppingList extends Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item) => <li>{item}</li>)}
      </ul>
    );
  }
}

export default ShoppingList;
