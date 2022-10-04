
let count = 0;
/*
function validateUsername() {
  let user = document.getElementById("name").value;
  let out = document.getElementById("output");
  
}

function validateEmail() {
  let user = document.getElementById("email").value;
  let out = document.getElementById("output");
  if (user == "") {
    out.innerText += "email EMPTY\n";
  } else if(user.length < 4 || user.length > 12) {
    out.innerText += "email WRONG\n";
  } else {
    count++;
  }
}

function validateNumber() {
  let user = document.getElementById("phone").value;
  let out = document.getElementById("output");
  if (user == "") {
    out.innerText += "number EMPTY\n";
  } else if(user.length < 4 || user.length > 12) {
    out.innerText += "number WRONG\n";
  } else {
    count++;
  }
}

function validatePass() {
  let user = document.getElementById("pass").value;
  let out = document.getElementById("output");
  if (user == "") {
    out.innerText += "pass EMPTY\n";
  } else if(user.length < 4 || user.length > 12) {
    out.innerText += "pass WRONG\n";
  } else {
    count++;
  }
}

function validateConfirmPass()  {
  let user = document.getElementById("conf_pass").value;
  let out = document.getElementById("output");
  if (user == "") {
    out.innerText = "c pass EMPTY\n";
  } else if(user.length < 4 || user.length > 12) {
    out.innerText = "c pass WRONG\n";
  } else {
    count++;
  }
}
*/

function validateForm() {
  /*
  validateUsername();
  validateEmail();
  validateNumber();
  validatePass();
  validateConfirmPass();
  */

  //declaring variables
  let user = document.infoForm.name.value;
  let email = document.infoForm.email.value;
  let phone = document.infoForm.phone.value;
  let pass = document.infoForm.pass.value;
  let conf_pass = document.infoForm.conf_pass.value;
  let gender = document.infoForm.gender.value;
  let age = document.infoForm.age.value;
  let out = document.getElementById("output");
  out.innerText = "";

  if (user == "") {
    out.innerText += "name EMPTY\n";
  } else if(user.length < 4 || user.length > 12) {
    out.innerText += "name WRONG\n";
  }

  //for email validation
  if (email == "") {
    out.innerText += "email EMPTY\n";
  } else {
    if (/^\S+@\S+\.\S+$/.test(email)) {
      let ending = email.substring(email.length - 3);
      if (ending == "edu" || ending == "com" || ending == "org" || ending == "net") {
        count++;
      } else {
        out.innerText += "email WRONG\n";
      }
    } else {
      out.innerText += "email WRONG\n";
    }
  }

  //for phone number validation
  if (phone == "") {
    out.innerText += "number EMPTY\n";
  } else {
    if(/^\(\d{3}\)-\d{3}-\d{4}$/.test(phone)) {
      count++;
    } else {
      out.innerText += "number WRONG\n";
    }
  } 

  //for gender validation
  if (gender == "") {
    out.innerText += "gender EMPTY\n";
  }

  //for age validation
  if (age == "") {
    out.innerText += "age EMPTY\n";
  }
}

function clearForm() {
  document.getElementById("output").innerText = "";
}

//paragraph.textContent += "This just got added";