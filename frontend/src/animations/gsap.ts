import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

export function fadeInOnScroll(selector: string, options?: gsap.TweenVars) {
  return gsap.from(selector, {
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: selector,
      start: 'top 85%',
      toggleActions: 'play none none reverse',
    },
    ...options,
  });
}

export function parallaxElement(selector: string, speed = 0.5) {
  return gsap.to(selector, {
    yPercent: speed * 100,
    ease: 'none',
    scrollTrigger: {
      trigger: selector,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });
}

export function staggerReveal(selector: string, stagger = 0.1) {
  return gsap.from(selector, {
    opacity: 0,
    y: 30,
    duration: 0.6,
    stagger,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: selector,
      start: 'top 85%',
    },
  });
}

export function createHorizontalSection(selector: string) {
  return gsap.to(selector, {
    xPercent: -50,
    ease: 'none',
    scrollTrigger: {
      trigger: selector,
      start: 'top top',
      end: '+=2000',
      scrub: true,
      pin: true,
    },
  });
}

export function createPinnedSection(selector: string) {
  return gsap.to(selector, {
    ease: 'none',
    scrollTrigger: {
      trigger: selector,
      start: 'top top',
      end: '+=100%',
      pin: true,
      scrub: true,
    },
  });
}

export function createInfiniteMarquee(selector: string, speed = 25) {
  return gsap.to(selector, {
    x: '-50%',
    repeat: -1,
    duration: speed,
    ease: 'none',
  });
}

export function animateCounter(element: string | Element, value: number, duration = 1.4) {
  const target = typeof element === 'string' ? document.querySelector(element) : element;

  if (!target) return null;

  return gsap.fromTo(
    target,
    { textContent: 0 },
    {
      textContent: value,
      duration,
      ease: 'power2.out',
      snap: { textContent: 1 },
      onUpdate() {
        if (target instanceof HTMLElement) {
          target.textContent = `${Math.round(Number(target.textContent))}`;
        }
      },
    },
  );
}
