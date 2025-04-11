function Check() {
  var nam = document.getElementById("name").value;
  var mail = document.getElementById("mail").value;
  var passw = document.getElementById("Pass").value;
  var confirm_Passw = document.getElementById("Confirm-Pass").value;
  var datee = document.getElementById("date").value;
  var people = document.getElementById("number").value;
  var timee = document.getElementById("time").value;

  // Getting the current date
  var currentDate = new Date();
  // Converting the entered date string to a Date object
  var Today = new Date(datee);

  //   Condition First-name
  if (nam == null || nam == "") {
    document.getElementById("error-name-f").innerHTML =
      "<span style='color: red;'>Please enter your name</span>";
    setTimeout(function () {
      document.getElementById("error-name-f").innerText = "";
    }, 3000);
    return false;
  }

  //   Condition email
  if (mail == "") {
    document.getElementById("error-mail").innerHTML =
      "<span style='color: red;'>Please enter your E-mail</span>";
    setTimeout(function () {
      document.getElementById("error-name-l").innerText = "";
    }, 3000);
    return false;
  } else {
    // Regular expression for validating email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(mail)) {
      document.getElementById("error-mail").innerHTML =
        "<span style='color: red;'>Please enter a valid E-mail</span>";
      setTimeout(function () {
        document.getElementById("error-mail").innerText = "";
      }, 3000);
      return false;
    }

    //   Condition Password

    //   Empety Input
    else if (passw == "") {
      document.getElementById("error-password").innerHTML =
        "<span style='color: red;'>Please enter your password</span>";
      setTimeout(function () {
        document.getElementById("error-password").innerText = "";
      }, 3000);
      return false;
    }

    //   Password Legth
    else if (passw.length < 6) {
      document.getElementById("error-password").innerHTML =
        "<span style='color: red;'>Password must be at least 6 characters long</span>";
      setTimeout(function () {
        document.getElementById("error-password").innerText = "";
      }, 3000);
      return false;
    }

    // confirm-password-empety
    else if (confirm_Passw == "") {
      document.getElementById("error-Confirm-password").innerHTML =
        "<span style='color: red;'>Please confirm your password</span>";
      setTimeout(function () {
        document.getElementById("error-Confirm-password").innerText = "    ";
      }, 3000);
      return false;
    }

    // pasword not match
    else if (confirm_Passw !== passw) {
      document.getElementById("error-Confirm-password").innerHTML =
        "<span style='color: red;'> Passwords do not match</span>";
      setTimeout(function () {
        document.getElementById("error-Confirm-password").innerText = "";
      }, 3000);
      return false;
    }

    //   Condition for Date

    //   Empety input
    else if (datee == "") {
      document.getElementById("error-date").innerHTML =
        "<span style='color: red;'>Please select a date</span>";
      setTimeout(function () {
        document.getElementById("error-date").innerText = "";
      }, 3000);
      return false;
    }

    //   If Same Date
    else if (Today.getDay() === currentDate.getDay()) {
      document.getElementById("error-date").innerHTML =
        "<span style='color: red;'>Please select a future date for booking</span>";
      setTimeout(function () {
        document.getElementById("error-date").innerText = "";
      }, 3000);
      return false;
    }

    // If past Date
    else if (Today < currentDate) {
      document.getElementById("error-date").innerHTML =
        "<span style='color: red;'>Selected date has passed</span>";
      setTimeout(function () {
        document.getElementById("error-date").innerText = "";
      }, 3000);
      return false;
    }

    //   Condition for the Time
    else if (timee == "") {
      document.getElementById("error-time").innerHTML =
        "<span style='color: red;'>Please select a time</span>";
      setTimeout(function () {
        document.getElementById("error-time").innerText = "";
      }, 3000);
      return false;
    }

    //   Condition for the People
    else if (people == "" || isNaN(people)) {
      document.getElementById("error-number").innerHTML =
        "<span style='color: red;'>Please enter the number of people</span>";
      setTimeout(function () {
        document.getElementById("error-number").innerText = "";
      }, 3000);
      return false;
    }

    // Condition if user give numbers in minus
    else if (people < 1) {
      document.getElementById("error-number").innerHTML =
        "<span style='color: red;'>Please enter the Valid number of people</span>";
      setTimeout(function () {
        document.getElementById("error-number").innerText = "";
      }, 3000);
      return false;
    }
    window.location.href = "confirm.html?nam=" + encodeURIComponent(nam);
    return true;
  }
}
// OTP Confirm
window.onload = function () {
  var params = new URLSearchParams(window.location.search);
  var nam = params.get("nam");
  if (nam) {
    document.getElementById("verification").innerHTML =
      "Hello <span class='name'>" +
      nam +
      "</span>, Verification code has been sent to your email. Please enter the same here to book your Table. Valid for 10 minutes";
  }
};

// Conditions

function otp() {
  var confirm = document.getElementById("otp-input").value;
  var spaceConfirm = confirm.trim();
  if (
    /^\s*$/.test(spaceConfirm) === "" ||
    isNaN(spaceConfirm) ||
    spaceConfirm.length < 4
  ) {
    document.getElementById("otpError").innerHTML = "Invalid OTP";

    setTimeout(function () {
      document.getElementById("otpError").innerText = "";
    }, 3000);
    return false;
  } else if (spaceConfirm !== "") {
    var confirmNumber = Math.floor(Math.random() * 100);
    document.getElementById("check").innerHTML =
      "Your booking has been confirmed. Your Table Number is - " +
      confirmNumber;
    document.getElementById("check").style.display = "flex";

    setTimeout(function () {
      document.getElementById("check").style.display = "none";
    }, 20000);
  }

  setTimeout(function () {
    window.location.href = "index.html";
  }, 20000);
  return true;
}
