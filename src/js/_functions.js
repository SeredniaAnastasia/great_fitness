// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там

// Определение операционной системы на мобильных
// import { mobileCheck } from "./functions/mobile-check";
// console.log(mobileCheck())

// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }

// Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);

// Фикс фулскрин-блоков
// import './functions/fix-fullheight';

// Реализация бургер-меню
import './functions/burger';

// Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from './functions/disable-scroll';

// Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from './functions/enable-scroll';

// Реализация модального окна
// import GraphModal from 'graph-modal';
// const modal = new GraphModal();

// Реализация табов
import GraphTabs from 'graph-tabs';
const tabs = new GraphTabs('tab');
console.log(tabs)

// Получение высоты шапки сайта (не забудьте вызвать функцию)
// import { getHeaderHeight } from './functions/header-height';

// Подключение плагина кастом-скролла
// import 'simplebar';

// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });

// Подключение свайпера
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay]);
const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 0,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 640px



    678: {
      slidesPerView: 2,
      spaceBetween: 0
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 0
    },
    1199: {
      slidesPerView: auto,
      spaceBetween: 40
    }
  },
  // slidesPerView: auto,
  // spaceBetween: 45,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Подключение анимаций по скроллу
// import AOS from 'aos';
// AOS.init();

// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');

// Подключение плавной прокрутки к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');

// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });

// import { validateForms } from './functions/validate-forms';
// const rules1 = [
//     {
//         name: {
//             required: true,
//             minLength: 2,
//             maxLength: 30
//         },
//         tel: {
//             required: true,

//         },
//     }


// ];

// const afterForm = () => {
//     console.log('Произошла отправка, тут можно писать любые действия');
// };

// validateForms('#form', rules1, afterForm);

import './functions/my-validate-form';
import './functions/setting'; import { auto } from '@popperjs/core';
