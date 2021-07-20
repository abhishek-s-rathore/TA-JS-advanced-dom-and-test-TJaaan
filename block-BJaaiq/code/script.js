let root = document.querySelector(".root");

quotes.forEach((elem) => {
  let li = document.createElement("li");
  let p = document.createElement("p");
  p.style.fontSize = "2rem";
  p.innerText = elem.quoteText;
  let cite = document.createElement("cite");
  cite.style.fontSize = "1rem";
  if (elem.quoteAuthor == "") {
    cite.innerText = `- Unknown`;
  } else {
    cite.innerText = `- ${elem.quoteAuthor}`;
  }
  li.append(p, cite);
  root.append(li);
});

window.addEventListener("DOMContentLoaded", () => {
  alert(`The Content Of DOM is Loaded.`);
});
