const button = document.getElementById('surpriseButton');
const message = document.getElementById('surpriseMessage');
const surprises = [
  'You are one of my favorite reasons to smile. I love you, Nica. ♡',
  'I hope I never stop making you feel special. ♡',
  'You are appreciated, you are loved, and you matter to me. Always. ♡'
];
let index = 0;
button.addEventListener('click', () => {
  message.textContent = surprises[index];
  index = (index + 1) % surprises.length;
});
