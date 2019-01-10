document.addEventListener('DOMContentLoaded', function (event) {
  document.querySelector('button').addEventListener('click', function(event) {
    document.getElementById('item');
    let inputBox = document.getElementById('item');
    let li = createNewListItem(inputBox.value);
    let ul = document.querySelector('ul');
    ul.appendChild(li);
    inputBox.value = '';
  });

  document.querySelector('input').addEventListener('keyup',function (event) {
    if (event.key === 'Enter') {
      let inputBox = document.getElementById('item');
      let li = createNewListItem(inputBox.value);
      let ul = document.querySelector('ul');
      ul.appendChild(li);
      inputBox.value = '';
    }
  });
});

function createNewListItem(itemName) {
  let listItem = document.createElement('li');
  let span = document.createElement('span');
  let spanText = document.createTextNode(itemName);
  let deleteButton = document.createElement('button');
  let buttonText = document.createTextNode('Delete');
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
