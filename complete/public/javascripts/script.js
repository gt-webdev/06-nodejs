function signUp() {
  var form = document.getElementById("form");
  var url = window.location.origin + "/users/signup";
  console.log(url);
  var options = {
    username: form.username.value,
    password: form.password.value
  }

  $.post(url, options, function (data) {
    console.log(data);
    if (data.flag == "s") {
      document.location.href = window.location.origin + "/message.html";
    }
  });
}

function login() {
  var form = document.getElementById("form");
  var url = window.location.origin + "/users/login";
  console.log(url);
  var options = {
    username: form.username.value,
    password: form.password.value
  }

  console.log(options);

  $.post(url, options, function (data, r, e) {
    /*console.log(data);
    console.log(r);
    console.log(e);*/
    if (data.flag == "s") {
      document.location.href = window.location.origin + "/message.html";
    } else {
      var error = document.getElementById("error-msg");
      console.log(error);
      error.style.visibility = "visible";
      console.log(data.message);
      error.innerHTML = data.message;
    }
  });
}
