function validateForm() {
  let user = document.getElementById("name").value;
  if (user  == "") {
    document.getElementById("output").innerText = "red - empty";
    return false;
  } else if(user.length < 4 || user.length > 12) {
    document.getElementById("output").innerText = "orange - fix";
    return false;
  } else {
    document.getElementById("output").innerText = "green - good";
    return true;
  }
}

function clearForm() {
  let output = document.getElementById("output").innerText = "";
}