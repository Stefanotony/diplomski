const form = document.getElementById("form");
const ime_prezime = document.getElementById("ime_prezime");
const email = document.getElementById("email");
const datum = document.getElementById("datum");

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
  const ime_prezimeValue = ime_prezime.value.trim();
  let ime = ime_prezimeValue.split(" ");
  const emailValue = email.value.trim();
  const datumValue = datum.value;

  if (ime_prezimeValue === "") {
    setError(ime_prezime, "Ime i prezime je obavezno!");
  } else if (ime.length < 2) {
    setError(ime_prezime, "Morate uneti i ime i prezime!");
  } else {
    setSuccess(ime_prezime);
  }

  if (emailValue === "") {
    setError(email, "Email je obavezan!");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Niste uneli validnu email adresu!");
  } else {
    setSuccess(email);
  }

  if (datumValue === "") {
    setError(datum, "Odaberite datum rezervacije!");
  } else {
    setSuccess(datum);
  }
};
