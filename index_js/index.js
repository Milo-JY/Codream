`use strict`

const header = document.querySelector(`header`),
    headerBigNav = header.querySelector(`.headerBigNav`);

window.addEventListener(`wheel`, (e) => {

    if(e.deltaY > 0) {
        headerBigNav.style.top = `-81px`;
    };
    if(e.deltaY < 0) {
        headerBigNav.style.top = `0`;
    };
});

// ========================================================

const main = document.querySelector(`main`),
    slideBox = main.querySelector(`.slideBox`),
    radioBox = main.querySelector(`.radioBox`),
    playBtn = main.querySelector(`button`);

const bgAr = [
    './image_folder/brandnew_intro1.png',
    './image_folder/brandnew_intro2.png',
    './image_folder/brandnew_intro3.png',
];

for (let i = 0; i < bgAr.length; i++) {
    radioBox.innerHTML += `<a href = "#" data-num = ${i}><div class="innerCircle"></div></a>`;
}

const slideLi = slideBox.getElementsByTagName(`li`),
    miniCircle = radioBox.getElementsByClassName(`innerCircle`);

for (let i = 1; i < bgAr.length; i++) {
    slideLi[i].style.background = `url(${bgAr[i]}) center / cover`;
}

slideLi[1].style.backgroundColor = `blue`;
slideLi[2].style.backgroundColor = `green`;

let currentIdx = 0,
    nextIdx;
let beforeEventTime = -new Date();


function executable() {
    if (new Date() - beforeEventTime > 1300) {
        beforeEventTime = new Date();
        return true;
    }
}

function radioPager() {
    miniCircle[currentIdx].style.backgroundColor = 'white';
    miniCircle[nextIdx].style.backgroundColor = 'rgb(49, 47, 47)';
}

function preSlide(){
    slideLi[nextIdx].classList.remove('animated');
    slideLi[nextIdx].style.top = `-100%`;
}

function autoSlide() {
    setTimeout(()=>{
        slideLi[currentIdx].classList.add('animated');
        slideLi[nextIdx].classList.add('animated');
    
        slideLi[currentIdx].style.top = `100%`;
        slideLi[nextIdx].style.top = `0`;

        radioPager();

        currentIdx = nextIdx;

    }, 50);
}

radioBox.addEventListener(`click`, function (e) {
    const eventEle = e.target.closest('a');

    e.preventDefault();
    if( this.contains(eventEle) && executable()) {
        
        const extractValue = +eventEle.dataset.num;

        nextIdx = extractValue;

        if( currentIdx != nextIdx ){
            preSlide();
        } else {
            return;
        }

        autoSlide();
    }
})

let autoInterval = setInterval(() => {
    if(executable()){
        
        nextIdx = (currentIdx + 1) % bgAr.length;
        
        
        preSlide();
        autoSlide();
    }

}, 3300);

let playFlag = 0;

playBtn.addEventListener(`click`, ()=> {
    if(playFlag === 0) {
        playBtn.style.background = `url(./image_folder/playBtn.png) center / cover`
        clearInterval(autoInterval);
        playFlag = 1;
    } else {
        playBtn.style.background = `url(./image_folder/stopBtn.png) center / cover`
        autoInterval = setInterval(() => {
            if(executable()){
                nextIdx = (currentIdx + 1) % bgAr.length;
                
                preSlide();
                autoSlide();
            }
        
        }, 3300);
        playFlag = 0;
    }
    
})

// ================================================================================
const fixedBack = main.querySelector(`.fixedBack`);

window.addEventListener(`scroll`, ()=> {
    if (scrollY >= slideBox.offsetHeight*2) {
        fixedBack.style.background = `url(./image_folder/main_banner.jpeg) center / cover`;
    } else if (scrollY <= slideBox.offsetHeight*2) {
        fixedBack.style.background = `url(./image_folder/main_back.jpeg) center / cover`;
    }
})