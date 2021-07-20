let root = document.querySelector(".root");

let max = 5;
let index = 0;
function addQuote() {
  for (let i = 0; i < max; i++) {
    let li = document.createElement("li");
    let bq = document.createElement("blockquote");
    bq.style.fontSize = "2.35rem";
    bq.innerText = quotes[index].quoteText;
    let cite = document.createElement("cite");
    cite.style.fontSize = "1rem";
    if (quotes[index].quoteAuthor === "") {
      cite.innerText = `- Unknown`;
    } else {
      cite.innerText = `- ${quotes[index].quoteAuthor}`;
    }

    li.append(bq, cite);
    root.append(li);
    index++;
  }
}
addQuote();

window.addEventListener("DOMContentLoaded", () => {
  alert(`The Content Of DOM is Loaded.`);
});

document.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  let scrollHeight = document.documentElement.scrollHeight;
  let clientHeight = document.documentElement.clientHeight;

  if (scrollTop + clientHeight >= scrollHeight && index < quotes.length) {
    addQuote();
  }
});
