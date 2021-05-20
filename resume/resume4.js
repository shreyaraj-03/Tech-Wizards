
var count1=1;
var id="#jj"+count1;
const but1 = document.querySelector("#btnp");
but1.onclick = function() {
    var element1=document.querySelector("#jj");
    var clone1 =element1.cloneNode(true);
    clone1.id="#jj"+count1;
    element1.after(clone1);
    count1++;
}
   
var count2=1;
var id="#kk"+count1;
const but2 = document.querySelector("#btnq");
but2.onclick = function() {
var element2=document.querySelector("#kk");
var clone2 =element2.cloneNode(true);
clone2.id="#kk"+count2;
element2.after(clone2);
count2++;
}
   


var count3=1;
var id="#ll"+count3;
const but3 = document.querySelector("#btnr");
but3.onclick = function() {
var element3=document.querySelector("#ll");
var clone3 =element3.cloneNode(true);
clone3.id="#ll"+count3;
element3.after(clone3);
count3++;
}
   