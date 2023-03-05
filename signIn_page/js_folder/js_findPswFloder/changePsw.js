'use strict';
import changePswAttr , {ValidationPsw} from "../../module_JsFolder/changePswAttr.js";

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
const changePswMain = document.querySelector('.change_psw_main'),
    password = changePswMain.querySelector('.password'),
    userPassword = password.querySelector('#user_password'),
    pswFaEye = password.querySelector('.fa-eye'),
    pswFaEyeSlash = password.querySelector('.fa-eye-slash'),
    pawP = password.getElementsByTagName('p'),
    confirmPassword = changePswMain.querySelector('.confirm_password'),
    userConfirmPasswords =confirmPassword.querySelector('#user_confirm_passwords'),
    confirmFaEye = confirmPassword.querySelector('.fa-eye'),
    confirmEyeSlash = confirmPassword.querySelector('.fa-eye-slash'),
    conP = confirmPassword.getElementsByTagName('p'),
    changeButton = changePswMain.querySelector('.change_button');


let FlagAr = [ 0 , 0 ];

function changeColor(PTag , Color ,FlagObjIndx , Flag ){
    PTag.style.color = `${Color}`;
    FlagAr[FlagObjIndx] = Flag;  
}
    
changePswMain.addEventListener('keyup', (e) => {
    const eventObj = e.target;
    if(eventObj === userPassword || eventObj === userConfirmPasswords){
        ValidationPsw(userPassword , userConfirmPasswords, pawP[0], conP[0], changeColor);
    }
});

changePswMain.addEventListener('click' , (e) =>{
    if(e.target.closest('span')){
        if(e.target === pswFaEye || e.target === pswFaEyeSlash){
            changePswAttr(e.target , pswFaEye , pswFaEyeSlash ,userPassword);
            
        }else if( e.target === confirmFaEye || e.target === confirmEyeSlash){
            changePswAttr(e.target , confirmFaEye , confirmEyeSlash ,userConfirmPasswords);
        }
    }
});

changeButton.addEventListener('click' , (e) =>{
    if(FlagAr[0]){
        alert("Check Password");
        userPassword.focus();
    }else if(FlagAr[1]){
        alert("Check ConfirmPassword");
        userConfirmPasswords.focus();
    }else{
        return;
    }
    e.preventDefault();
});