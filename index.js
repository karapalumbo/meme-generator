// import "./styles.css";

const memeForm = document.getElementById("meme-form");
const imageUrl = document.getElementById("image-url");
const topText = document.getElementById("top-text");
const bottomText = document.getElementById("bottom-text");
const colorInput = document.getElementById("text-color");
const fontSize = document.querySelector("input[name='font-size']");
const finalMeme = document.getElementById("final-meme");

memeForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let imgVal = imageUrl.value;
  let topVal = topText.value;
  let bottomVal = bottomText.value;
  let colorVal = colorInput.value;
  let fontVal = fontSize.value;
  let newMeme = generateMeme(imgVal, colorVal, topVal, bottomVal, fontVal);
  finalMeme.appendChild(newMeme);
  memeForm.reset();
});

function generateMeme(image, color, top, bottom, size) {
  const memeSect = document.createElement("DIV");
  memeSect.classList.add("meme-section");
  memeSect.append(createImage(image));
  memeSect.append(createTopText(top, color, size));
  memeSect.append(createBottomText(bottom, color, size));
  memeSect.append(createDeleteButton());
  return memeSect;
}

function createImage(img) {
  const imgElement = document.createElement("IMG");
  imgElement.setAttribute("src", img);
  return imgElement;
}

function createTopText(top, color, size) {
  const topTxt = document.createElement("P");
  topTxt.classList.add("top");
  topTxt.innerHTML = top;
  topTxt.style.color = color;
  topTxt.style.fontSize = `${size}px`;
  return topTxt;
}

function createBottomText(bottom, color, size) {
  const btmTxt = document.createElement("P");
  btmTxt.classList.add("bottom");
  btmTxt.innerHTML = bottom;
  btmTxt.style.color = color;
  btmTxt.style.fontSize = `${size}px`;
  return btmTxt;
}

function createDeleteButton() {
  const deleteBtn = document.createElement("BUTTON");
  deleteBtn.classList.add("delete");
  deleteBtn.innerHTML = "X";
  deleteBtn.addEventListener("click", deleteMeme);
  return deleteBtn;
}

function deleteMeme(e) {
  if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
  }
}
