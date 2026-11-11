const scene = document.querySelector('.scene');
const openButton = document.querySelector('#open-note');
const letter = document.querySelector('#letter');
const finale = document.querySelector('#finale');
const revealButton = document.querySelector('#reveal-secret');
const restartButton = document.querySelector('#start-over');

function showSection(section, hiddenSection) {
  hiddenSection.setAttribute('aria-hidden', 'true');
  hiddenSection.setAttribute('inert', '');
  section.removeAttribute('aria-hidden');
  section.removeAttribute('inert');
}

openButton.addEventListener('click', () => {
  openButton.classList.add('is-open');
  openButton.setAttribute('aria-expanded', 'true');
  window.setTimeout(() => {
    scene.classList.add('has-letter');
    showSection(letter, document.querySelector('#intro'));
    letter.querySelector('h2').focus?.();
  }, 420);
});

revealButton.addEventListener('click', () => {
  scene.classList.remove('has-letter');
  scene.classList.add('has-finale');
  showSection(finale, letter);
  restartButton.focus();
});

restartButton.addEventListener('click', () => {
  scene.classList.remove('has-finale', 'has-letter');
  openButton.classList.remove('is-open');
  openButton.setAttribute('aria-expanded', 'false');
  finale.setAttribute('aria-hidden', 'true');
  finale.setAttribute('inert', '');
  letter.setAttribute('aria-hidden', 'true');
  letter.setAttribute('inert', '');
  const intro = document.querySelector('#intro');
  intro.removeAttribute('aria-hidden');
  intro.removeAttribute('inert');
  openButton.focus();
});
