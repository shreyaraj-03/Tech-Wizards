
function generateResume1() {
  document.getElementById('imgT').src = sessionStorage.getItem("img");


  document.getElementById('firstNameT').innerHTML = sessionStorage.getItem("firstName");
  document.getElementById('lastNameT').innerHTML = sessionStorage.getItem("lastName");
  document.getElementById('cityT').innerHTML = sessionStorage.getItem("city");
  document.getElementById('stateT').innerHTML = sessionStorage.getItem("state");
  document.getElementById('pinCodeT').innerHTML = sessionStorage.getItem("pinCode");
  document.getElementById('phoneNoT').innerHTML = sessionStorage.getItem("phoneNo");
  document.getElementById('emailT').innerHTML = sessionStorage.getItem("email");


  document.getElementsByClassName("socialWebsiteT")[0].innerHTML = JSON.parse(sessionStorage.getItem("so"));


}
function generateResume3() {
  document.getElementById('schoolNameT').innerHTML = sessionStorage.getItem("schoolName");
  document.getElementById('citysT').innerHTML = sessionStorage.getItem("citys");
  document.getElementById('statesT').innerHTML = sessionStorage.getItem("states");
  document.getElementById('schoolYearT').innerHTML = sessionStorage.getItem("schoolYear");
  document.getElementById('collegeNameT').innerHTML = sessionStorage.getItem("collegeName");
  document.getElementById('citycT').innerHTML = sessionStorage.getItem("cityc");
  document.getElementById('collegeYearT').innerHTML = sessionStorage.getItem("collegeYear");
  document.getElementById('statecT').innerHTML = sessionStorage.getItem("statec");
  document.getElementById('courseT').innerHTML = sessionStorage.getItem("course");

}
function generateResume4() {

  document.getElementsByClassName("achT")[0].innerHTML = JSON.parse(sessionStorage.getItem("ach"));
  document.getElementsByClassName("expT")[0].innerHTML = JSON.parse(sessionStorage.getItem("exp"));
  document.getElementsByClassName("proT")[0].innerHTML = JSON.parse(sessionStorage.getItem("pro"));
}
function generateResume2() {
  document.getElementsByClassName("skillsT")[0].innerHTML = JSON.parse(sessionStorage.getItem("skills"));
  document.getElementsByClassName("codeT")[0].innerHTML = JSON.parse(sessionStorage.getItem("code"));
 /* document.getElementsByClassName("rateT")[0].innerHTML = JSON.parse(sessionStorage.getItem("rate"));*/
  document.getElementsByClassName("hobbiesT")[0].innerHTML = JSON.parse(sessionStorage.getItem("hobbies"));

}


window.onload = function () {

  document.getElementById("print").addEventListener("click", () => {
    document.getElementById("print").setAttribute("style", "visibility:hidden");
    const cv = document.getElementById("cv-template");
    html2pdf().from(cv).save();
    setTimeout(function () {
      document.getElementById("print").setAttribute("style", "visibility:visible");
    }, 2000);

  });
}
document.querySelector("#hideTemplate").addEventListener("click", function () {
  hideform();
});
function hideform(){
  document.querySelector(".removeTemplate").classList.remove("removeTemplate");
} /*c8*/
