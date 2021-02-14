function addItem() {
    const items = document.getElementById('items');
    const input = document.getElementById('newText');
    const li = document.createElement('li');
    const removeBtn = document.createElement('a');
    if (input.value == '') {
        return
    }
    li.innerHTML = input.value;

    removeBtn.innerText = '[Delete]'
    removeBtn.href = '#'

    //const textNode = document.createTextNode(input.value)
    
    li.appendChild(removeBtn)
    items.appendChild(li)
    removeBtn.addEventListener('click',function name(e) {
        e.preventDefault();
        e.target.parentElement.remove()
    })
    input.value = ''
}