// Typing animation
const text = ["IT Student", "Web Developer", "Tech Enthusiast"];
let index = 0, charIndex = 0;
const typingElement = document.querySelector(".typing");

function type() {
  if (charIndex < text[index].length) {
    typingElement.textContent += text[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, 150);
  } else {
    setTimeout(erase, 2000);
  }
}
function erase() {
  if (charIndex > 0) {
    typingElement.textContent = text[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 100);
  } else {
    index = (index + 1) % text.length;
    setTimeout(type, 500);
  }
}
document.addEventListener("DOMContentLoaded", () => {
  if (text.length) type();
});
