const divs = document.querySelectorAll("div");
const button = document.querySelector("button");

function logText(e) {
  e.stopPropagation(); //stop bubbling!
  console.log(this.classList.value);
}

divs.forEach(div => div.addEventListener("click", logText, { capture: false }));

button.addEventListener(
  "click",
  () => {
    console.log("Button has been clicked!!");
  },
  { once: true }
);
