console.log('my javaScript is running');

function addPara(text) {
    let elP = document.createElement('p');
    let pContent = document.createTextNode(text);
    elP.appendChild(pContent);
    let elBody = document.getElementById('bodygak');
    elBody.appendChild(elP);
}

document.addEventListener('DOMContentLoaded', function(event) {
    document.getElementById('sodawater').addEventListener('click', function(event) {
        //addPara('the new text');
        addList();
    });
});

console.log('adding lists');

function addList() {
    console.log('add list is running');

    // DONE: Create the list
    let list = document.createElement('ul');

    // DONE: Create and append first li
    let li = document.createElement('li');
    let lContent = document.createTextNode('Item one');
    li.appendChild(lContent);
    list.appendChild(li);

    // Create and append second li
    li = document.createElement('li');
    let em = document.createElement('em');
    let emContent = document.createTextNode('emphasised text');
    lContent = document.createTextNode('Item two ');
    li.appendChild(lContent);
    li.appendChild(em);
    em.appendChild(emContent);
    list.appendChild(li);


    // Create and append third li
    li = document.createElement('li');
    lContent = document.createTextNode('Item three');
    li.appendChild(lContent);
    list.appendChild(li);



    // DONE: Add the list to the body
    let body = document.getElementById('bodygak');
    body.appendChild(list);




}



