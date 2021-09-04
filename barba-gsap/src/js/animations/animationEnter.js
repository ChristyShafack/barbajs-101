// From the incoming page
import gsap from 'gsap';

const animationEnter = (container) => {

  const activeLink = container.querySelector('a.is-active span');

  const projects = container.querySelectorAll('.project');

  const tl = gsap.timeline({
    defaults: {
      duration: 0.9,
      ease: 'power4.out',
    },
  });

  tl
    .set(projects, { autoAlpha: 1 })
    .fromTo(activeLink, { xPercent: -101 }, {
      xPercent: 0,
      transformOrigin: 'left'
    });

  return tl;
};
export default animationEnter;