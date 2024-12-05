import "./style.css";
const p = document.querySelector("p");
const img = document.querySelector("img");
const section = document.querySelector("section");
const a = document.querySelector("a");
const input = document.querySelector("input");

//modification du contenu
// p.childNodes[0].nodeValue = "SALUT";

// p.innerHTML = "<strong>SALUT</strong>";

// p.innerText = "yooo";

//modification source de l'image
// img.src =
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwv178TD2B0QpRzs8RzWoGKiSZzS4HqvW12A&s";
// img.attributes[1].nodeValue =
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwv178TD2B0QpRzs8RzWoGKiSZzS4HqvW12A&s";

// console.log(img.src);

// a.href =
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwv178TD2B0QpRzs8RzWoGKiSZzS4HqvW12A&s";

// console.log(img.attributes);
// console.log(img.setAttribute("test", "potichat"));
// console.log(img.getAttribute("test"));
// img.removeAttribute("test");

console.log(input.dataset.test);

input.focus();
setTimeout(() => {
  input.blur();
}, 1000);

// input.type = "date";
input.placeholder = "Hello";

//désactiver l'input
// input.disabled = true;

// input.minlenght = 10;

// console.log(input.validity);
// Mismatch: false, tooLong: false, tooShort: false, …}badInput: falsecustomError: falsepatternMismatch: falserangeOverflow: falserangeUnderflow: falsestepMismatch: falsetooLong: falsetooShort: falsetypeMismatch: falsevalid: truevalueMissing: false[[Prototype]]: ValidityState

section.style.width = 100;
section.style.height = 100;
section.style.backgroundColor = "";

// console.log(section.style);

// console.log(window.getComputedStyle(section));

//ajout d'une classe sur une section
// section.classList.add("red");
// console.log(section.className);
// console.log(section.getAttribute("class"));
// section.className = " red text-primary";
section.classList.add("red");
section.classList.remove("test");
setTimeout(() => {
  section.classList.add("red");
  console.log(section.classList.contains("red"));
}, 5000);
setTimeout(() => {
  section.classList.toggle("red");
}, 10000);

section.classList.toggle("red");
