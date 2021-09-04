// From the incoming page
const animationEnter = (container) => {
  return gsap.from(container, {
    autoAlpha: 0,
    duration: 2,
    clearProps: 'all',
    ease: 'none',
  });
};