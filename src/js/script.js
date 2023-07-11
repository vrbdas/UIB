import {tns} from 'tiny-slider';

const slider = tns({
  container: '.licence__tns',
  items: 3,
  slideBy: 1,
  autoplay: false,
  nav: false,
  loop: false,
  gutter: 20,
  prevButton: '.licence__slider-prev',
  nextButton: '.licence__slider-next',
});

