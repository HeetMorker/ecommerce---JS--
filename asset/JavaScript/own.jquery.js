
window.onload = showlivetime();
function showlivetime() {
  let dateobject = new Date();
  let livetime = dateobject.toLocaleTimeString();
  let gettimebox = document.getElementsByClassName("timebox")[0];
  gettimebox.innerHTML = livetime;
  setInterval(showlivetime, 1000);
}
let dateobject2 = new Date();
let getcopyrightyear = document.getElementById("year");
// getcopyrightyear.innerHTML = dateobject2.getFullYear();

