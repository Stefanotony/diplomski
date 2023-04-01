const form = document.getElementById("form");
const ime = document.getElementById("ime");
const prezime = document.getElementById("prezime");
const email = document.getElementById("email");
const poruka = document.getElementById("poruka");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const imeValue = ime.value.trim();
  const prezimeValue = prezime.value.trim();
  const emailValue = email.value.trim();
  const porukaValue = prezime.value.trim();

  if (imeValue === "") {
    setError(ime, "Ime je obavezno!");
  } else {
    setSuccess(ime);
  }

  if (prezimeValue === "") {
    setError(prezime, "Prezime je obavezno!");
  } else {
    setSuccess(prezime);
  }

  if (emailValue === "") {
    setError(email, "Email je obavezan!");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Niste uneli validnu email adresu!");
  } else {
    setSuccess(email);
  }

  if (porukaValue === "") {
    setError(poruka, "Poruka je obavezna!");
  } else {
    setSuccess(poruka);
  }
};
