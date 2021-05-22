document.querySelector(".add1").addEventListener("click", function () {
  add1();
});
function add1() {
  document.querySelector(".sociallinks").classList.remove("sociallinks");
}
//console.log(document.querySelector("#delll"));
//document.querySelector("#delll").addEventListener("click",function(){
// del1();
//});
//function del1(){
//   document.querySelector(".sociallinks").classList.add("sociallinks");
//}
//





//for addition of addition in 1st page
var count = 1;
var id = "#a" + count;
let button = document.querySelector('.add2');
//console.log(button);



button.onclick = function () {


  var elem = document.querySelector("#a1");
  var clone = elem.cloneNode(true);
  count++;
  id = "#a" + count;
  //alert(id);
  clone.id = "a" + count;

  elem.after(clone);


  let inp = clone.querySelectorAll("input");

  inp[0].value = '';
  inp[1].value = '';

  //alert(inp);
  //alert(clone);
  let node = clone.querySelector(".add2");
  if (node.parentNode)
    //alert(node.parentNode);
    node.parentNode.removeChild(node);


  // console.log(button);
  //button=clone.querySelector(".btndel");
  //console.log(button);
  var delBtn = clone.querySelector(".btndel");

  var mainele = document.getElementById("main1");
  delBtn.onclick = function () {
    mainele.removeChild(clone);
  }


}







function inputResume1() {




  /* let file = document.getElementById("imgF").files[0];
 console.log(file);
 let reader = new FileReader();
 //if(file)
 reader.readAsDataURL(file);
 console.log(reader.result);
 reader.onloadend = function(){
 sessionStorage.setItem("img",reader.result);
 }*/




  let file = document.getElementById("imgF").files[0];
  console.log(file);
  let reader = new FileReader();
  //if(file)

  reader.addEventListener("load", function () {

    sessionStorage.setItem("img", reader.result);
  }, false);


  if (file) {
    reader.readAsDataURL(file);
  }





  sessionStorage.setItem("firstName", document.getElementById("firstNameF").value);
  sessionStorage.setItem("lastName", document.getElementById("lastNameF").value);
  sessionStorage.setItem("city", document.getElementById("cityF").value);
  sessionStorage.setItem("state", document.getElementById("stateF").value);
  sessionStorage.setItem("pinCode", document.getElementById("pinCodeF").value);
  sessionStorage.setItem("phoneNo", document.getElementById("phoneNoF").value);
  sessionStorage.setItem("email", document.getElementById("emailF").value);


  let wesso = document.getElementsByClassName("socialWebsiteF");
  let wessl = document.getElementsByClassName("socialLinkF");
  let strfinal = "";
  let c1 = 0;
  let c2 = 0;
  for (let e1 of wesso) {
    c1++;
    for (let e2 of wessl) {
      c2++;
      if (c1 == c2) {

        strfinal = strfinal + `<h5>${e1.value}</h5>` + "\n" + `${e2.value}` + "\n";

      }

    }
    c2 = 0;
  }

  sessionStorage.setItem('so', JSON.stringify(strfinal));



}


function inputResume3() {
  sessionStorage.setItem("schoolName", document.getElementById("schoolNameF").value);
  sessionStorage.setItem("citys", document.getElementById("citysF").value);
  sessionStorage.setItem("states", document.getElementById("statesF").value);
  sessionStorage.setItem("schoolYear", document.getElementById("schoolYearF").value);
  sessionStorage.setItem("collegeName", document.getElementById("collegeNameF").value);
  sessionStorage.setItem("cityc", document.getElementById("citycF").value);
  sessionStorage.setItem("statec", document.getElementById("statecF").value);
  sessionStorage.setItem("collegeYear", document.getElementById("collegeYearF").value);
  sessionStorage.setItem("course", document.getElementById("courseF").value);

}
function inputResume4() {

  let wesach = document.getElementsByClassName("achF");
  let strach = "";
  for (let e of wesach) {
    strach = strach + `<li>${e.value}</li> `;//c2//
  }
  sessionStorage.setItem('ach', JSON.stringify(strach));


  let wesexp = document.getElementsByClassName("expF");
  let strexp = "";
  for (let e of wesexp) {
    strexp = strexp + `<li> ${e.value} </li>`;
  }
  sessionStorage.setItem('exp', JSON.stringify(strexp));


  let wespro = document.getElementsByClassName("proF");
  let strpro = "";
  for (let e of wespro) {
    strpro = strpro + `<li> ${e.value} </li>`;
  }
  sessionStorage.setItem('pro', JSON.stringify(strpro));
}




function inputResume2() {

  let wesskills = document.getElementsByClassName("skillsF");
  let strskills = "";
  for (let e of wesskills) {
    strskills = strskills + `<li> ${e.value} </li>`;
  }
  sessionStorage.setItem('skills', JSON.stringify(strskills));











/*



  let wescode = document.getElementsByClassName("codeF");
  let strcode = "";
  for (let e of wescode) {
    strcode = strcode + `<li> ${e.value} </li>`;
  }
  sessionStorage.setItem('code', JSON.stringify(strcode));


  let wesrate = document.getElementsByClassName("rateF");
  let strrate = "";
  for (let e of wesrate) {
    strrate = strrate + `<li> ${e.value} </li>`;
  }
  sessionStorage.setItem('rate', JSON.stringify(strrate));

*/

  let wescode = document.getElementsByClassName("codeF");
  let wesrate = document.getElementsByClassName("rateF");
  let strfinal2 = "";
  let c1 = 0;
  let c2 = 0;
  for (let e1 of wesrate) {
    c1++;
    for (let e2 of wescode) {
      c2++;
      if (c1 == c2) {

      /*c4*/  strfinal2 = strfinal2 + `<li><h5>${e1.value}</h5></li>` +"("+`${e2.value}`+")" + "\n";

      }

    }
    c2 = 0;
  }

  sessionStorage.setItem('code', JSON.stringify(strfinal2));

















  let weshobbies = document.getElementsByClassName("hobbiesF");
  let strhobbies = "";
  for (let e of weshobbies) {
    strhobbies = strhobbies + `<li> ${e.value} </li>`;
  }
  sessionStorage.setItem('hobbies', JSON.stringify(strhobbies));
}
