$('.menu').localScroll();

const sr = ScrollReveal({
  reset: true
});

sr.reveal('.menu-title', {
  duration: 1000,
  origin: 'left',
  distance: '20px',
  reset: false
})

sr.reveal('.item-animate', {
  duration: 1000,
  origin: 'right',
  distance: '40px',
  interval: 150,
  delay: 1000,
  reset: false
})

sr.reveal('.header-1', {
  duration: 1000,
  origin: "bottom",
  distance: "20px"
});

sr.reveal('.header-2', {
  duration: 1000,
  delay: 500
})

sr.reveal('#header-separator', {
  origin: "left",
  duration: 500,
  delay: 1000,
  distance: '50px'
})

var revealChildren = sr.reveal('.title, .desc', {
  duration   : 500,
  scale      : 1,
  distance   : '20px',
  origin     : 'bottom',
  easing     : 'ease-out',
  viewFactor : 1,
  interval   : 75
});

sr.reveal('.division', {
  duration   : 600,
  distance   : '20px',
  easing     : 'ease-out',
  origin     : 'bottom',
  scale      : 1,
  viewFactor : 0,
  interval   : 150,
  afterReveal: revealChildren,
});

