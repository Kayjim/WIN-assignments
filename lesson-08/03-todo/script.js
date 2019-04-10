function addItem(elm) {
    var item = document.createElement('li');
    item.textContent = elm.value;
    elm.parentElement.parentElement.insertBefore(item, elm.parentElement);
    elm.value = '';
}

document.querySelector('#newtodo').addEventListener('keyup', e => e.keyCode == 13 ? addItem(e.target) : null);
document.querySelector('#submit').addEventListener('click', e => addItem(e.target.previousElementSibling));
document.querySelector('ul').addEventListener('click', e => {
    if(e.target.tagName == 'LI' && e.target.id != 'newtodoli') {
        e.target.style.textDecoration = 'line-through';
        e.target.style.animation = 'disappear 1.1s';
        setTimeout(() => e.target.remove(), 1000);
    }
});