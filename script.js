function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var date = document.getElementById("date").value;
  var time = document.getElementById("time").value;

  if (name == "") {
    alert("Please enter your name.");
    return false;
  }

  if (email == "") {
    alert("Please enter your email.");
    return false;
  }

  if (date == "") {
    alert("Please enter a date.");
    return false;
  }

  if (time == "") {
    alert("Please enter a time.");
    return false;
  }

  return true;
}
