import barba from '@barba/core';
import { animationEnter, animationLeave } from './animations';
barba.init({
  transitions: [
    {
      once({ next }) {
        animationEnter(next.container);
      },

      // we need to wait for this animation to finish before enter animation plays
      leave: ({ current }) => animationLeave(current.container),
      enter({ next }) {
        animationEnter(next.container);
      },
    },
  ],
});

