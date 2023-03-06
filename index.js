const email = document.getElementsByClassName("enter-mail");
const email2 = document.getElementsByClassName("enter-email2");
const error = document.getElementsByClassName("error-function");
const error2 = document.getElementsByClassName("error-function2");
const button = document.getElementsByClassName("btn-1");
const button2 = document.getElementsByClassName("btn-2");

let emailRegex =
  /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;

function textmail(input) {
  if (emailRegex.test(input.value)) {
    console.log("This is true");
    input.classList.remove("visible");
  } else if (!emailRegex.test(input.value)) {
    console.log(error[0]);
    error[0].classList.add("visible");
  }
}

button[0].addEventListener("click", (event) => {
  event.preventDefault();
  textmail(error[0]);
  console.log("clicked");
});

button2[0].addEventListener("click", (event) => {
  event.preventDefault();
  secondmail(email2[0]);
  console.log("clicked");
});
