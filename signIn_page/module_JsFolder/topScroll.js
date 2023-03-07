'use strict';

export default function topScroll(){
    const stopScroll = setInterval(() => {
        window.scrollBy(0, -10);

        if (window.scrollY <= 0) clearInterval(stopScroll);
    });

}

export function scrollDisplay(scrollTop){
    scrollTop.style.display = 'none';
    if (window.scrollY > window.innerHeight / 6) {
        scrollTop.style.display = 'block';
    } else {
        scrollTop.style.display = 'none';
    }
}