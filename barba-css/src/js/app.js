import barba from '@barba/core';
import barbaCss from '@barba/css';

// tell Barba to use the css plugin
barba.use(barbaCss);

const body = document.querySelector('body');

// Global hook before that will run before any transition
barba.hooks.before((data) => {
  const background = data.current.container.dataset.background;
  body.style.setProperty('--page-background', background);
});

// init Barba
barba.init({

  // Array of transition objects
  transitions: [
    {
      name: 'home',

      // barba hooks
      beforeOnce() {

      },

      // Never runs with the css plugin
      once() { },
      afterOnce() {
      },
    }, {
      name: 'fade',
      to: {
        namespace: ['fade'],
      },
      leave() { },
      enter() { },
    }, {
      name: 'clip',
      sync: true,
      to: {
        namespace: ['clip'],
      },
      leave() { },
      enter() { },
      beforeEnter() { },
    },
  ],
});
