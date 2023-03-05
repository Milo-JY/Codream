`use strict`

const header = document.querySelector(`header`),
    headerBigNav = header.querySelector(`.headerBigNav`),
    main = document.querySelector(`main`),
    aside = main.querySelector(`aside`);

window.addEventListener(`wheel`, (e) => {

    if(e.deltaY > 0) {
        headerBigNav.style.top = `-81px`;
    };
    if(e.deltaY < 0) {
        headerBigNav.style.top = `0`;
    };
});

// ======================================================


window.addEventListener(`scroll`, ()=>{
    setTimeout(()=> {
        aside.style.top = `calc(50% - 175px + ${scrollY}px)`;
    }, 200)
});