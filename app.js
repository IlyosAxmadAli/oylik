const form = document.querySelector("form");
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const foyiz = document.querySelector(".foyiz");
const natija = document.querySelector(".natija");
const tekshir = document.querySelector("#tekshir");
const hidden = document.querySelector(".hidden");
const yangi = document.querySelector("#yangi");

btn1.addEventListener("click", (e) => {
  e.preventDefault();
  foyiz.textContent = "Soliq necha foyiz ?";
  hidden.style = "display: block;";
});

btn2.addEventListener("click", (e) => {
  e.preventDefault();
  let result = input1.value * 12;
  natija.textContent = result + " so'm";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let result = (input1.value - (input1.value / 100) * input2.value) * 12;
  natija.textContent = result + " so'm";
});

yangi.addEventListener("click", () => {
  history.go(0);
});
