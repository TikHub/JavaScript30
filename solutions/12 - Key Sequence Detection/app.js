const pressed = [];
const secretCode = "wesbos";
window.addEventListener("keyup", function(e) {
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join("").includes(secretCode)) {
    console.log("Founded");
    cornify_add();
  }
  console.log(pressed);
});
