import Swiper from 'swiper';
import 'swiper/css';

const sliders = document.querySelectorAll('.portoflio-list__slider')


sliders.forEach(slider=>{
  const previous = slider.querySelector('.previous')
  const next = slider.querySelector('.next')
  const swiperContainer = slider.querySelector('.swiper')
  let swiper = new Swiper(swiperContainer, {
    loop:true,
    slidesPerView: 1.1,
    loop:true,
    spaceBetween:20,
    breakpoints: {
      1200: {
        slidesPerView: 3,
      },
      900: {
        slidesPerView: 2,
        spaceBetween:60,
      }
   }
  });

  previous.addEventListener('click',()=>{
    swiper.slidePrev()
  })
  next.addEventListener('click',()=>{
    swiper.slideNext()
  })
})



