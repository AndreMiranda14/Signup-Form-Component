let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let email = document.getElementById("email");
let password = document.getElementById("password");

form.addEventListener("submit", function (e) {
  if (
    firstName.value === "" || lastName.value === "" ||  email.value === "" ||  password.value === "") {
    e.preventDefault();
    verificaVazio();
  } else if (firstName.value !== "" && lastName.value !== "" && email.value !== "" && password.value !== "") {
    alert(`
    Os dados abaixo foram enviados com sucesso!
    Nome: ${firstName.value} ${lastName.value}
    Email: ${email.value}
    Senha: ${password.value}`);
    preventDefault();
  }
});

form.addEventListener("keyup", function (e) {
  limpaCampo();
});

function verificaVazio() {
  if (firstName.value === "") {
    document.getElementById("exclamation-first").classList.add("fa-circle-exclamation");
    document.getElementById("small-first").style.display = "flex";
    firstName.style.border = "2px solid hsl(0, 100%, 74%)";
    firstName.placeholder = "";
  }

  if (lastName.value === "") {
    document.getElementById("exclamation-last").classList.add("fa-circle-exclamation");
    document.getElementById("small-last").style.display = "flex";
    lastName.style.border = "2px solid hsl(0, 100%, 74%)";
    lastName.placeholder = "";
  }

  if (email.value === "") {
    document.getElementById("exclamation-email").classList.add("fa-circle-exclamation");
    document.getElementById("small-email").style.display = "flex";
    document.getElementById("email-msg").style.display = "flex";
    email.style.border = "2px solid hsl(0, 100%, 74%)";
    email.placeholder = "";
  }

  if (password.value === "") {
    document.getElementById("exclamation-password").classList.add("fa-circle-exclamation");
    document.getElementById("small-password").style.display = "flex";
    password.style.border = "2px solid hsl(0, 100%, 74%)";
    password.placeholder = "";
  }
}

function limpaCampo() {
  if (firstName.value !== "") {
    document.getElementById("exclamation-first").classList.remove("fa-circle-exclamation");
    document.getElementById("small-first").style.display = "none";
    firstName.style.border = "1px solid gray";
    firstName.placeholder = 'First Name"';
  }

  if (lastName.value !== "") {
    document.getElementById("exclamation-last").classList.remove("fa-circle-exclamation");
    document.getElementById("small-last").style.display = "none";
    lastName.style.border = "1px solid gray";
    lastName.placeholder = "Last Name";
  }

  if (email.value !== "") {
    document.getElementById("exclamation-email").classList.remove("fa-circle-exclamation");
    document.getElementById("small-email").style.display = "none";
    document.getElementById("email-msg").style.display = "none";
    email.style.border = "1px solid gray";
    email.placeholder = "Email Address";
  }

  if (password.value !== "") {
    document.getElementById("exclamation-password").classList.remove("fa-circle-exclamation");
    document.getElementById("small-password").style.display = "none";
    password.style.border = "1px solid gray";
    password.placeholder = "Password";
  }
}
