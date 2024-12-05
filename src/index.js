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

console.log(input.validity);
// Mismatch: false, tooLong: false, tooShort: false, …}badInput: falsecustomError: falsepatternMismatch: falserangeOverflow: falserangeUnderflow: falsestepMismatch: falsetooLong: falsetooShort: falsetypeMismatch: falsevalid: truevalueMissing: false[[Prototype]]: ValidityState
