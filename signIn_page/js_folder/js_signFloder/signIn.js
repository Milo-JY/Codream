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

import changePswAttr from "../../module_JsFolder/changePswAttr.js";

const signIn = document.querySelector('.sign_in'),
    pswText = signIn.querySelector('#user_psw'),
    showPsw = signIn.querySelector('.show_psw'),
    faEye = showPsw.querySelector('.fa-eye'),
    faEyeSlash = showPsw.querySelector('.fa-eye-slash');

    
// let changeType =   changePswType(pswText);

showPsw.addEventListener('click' , (e) =>{
        if(e.target === faEye ||e.target === faEyeSlash){
            changePswAttr(e.target , faEye , faEyeSlash ,pswText);
        }
});