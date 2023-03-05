'use strict';
import topScroll , {scrollDisplay} from "../../module_JsFolder/topScroll.js";
import accordion from "../../module_JsFolder/accordion.js";
const header = document.querySelector(`header`),
    headerBigNav = header.querySelector(`.headerBigNav`);
const main_notice = document.querySelector('.main_notice');
window.addEventListener(`wheel`, (e) => {

    if(e.deltaY > 0) {
        headerBigNav.style.top = `-81px`;
    };
    if(e.deltaY < 0) {
        headerBigNav.style.top = `0`;
    };
});

/* ================================= header ===================================== */

const scrollTop = document.querySelector('.fa-angle-up');

document.addEventListener('scroll', () => {
    scrollDisplay(scrollTop);
});


// 스크롤탑 버튼을 클릭했을 때

scrollTop.addEventListener('click', () => {
   topScroll();
});

main_notice.addEventListener('click' , (e) => {
    const eventObj = e.target.closest('div');
   
    if(eventObj.className === 'flex_div'){
        accordion(eventObj);
    }
   
});