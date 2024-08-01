document.getElementById("formcontainer").addEventListener("submit", (event)=>{
  event.preventDefault();

  const username = document.getElementById("usernamedate").value;
  const password = document.getElementById("password").value;

  if (username === "adm" && password === "123" || username === "sup" && password === "1234") {
    windows.location.replace('');
  } else {
    alert("Wrong data, please try again")
  }

});

