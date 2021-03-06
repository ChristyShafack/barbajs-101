import barba from '@barba/core';
import barbaPrefetch from '@barba/prefetch';
import barbaRouter from '@barba/router';
import gsap from 'gsap/all';
import { revealProject, leaveToProject, leaveFromProject, animationEnter, animationLeave } from './animations';

const myRouter = [
  { name: 'home', path: ' /index.html' },
  { name: 'architecture', path: ' /architecture.html' },
  { name: 'detail', path: ' /detail-page.html' },
]

barba.use(barbaPrefetch);
barba.use(barbaRouter);

const resetActiveLink = () => gsap.set('a.is-active span', {
  xPercent: -100,
  transformOrigin: 'left',
});

// Global Hooks
barba.hooks.enter(() => {
  window.scrollTo(0, 0)
});

barba.init({
  views: [
    {
      namespace: 'architecture',
      beforeEnter(data) {
        console.log(data, 'beforeEnter');
      }
    }
  ],
  transitions: [
    {
      name: 'detail',
      to: {
        namespace: ['detail'],
      },
      once({ next }) {
        revealProject(next.container);
      },
      leave: ({ current }) => leaveToProject(current.container),
      enter({ next }) {
        revealProject(next.container)
      },
    },
    {
      name: 'general-transition',
      once({ next }) {
        resetActiveLink();
        gsap.from('header a', {
          duration: 0.6,
          yPercent: 100,
          stagger: 0.2,
          ease: 'power1.out',
          onComplete: () => animationEnter(next.container),
        });
      },

      // we need to wait for this animation to finish before enter animation plays
      leave: ({ current }) => animationLeave(current.container),
      enter({ next }) {
        animationEnter(next.container);
      },
    }, {
      name: 'from-detail',
      from: {
        namespace: ['detail']
      },
      leave: ({ current }) => leaveFromProject(current.container),
      enter({ next }) {
        gsap.from('header a', {
          duration: 0.6,
          yPercent: 100,
          stagger: 0.2,
          ease: 'power1.out',
        });
        animationEnter(next.container)
      },
    }
  ],
});

