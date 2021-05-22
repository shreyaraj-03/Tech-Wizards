
var count1=1;
var id="#jj"+count1;
const but1 = document.querySelector("#btnp");
but1.onclick = function() {
    var element1=document.querySelector("#jj");
    var clone1 =element1.cloneNode(true);
    clone1.id="#jj"+count1;
    element1.after(clone1);
    count1++;

    let inp = clone1.querySelectorAll("textarea");
    inp[0].value = '';


   let node=clone1.querySelector("#btnp");
   if( node.parentNode){
    node.parentNode.removeChild(node);
   }
   
    

    var del1Btn=clone1.querySelector(".delbutton1");
    let mainele =document.getElementById("form4");
    del1Btn.onclick = function() {
    mainele.removeChild(clone1);
    }
    
    
    
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


let inp = clone2.querySelectorAll("textarea");
inp[0].value = '';


let node=clone2.querySelector("#btnq");
if( node.parentNode){
 node.parentNode.removeChild(node);
}
var del2Btn=clone2.querySelector(".delbutton2");
    let mainele =document.getElementById("form4");
    del2Btn.onclick = function() {
    mainele.removeChild(clone2);
    }
    
    
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


let inp = clone3.querySelectorAll("textarea");
inp[0].value = '';


  let node=clone3.querySelector("#btnr");
  if( node.parentNode){
 node.parentNode.removeChild(node);
  }
var del3Btn=clone3.querySelector(".delbutton3");
    let mainele =document.getElementById("form4");
    del3Btn.onclick = function() {
    mainele.removeChild(clone3);
    }
    
    
}
   