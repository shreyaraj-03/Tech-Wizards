for (var i = 0; i < 4; i++) {
  const input = document.querySelectorAll(".id_input")[i];
  // input.value  = "Item-1";
  input.placeholder = "Enter Here";
}




var count1 = 1;
var id1 = "#x" + count1;
const button1 = document.querySelector('#btnx');

button1.onclick = function () {
  var elem1 = document.querySelector(id1);
  console.log(elem1);
  var clone1 = elem1.cloneNode(true);
  count1++;
  clone1.id = "#x" + count1;
  elem1.after(clone1);


  
  let inp = clone1.querySelectorAll("input");
  inp[0].value = '';



  let node = clone1.querySelector("#btnx");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  }

  var del1Btn = clone1.querySelector(".delbutton1");
  let mainele = document.getElementById("form2nd");
  del1Btn.onclick = function () {
    mainele.removeChild(clone1);
  }

}






var count2 = 1;
var id2 = "#levellang";
const button2 = document.querySelector('#btny');

button2.onclick = function () {
  var elem2 = document.querySelector(id2);
  console.log(elem2);
  var clone2 = elem2.cloneNode(true);
  count2++;
  clone2.id = "#y" + count2;
  elem2.after(clone2);

  let inp = clone2.querySelectorAll("input");
  inp[0].value = '';
  inp[1].value = '';



  let node = clone2.querySelector("#btny");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  }


  var del2Btn = clone2.querySelector(".delbutton2");
  let mainele = document.getElementById("form2nd");
  del2Btn.onclick = function () {
    mainele.removeChild(clone2);
  }
}


var count3 = 1;
var id3 = "#z" + count3;
const button3 = document.querySelector('#btnz');

button3.onclick = function () {
  var elem3 = document.querySelector(id3);
  console.log(elem3);
  var clone3 = elem3.cloneNode(true);
  clone3.id = "#y" + count3;
  elem3.after(clone3);
  count3++;

  let inp = clone3.querySelectorAll("input");
  inp[0].value = '';



  let node = clone3.querySelector("#btnz");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  }
  var del3Btn = clone3.querySelector(".delbutton3");
  let mainele = document.getElementById("form2nd");
  del3Btn.onclick = function () {
    mainele.removeChild(clone3);
  }

}

  // listBtn.onclick = function() {
  //
  //     list.removeChild(listItem);
  // }

    //input.focus();
