for(var i=0;i<4;i++){
const input = document.querySelectorAll(".id_input")[i];
// input.value  = "Item-1";
input.placeholder  = "Type Here...";


// Selecting Button from DOM
const button = document.querySelectorAll(".button")[i];
console.log(button);

// Selecting List from DOM
const list = document.querySelectorAll('ul')[i];
// const list = document.getElementsByTagName('ul')[0];
// const list = document.getElementsByClassName('class_list')[0];
console.log(list)


button.onclick = function() {
    let itemInputValue = input.value;
    input.value = '';

    const listItem = document.createElement('li'); console.log(listItem);
    const listText = document.createElement('span'); console.log(listText);
    const listBtn = document.createElement('button'); console.log(listBtn);

    listItem.appendChild(listText);
    listText.textContent = itemInputValue;
    listItem.appendChild(listBtn);
    listBtn.textContent ='DEL';
    list.appendChild(listItem);

    listBtn.onclick = function() {
        console.log(itemInputValue);
        console.log(listItem);
        console.log(listBtn);
        list.removeChild(listItem);
    }

    input.focus();
}
}
