const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const email = document.getElementById("email");
const password2 = document.getElementById("password2");

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function checkEmail(input) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(String(input.value).toLowerCase())) {
    showSuccess(input);
  } else showError(input, `${getFieldName(input)} is not valid `);
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else showSuccess(input);
}

function checkRequired(inputArr) {
  inputArr.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else showSuccess(input);
  });
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
function checkPasswordsMatch(input1, input2) {
  if (input1.value != input2.value) {
    showError(input2, "Password do not match");
  } else if (input2.value === "");
  else showSuccess(input2);
}
//Event Listeners
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkRequired([username, email, password, password2]);
  checkEmail(email);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);

  checkPasswordsMatch(password, password2);
});
