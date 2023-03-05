`use strict`;


// ============================================
// 헤더

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

/* ============================================ */

// 메인


// === < 아코디언1 - 자주 묻는 문의사항 >

const commonQuestion_container = document.querySelector(`.commonQuestion_container`),
commonQ_header = commonQuestion_container.getElementsByClassName(`commonQ_header`),
btn_collapseAll = commonQuestion_container.querySelector(`.btn_collapseAll`);


commonQuestion_container.addEventListener(`click`, (e) => {
    const targetEvent = e.target;
    
    if(targetEvent.className === `commonQ_header`) {
        
        if(targetEvent.parentNode.classList.contains(`commonQ1_hidden`)) {
            
            targetEvent.parentNode.classList.remove(`commonQ1_hidden`);
            targetEvent.textContent = `▶︎${targetEvent.textContent.slice(1)}`;
        } else {
            
            targetEvent.parentNode.classList.add(`commonQ1_hidden`);
            targetEvent.textContent = `▼${targetEvent.textContent.slice(1)}`;
        }
    }
    
    if(targetEvent === btn_collapseAll) {
        for (let i = 0; i < commonQ_header.length; i++) {
            commonQ_header[i].parentNode.classList.add(`commonQ1_hidden`);
            commonQ_header[i].textContent = `▼${commonQ_header[i].textContent.slice(1)}`;
        }
    }
});

// === < 아코디언2 - 서비스 요청문의 >

// ===========================================

// === < 아코디언1 - 자주 묻는 문의사항 >

const serviceQuestion_container = document.querySelector(`.serviceQuestion_container`),
serviceQ_header = serviceQuestion_container.getElementsByClassName(`serviceQ_header`);


serviceQuestion_container.addEventListener(`click`, (e) => {
    const targetEvent = e.target;
    
    if(targetEvent.className === `serviceQ_header`) {
        
        if(targetEvent.parentNode.classList.contains(`serviceQ_hidden`)) {
            
            targetEvent.parentNode.classList.remove(`serviceQ_hidden`);
            targetEvent.textContent = `▶︎${targetEvent.textContent.slice(1)}`;
        } else {
            
            targetEvent.parentNode.classList.add(`serviceQ_hidden`);
            targetEvent.textContent = `▼${targetEvent.textContent.slice(1)}`;
        }
    }
    
    if(targetEvent === btn_collapseAll) {
        for (let i = 0; i < serviceQ_header.length; i++) {
            serviceQ_header[i].parentNode.classList.add(`serviceQ_hidden`);
            serviceQ_header[i].textContent = `▼${serviceQ_header[i].textContent.slice(1)}`;
        }
    }
});



/* ========================================================= */