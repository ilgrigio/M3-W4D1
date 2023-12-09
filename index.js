let textInput = document.querySelector("input");
let iconButton = document.querySelector(".bi.bi-search");

iconButton.onclick = function () {
  if (iconButton) {
    textInput.classList.toggle("show");
  }
};

// const contentShow = function () {
//   if (window.onscroll)
// };

// window.onscroll = () => {
//   console.log("Window Scrolling!!");
// };
