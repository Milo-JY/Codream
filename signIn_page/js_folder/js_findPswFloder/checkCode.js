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
const checkcodeMain = document.querySelector('.checkcode_main'),
    inputCode = checkcodeMain.querySelector('.input_code'),
    userCode = inputCode.querySelector('#user_code'),
    codeP = checkcodeMain.getElementsByTagName('p'),
    checkbutton = checkcodeMain.querySelector('.check_button'),
    resend_button = checkcodeMain.querySelector('.resend_button');

const CodeValidation = /^[0-9]{6}$/;
let Flag = 0;

function changeColor(PTag , Color, FlagValue ){
    PTag.style.color = `${Color}`;
    Flag = FlagValue;
}

let NumAr = new Array(6).fill(0);
    for(let i =0 ; i< NumAr.length ; i++ ){
        
        NumAr[i] = Math.floor(Math.random() * 10);
    }
console.log(NumAr);
let TextValuAr;
function Validation(textValue){

    codeP[1].style.display = `block`;
    codeP[1].textContent = '* Please enter the 6-digit code.';
    
    if(CodeValidation.test(textValue)){
        TextValuAr = textValue.split('');
        if(TextValuAr.length){
            for(let i =0 ; i < NumAr.length ; i++){
                if(NumAr[i] === +TextValuAr[i]){
                    changeColor(codeP[1], 'green', 0);
                }else{
                    changeColor(codeP[1], 'green', 1);
                    break;
                }   
                
            }
        }
    }else{
        changeColor( codeP[1], 'red', 1);
    }
    
    if (!textValue ){
        codeP[1].textContent = '* Didn’t get an email?';
        changeColor( codeP[1], 'black', 1);
    }
}

userCode.addEventListener('keyup' , (e) =>{
    Validation(e.target.value);
})

checkbutton.addEventListener('click' , (e) => {
    if(Flag){
        alert('Your code is not confirmed. Check your code which we sent you should be 6-digit.');
        userCode.focus();
        e.preventDefault();
    }
});