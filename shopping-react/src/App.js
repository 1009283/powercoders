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

  render() {
    return (
      <div>
        <ItemInput onAddItem={this.onAddItem}/>
        <ClearList onClearList={this.onClearList}/>
        <ShoppingList items={this.state.items}/>
       </div>
    );
  }
}

export default App;
