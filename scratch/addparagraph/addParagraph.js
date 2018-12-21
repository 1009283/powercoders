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
        addPara('the new text');
    });
});
