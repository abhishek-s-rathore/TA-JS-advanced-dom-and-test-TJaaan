let rootElem = document.querySelector(".root");
let form = document.querySelector("form");

let cardsData = JSON.parse(localStorage.getItem("cards")) || [];

function handleEdit(event, info, index, label) {
  let elem = event.target;
  let input = document.createElement("input");
  input.value = info;
  input.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
      let updatedValue = e.target.value;
      cardsData[index][label] = updatedValue;
      createUI();
      localStorage.setItem('cards', JSON.stringify(cardsData));
    }
  });

  input.addEventListener("blur", (e) => {
      let updatedValue = e.target.value;
      cardsData[index][label] = updatedValue;
      createUI();
      localStorage.setItem('cards', JSON.stringify(cardsData));
  });

  let parent = event.target.parentElement;
  parent.replaceChild(input, elem);
};

function createUI(data = cardsData, root = rootElem) {
  let fragment = new DocumentFragment();
  data.forEach((elem, index) => {
    let li = document.createElement("li");
    let p = document.createElement("p");
    p.innerText = elem.catagory;
    p.addEventListener("dblclick", (event) =>
      handleEdit(event, elem.catagory, index, 'catagory')
    );
    let h2 = document.createElement("h2");
    h2.innerText = elem.title;
    h2.addEventListener("dblclick", (event) =>
    handleEdit(event, elem.title, index, 'title')
  );
    li.append(p, h2);
    fragment.appendChild(li);
  });
  root.innerHTML = "";
  root.append(fragment);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let title = event.target.elements.title.value;
  let catagory = event.target.elements.catagory.value;
  cardsData.push({ title, catagory });
  localStorage.setItem("cards", JSON.stringify(cardsData));
  createUI(cardsData, rootElem);
});

createUI(cardsData, rootElem);
