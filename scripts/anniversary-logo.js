const logo = document.querySelector('.anniversary-logo');

const logos = [
  './images/SEQUTEL_Anniversary_logo_01.png',
  './images/SEQUTEL_Anniversary_logo_02.png',
  './images/SEQUTEL_Anniversary_logo_03.png',
  './images/SEQUTEL_Anniversary_logo_04.png',
];

const fadeDuration = 300;

const millisecondsPerDay = 1000 * 60 * 60 * 24;

const getCurrentIndex = () => {
  return Math.floor(Date.now() / millisecondsPerDay) % logos.length;
};

let currentIndex = getCurrentIndex();

logos.forEach((src) => {
  const image = new Image();
  image.src = src;
});

logo.src = logos[currentIndex];
logo.style.opacity = "1";

const changeLogoWithFade = (newIndex) => {
  logo.style.opacity = '0';

  setTimeout(() => {
    currentIndex = newIndex;
    logo.src = logos[currentIndex];
    logo.style.opacity = '1';
  }, fadeDuration);
};

setInterval(() => {
  const newIndex = getCurrentIndex();

  if (newIndex === currentIndex) {
    return;
  }

  changeLogoWithFade(newIndex);
}, 60 * 1000);
