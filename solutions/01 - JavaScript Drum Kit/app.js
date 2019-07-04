window.addEventListener("keydown", playSound);

const keys = document.querySelectorAll(".key");
keys.forEach(key => {
  key.addEventListener("transitionend", removeTransition);
});

function removeTransition(e) {
  this.classList.remove("playing");
  if (e.propertyName !== "transform") return;
}
function playSound(e) {
  e.stopPropagation();
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  var key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; // stop the function
  audio.currentTime = 0; // rewind to 0sec
  audio.play();
  key.classList.add("playing");
}
