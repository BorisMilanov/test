function addItem() {
    let list = document.getElementById('items')
    let input = document.getElementById('newItemText')

    let li = document.createElement('li');
    li.innerText = input.value;
    list.appendChild(li)
    input.value = ''
}