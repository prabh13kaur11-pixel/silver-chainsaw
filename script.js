const scene = document.querySelector('.scene');
const intro = document.querySelector('#intro');
const openButton = document.querySelector('#open-note');
const optionsScreen = document.querySelector('#options-screen');
const letter = document.querySelector('#letter');
const detail = document.querySelector('#option-detail');
const finale = document.querySelector('#finale');
const revealButton = document.querySelector('#reveal-secret');
const restartButton = document.querySelector('#start-over');

const optionContent = {
  memory: {
    kicker: 'A little memory',
    title: 'Some moments feel familiar.',
    copy: 'Maybe it’s a conversation, a laugh, or a quiet little moment. Whatever it is, I’m glad this one brought you here.'
  },
  song: {
    kicker: 'A song for the moment',
    title: 'Every story needs a soundtrack.',
    copy: 'Take a moment to think of a song that makes you smile. Maybe someday, this one will remind you of this little note.'
  },
  surprise: {
    kicker: 'One last thing',
    title: 'The surprise is…',
    copy: 'You made it all the way here. I hope this little detour brought a smile to your day.'
  }
};

const screens = [intro, optionsScreen, letter, detail, finale];

function showScreen(screen) {
  for (const item of screens) {
    const active = item === screen;
    item.setAttribute('aria-hidden', String(!active));
    if (active) item.removeAttribute('inert');
    else item.setAttribute('inert', '');
    item.classList.toggle('is-visible', active);
  }
}

openButton.addEventListener('click', () => {
  openButton.classList.add('is-open');
  openButton.setAttribute('aria-expanded', 'true');
  window.setTimeout(() => {
    showScreen(optionsScreen);
    optionsScreen.querySelector('[data-option="letter"]').focus();
  }, 420);
});

document.querySelector('#back-to-intro').addEventListener('click', () => {
  openButton.classList.remove('is-open');
  openButton.setAttribute('aria-expanded', 'false');
  showScreen(intro);
  openButton.focus();
});

document.querySelectorAll('[data-option]').forEach((button) => {
  button.addEventListener('click', () => {
    if (button.dataset.option === 'letter') {
      showScreen(letter);
      letter.querySelector('#reveal-secret').focus();
      return;
    }

    const content = optionContent[button.dataset.option];
    if (!content) return;
    document.querySelector('#detail-kicker').textContent = content.kicker;
    document.querySelector('#detail-title').textContent = content.title;
    document.querySelector('#detail-copy').textContent = content.copy;
    showScreen(detail);
    detail.querySelector('[data-back-options]').focus();
  });
});

document.querySelectorAll('[data-back-options]').forEach((button) => {
  button.addEventListener('click', () => {
    showScreen(optionsScreen);
    optionsScreen.querySelector('[data-option="letter"]').focus();
  });
});

revealButton.addEventListener('click', () => {
  showScreen(finale);
  restartButton.focus();
});

restartButton.addEventListener('click', () => {
  openButton.classList.remove('is-open');
  openButton.setAttribute('aria-expanded', 'false');
  showScreen(intro);
  openButton.focus();
});
