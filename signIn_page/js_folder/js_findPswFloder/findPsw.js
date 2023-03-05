'use strict';

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
const findpwMain = document.querySelector('.findpw_main'),
    userAddress = findpwMain.querySelector('#user_address'),
    sendButtom = findpwMain.querySelector('.send_button'),
    textDiv = findpwMain.querySelector('.textDiv'),
    [EmailP ,remA]= textDiv.getElementsByTagName('p');
   
let popup;
const addressAr = [
    'qazwsx@gmail.com',
    'qazwsx123@gmail.com',
    'zxczxc@gmail.com',
    'zxczxc123@gmail.com',
    'qweqwe@gmail.com',
    'qweqwe123@gmail.com',
    'asdasd213@gmail.com',
    'asdasd123@gmail.com',
    'edcedc@gmail.com',
    'edcedc123@gmail.com',
    'qweqwe@gamil.com'
];

function popupOpen(){
    let locationX = (screen.width - 500) / 2;  
    let locationY = (screen.height - 500) / 2; 
    popup = open('findEmail.html', 'FindEmail', `left=${locationX}px, top=${locationY}px` );
    popup.resizeTo(500, 500);
}


let Flag = 0
userAddress.addEventListener('keyup' , (e) => {
    const eventObj = e.target.value;
    EmailP.style.display = 'block';
    remA.style.display = 'none';
    if(addressAr.includes(eventObj)){
        EmailP.textContent = '* Your email has been verified.';
        EmailP.style.color = 'green';
        Flag = 0;
    }else{
        EmailP.textContent = '* Email does not exist. please check again.';
        EmailP.style.color = 'red';
        Flag = 1;
    }
    if(!eventObj){
        EmailP.style.display = 'none';
        remA.style.display = 'block';
        Flag = 1;
    }

});

findpwMain.addEventListener( 'click' , (e) =>{
    const eventObj = e.target;
    if(eventObj === remA){
        popupOpen();
    }else if(eventObj === sendButtom){
        if(Flag){
            alert('Email does not exist. please check again.');
            userAddress.focus();
            e.preventDefault();
        }
    }
})