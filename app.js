function cAlc() {
  let wieght = document.getElementById("wieght").value;
  let hieght = document.getElementById("hieght").value;
  let bmi = (wieght / ((hieght * hieght) / 10000)).toFixed("2");

  //if statment
  if (bmi <= 18.99) {
    alert("you are underwieght");
  } else if ((bmi >= 19.0) & (bmi <= 24.99)) {
    alert("your bmi are healthy");
  } else if ((bmi >= 25) & (bmi <= 29.0)) {
    alert("you are Overweight");
  } else if (bmi <= 30) {
    alert("You chould to visit Doctor");
  } else {
    alert("Please enter your information");
  }
  //endOfStatement
  document.getElementById("result").innerHTML = "Your bmi is " + bmi;
}
