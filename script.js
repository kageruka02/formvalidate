const passwordconfirm = document.querySelector("#passwordconfirm");
const password = document.querySelector("#password");
const passwordNotSame = document.querySelector("#passwordNotSame");
const phoneNumber = document.querySelector("#phone");
const form = document.querySelector("#form");

passwordconfirm.addEventListener("input", () => {
  if (passwordconfirm.value !== password.value)
    passwordNotSame.textContent = "*password do not match";
  else {
    passwordNotSame.textContent = "";
    console.log("they are equal");
  }
});

form.addEventListener("submit", (event) => {
  console.log("hello");
  const regex = /^[^a-zA-Z]*$/;
  if (!regex.test(phoneNumber.value)) {
    console.log("your number do not match");
    phoneNumber.style.borderColor = "red";
    event.preventDefault();
  }
});
