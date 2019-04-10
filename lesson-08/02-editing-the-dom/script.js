var list = document.querySelector('#list');
var items = list.children;
items[1].innerHTML = 'Fair Trade Coffee';
items[3].remove();
var cheesewhiz = document.createElement('li');
cheesewhiz.textContent = 'Cheese Whiz';
list.appendChild(cheesewhiz);

var arr = ['protein powder', 'muscle milk', 'power bars'];
[...list.children].forEach(e => e.remove());
arr.forEach(e => {
    var item = document.createElement('li');
    item.textContent = e;
    list.appendChild(item);
});