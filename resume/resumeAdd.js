for(var i=0;i<4;i++){
const input = document.querySelectorAll(".id_input")[i];
// input.value  = "Item-1";
input.placeholder  = "Enter Here";
}

// Selecting Button from DOM
//const button = document.querySelectorAll(".button")[i];
//console.log(button);


var count1=1;
var id1="#x"+count1;
const button1 = document.querySelector('#btnx');

button1.onclick = function() {
    var elem1=document.querySelector(id1);
    console.log(elem1);
    var clone1 =elem1.cloneNode(true);
    clone1.id="#x"+count1;
    elem1.after(clone1);
    count1++;
}
   

var count2=1;
var id2="#y"+count2;
const button2 = document.querySelector('#btny');

button2.onclick = function() {
    var elem2=document.querySelector(id2);
    console.log(elem2);
    var clone2 =elem2.cloneNode(true);
    clone2.id="#y"+count2;
    elem2.after(clone2);
    count2++;
}
    
var count3=1;
var id3="#z"+count3;
const button3 = document.querySelector('#btnz');

button3.onclick = function() {
    var elem3=document.querySelector(id3);
    console.log(elem3);
    var clone3 =elem3.cloneNode(true);
    clone3.id="#y"+count3;
    elem3.after(clone3);
    count3++;
}
