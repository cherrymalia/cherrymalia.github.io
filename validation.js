function validateForm() {
  //declaring variables
  var count = 0;
  let user = document.infoForm.name.value;
  let email = document.infoForm.email.value;
  let phone = document.infoForm.phone.value;
  let pass = document.infoForm.pass.value;
  let conf_pass = document.infoForm.conf_pass.value;
  let gender = document.infoForm.gender.value;
  let age = document.infoForm.age.value;
  let out = document.getElementById("output");
  out.innerText = "";

  //for username validations
  if (user == "") {
    out.innerText += "Please enter username\n";
  } else if(user.length < 4 || user.length > 12) {
    out.innerText += "Please enter a valid username\n";
  } else {
    count++;
  }

  //for email validation
  if (email == "") {
    out.innerText += "Please enter email\n";
  } else {
    if (/^\S+@\S+\.\S+$/.test(email)) {
      let ending = email.substring(email.length - 3);
      if (ending == "edu" || ending == "com" || ending == "org" || ending == "net") { 
        count++;
      } else {
        out.innerText += "Please enter a valid email\n";
      }
    } else {
      out.innerText += "Please enter a valid email\n";
    }
  }

  //for phone number validation
  if (phone == "") {
    out.innerText += "Please enter phone number\n";
  } else {
    if(/^\(\d{3}\)-\d{3}-\d{4}$/.test(phone)) {
      count++;
    } else {
      out.innerText += "Please enter a valid phone number\n";
    }
  } 

  //for password validation
  if (pass == "") {
    out.innerText += "Please enter password\n";
  } else {
    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/.test(pass)) {
      count++;
    } else {
      out.innerText += "Please enter a valid password\n";
    }
  }

  //for confirm password validation
  if (conf_pass == "") {
    out.innerText += "Please confirm password\n";
  } else {
    if (conf_pass == pass && /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/.test(conf_pass)) {
      count++;
    } else {
      out.innerText += "Please confirm password\n";
      alert("Passwords do not match");
    }
  }
  
  //for gender validation
  if (gender == "") {
    out.innerText += "Please select gender\n";
  } else {
    count++;
  }

  //for age validation
  if (age == "") {
    out.innerText += "Please select age group\n";
  } else {
    count++;
  }

  if (count == 7) {
    window.location.href = 'index.html'
  }
}

function clearForm() {
  document.getElementById("output").innerText = "";
}

//paragraph.textContent += "This just got added";