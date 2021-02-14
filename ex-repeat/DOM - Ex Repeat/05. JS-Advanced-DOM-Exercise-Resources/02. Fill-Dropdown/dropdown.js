function addItem() {
    let itemValue = document.querySelector('#newItemValue')
    let itemText = document.querySelector('#newItemText')
    let menu = document.querySelector('#menu');
    let option = document.createElement('option');
    option.textContent = itemText.value
    menu.appendChild(option)
    itemText.value = ''
    itemValue.value = ''
    
}