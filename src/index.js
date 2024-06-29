import "./style.css";

// Code below this line

const btnDropdown = document.querySelector(".dropdown>button");
const listDropdown = document.querySelector(".dropdown>ul");

let isClicked = false;
function listVisibility(list, clickConditon) {
  if (clickConditon) {
    list.style.display = "block";
  } else if (clickConditon === false) {
    list.style.display = "none";
  }
}

btnDropdown.addEventListener("click", () => {
  if (isClicked === false) {
    isClicked = true;
    listVisibility(listDropdown, isClicked);
  } else if (isClicked === true) {
    isClicked = false;
    listVisibility(listDropdown, isClicked);
  }
});

listVisibility(listDropdown, isClicked);
