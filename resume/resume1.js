document.querySelector(".add1").addEventListener("click",function(){
  add1();
});
function add1(){
   document.querySelector(".sociallinks").classList.remove("sociallinks");
}
 

 
 

 var count=1;
var id="#a"+count;
const button = document.querySelector('.add2');
console.log(button);



button.onclick = function() {
 

    var elem=document.querySelector(id);
    console.log(elem);
    var clone =elem.cloneNode(true);
    clone.id="#a"+count;
    elem.after(clone);
    count++;
    

}


function inputResume1(){

  sessionStorage.setItem("firstname",document.getElementById("firnam").value );
}
