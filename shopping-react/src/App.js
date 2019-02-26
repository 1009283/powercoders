import React, { Component } from 'react';
import './App.css';
import ItemInput from './ItemInput';
import ClearList from './ClearList';
import ShoppingList from './ShoppingList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };

    this.onAddItem = this.onAddItem.bind(this);
    this.onClearList = this.onClearList.bind(this);
    this.onDeleteItem = this.onDeleteItem.bind(this);
  }

  onAddItem(name, quantity) {
    let item = name;
    if (quantity !== '') {
      item = item + ` (${quantity})`;
    }
    this.setState((prevState) => ({items: prevState.items.concat(item)}));
  }

  onClearList() {
    this.setState({items: []})
  }

  onDeleteItem(index) {
    this.setState((prevState) => {
      prevState.items.splice(index, 1);
      return {items: prevState.items};
    });
  }

  render() {
    return (
      <div>
        <ItemInput onAddItem={this.onAddItem}/>
        <ClearList onClearList={this.onClearList}/>
        <ShoppingList items={this.state.items}
                      onDeleteItem={this.onDeleteItem}/>
       </div>
    );
  }
}

export default App;
