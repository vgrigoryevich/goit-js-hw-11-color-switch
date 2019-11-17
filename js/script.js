import colors from './colors.js';
import refs from './refs.js';

const backgroundColor = {
  randomThemeActive: false,
  colors: colors,
  addBackgroundColor() {
    const randomIntegerFromInterval = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
    const color = colors => {
      const min = 0;
      const max = colors.length - 1;
      let index = randomIntegerFromInterval(min, max);
      return colors[index];
    };
    refs.body.bgColor = color(this.colors);
  },

  start() {
    if (this.randomThemeActive === true) {
      return;
    }
    this.randomThemeActive = true;
    this.timerId = setInterval(() => {
      this.addBackgroundColor();
    }, 1000);
    // console.log('start');
  },
  stop() {
    if (this.randomThemeActive === false) {
      return;
    }
    // console.log('stop');
    clearInterval(this.timerId);
    this.randomThemeActive = false;
  },
};
refs.theme.addEventListener('click', event => {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  event.target.dataset.action === 'start' ? backgroundColor.start() : backgroundColor.stop();
});