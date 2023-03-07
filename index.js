// first button
const email = document.querySelector(".enter-mail");
const error = document.querySelector(".error-function");
const button = document.querySelector(".btn-1");

// second button
const error2 = document.querySelector(".error-function2");
const email2 = document.querySelector(".enter-mail2");
const button2 = document.querySelector(".btn-2");

let mailRegex =
  /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;

function testmail(input, error) {
  const isValid = mailRegex.test(input.value);
  if (isValid) {
    error.classList.remove("visible");
  } else {
    error.classList.add("visible");
  }
}

button.addEventListener("click", (event) => {
  event.preventDefault();
  testmail(email, error);
  console.log("clicked");
});

button2.addEventListener("click", (event) => {
  event.preventDefault();
  testmail(email2, error2);
  console.log("clicked");
});
