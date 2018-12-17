function hide(event) {
    setClass('hide-list', 'hide');
    setClass('ingredients-list', 'hide');
    setClass('show-list', 'show');
}

function show(event) {
    setClass('hide-list', 'show');
    setClass('ingredients-list', 'show');
    setClass('show-list', 'hide');
}

function setClass(id, className) {
    let el = document.getElementById(id);
    el.className = className;
}