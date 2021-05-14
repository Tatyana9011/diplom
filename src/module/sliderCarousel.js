'use strick';

class SliderCarousel {
  constructor({
    main,
    wrap,
    next,
    prev,
    infinity = false,
    slidesToShow = 3,
    responsive = [],
    position = 0 }) {
    if (!main || !wrap) {
      console.log('Необходимо передать два ствойства "main" и "wrap"!');
    }
    this.main = document.querySelector(main);
    this.wrap = document.querySelector(wrap);
    this.slides = document.querySelector(wrap).children;
    this.next = document.querySelector(next);
    this.prev = document.querySelector(prev);
    this.slidesToShow = slidesToShow;
    this.options = {
      position,
      widthSlide: Math.floor(100 / this.slidesToShow),
      infinity,
      maxPosition: this.slides.length - this.slidesToShow,
    };
    this.responsive = responsive;
  }

  init() {
    this.addGloClass();
    this.addStyle();
    if (this.prev && this.next) {
      this.controlSlider();
    }
    if (this.responsive) {
      this.responseInit();
    }
  }
  addGloClass() {
    this.main.classList.add('glo-slider');
    this.wrap.classList.add('glo-slider__wrap');
    for (const item of this.slides) {
      item.classList.add('glo-slider__item');
    }
  }
  addStyle() {
    let style = document.getElementById('sliderCarousel-style');
    if (!style) {
      style = document.createElement('style');
      style.id = 'sliderCarousel-style';
    }
    document.head.appendChild(style);
    style.textContent = `
      .glo-slider{
      overflow:hidden  !important;
      }
      .glo-slider__wrap{
        display:flex  !important;
        transition: transform 0.5s  !important;
        will-change:transform  !important;
      }
      .glo-slider__item{ 
        display:flex  !important;
        align-items: center;
        justify-content: center;
        flex: 0 0 ${this.options.widthSlide}%  !important;
        margin: auto 0  !important;
      }
    `;
  }
  controlSlider() {
    this.prev.addEventListener('click', this.prevSlider.bind(this));
    this.next.addEventListener('click', this.nextSlider.bind(this));
  }

  prevSlider() {
    if (this.options.infinity || this.options.position > 0) {
      this.options.position--;
      console.log('this.options.position: ', this.options.position);
      if (this.options.position < 0) {
        console.log('this.options.position: ', this.options.position);
        this.options.position = this.options.maxPosition;
      }
      this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
    }
  }
  nextSlider() {
    if (this.options.infinity || this.options.position < this.options.maxPosition) {
      ++this.options.position;
      if (this.options.position > this.options.maxPosition) {
        this.options.position = 0;
      }
      this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
    }
  }

  responseInit() {
    const slidesToShowDefault = this.slidesToShow;
    const allResponsive = this.responsive.map(item => item.breakpoint);
    const maxResponsive = Math.max(...allResponsive);
    const checkResponse = () => {
      const widthWindow = document.documentElement.clientWidth;
      if (widthWindow < maxResponsive) {
        for (let i = 0; i < allResponsive.length; i++) {
          if (widthWindow < allResponsive[i]) {
            this.slidesToShow = this.responsive[i].slidesToShow;
            this.options.widthSlide = Math.floor(100 / this.slidesToShow);
            this.addStyle();
          }
        }
      } else {
        this.slidesToShow = slidesToShowDefault;
        this.options.widthSlide = Math.floor(100 / this.slidesToShow);
        this.addStyle();
      }
    };
    checkResponse();
    window.addEventListener('resize', checkResponse);
  }
}
export default SliderCarousel;
