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
import changePswAttr , {ValidationPsw} from "../../module_JsFolder/changePswAttr.js";

const singupMainDiv = document.querySelector('#singup_main_div'),
    password = singupMainDiv.querySelector('.password'),
    confirmPassword = singupMainDiv.querySelector('.confirm_password'),
    email = singupMainDiv.querySelector('.email'),
    userEemailaddress = email.querySelector('#user_emailaddress'),
    userPassword =password.querySelector('#user_password'),
    userConfirmPasswords =confirmPassword.querySelector('#user_confirm_passwords'),
    pswFaEye = password.querySelector('.fa-eye'),
    pswFaEyeSlash = password.querySelector('.fa-eye-slash'),
    confirmFaEye = confirmPassword.querySelector('.fa-eye'),
    confirmEyeSlash = confirmPassword.querySelector('.fa-eye-slash');

// 인풋태그 
const  creatButton = singupMainDiv.querySelector('.create_account'),
    mobilePhoneNum = singupMainDiv.querySelector('.mobile_phone_number'),
    PhoneNumInput = mobilePhoneNum.querySelector('#Moblie_Phone_Number'),
    firstName = singupMainDiv.querySelector('.first_name'),
    lastName = singupMainDiv.querySelector('.last_name'),
    userFirstName = firstName.querySelector('#user_firstname'),
    userLastName = lastName.querySelector('#user_lastname');

// p태그 
const EmailP = email.getElementsByTagName('p'),
    moblieP = mobilePhoneNum.getElementsByTagName('p'),
    firstP = firstName.getElementsByTagName('p'),
    lastP = lastName.getElementsByTagName('p'),
    pawP = password.getElementsByTagName('p'),
    conP = confirmPassword.getElementsByTagName('p');

// 인풋 태그 정규 표현식 
const emailValidation = /^[a-zA-Z0-9]*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z]+)\.([a-zA-Z]){1,3}$/,
    PhoneNumValidation = /^[0-9]{5,}$/,
    firstNameValidation = /^[A-Z]([a-zA-Z]){1,}$/,
    lastNameValidation = /^[a-zA-Z]{4,}$/;

// 비밀번호 플래그 배열 
let PswFlagAr = [ 0, 0];

// first ~ email 플래그 배열 
let FlagAr = [ 0, 0, 0, 0];

// 텍스트 배열

let PTextAr = [
    '* Enter the first letter in upper case.',
    '* Please enter at least 3 characters.',
    '* Only numbers.',
    '* The email format is ex) avc12@gmail.com',
];

/* ======================== ========================================================*/

/*===================================인풋태그 유효성 검사 ====================================*/

function ModulechangeColor(PTag , Color ,FlagArjIndx , Flag ){
    PTag.style.color = `${Color}`;
    PswFlagAr[FlagArjIndx] = Flag;  
}

function changeColor(PTag , Color ,FlagArjIndx , Flag ){
    PTag.style.color = `${Color}`;
    FlagAr[FlagArjIndx] = Flag;  
}

function displayChange(ptag , value){
    ptag.style.display = `${value}`;
}

function textPtagChange(ptag , value){
    ptag.textContent = PTextAr[value];
}


function Validation(ptag , text, checkVaildation, textValue, Flags){
    displayChange( ptag , "block" );
    textPtagChange(ptag, text );
    
    if(checkVaildation.test(textValue)){
        changeColor(ptag, 'green', Flags, 0);
    }else{
        changeColor( ptag, 'red', Flags, 1);
    }
    
    if (!textValue ){
        displayChange( ptag ,"none" );
        changeColor( ptag, 'red', Flags, 1);
    }
}

function ButtonValidation(alertText , InputTag){
    alert(`Check ${alertText}`);
    InputTag.focus();
}


/* ========================================================================================*/

/* ========================================탑아이콘 scroll===================================*/
import topScroll , {scrollDisplay} from "../../module_JsFolder/topScroll.js";

// 탑아이콘 
const scrollTop = document.querySelector('.fa-angle-up');

document.addEventListener('scroll', () => {
    scrollDisplay(scrollTop);
});


// 스크롤탑 버튼을 클릭했을 때

scrollTop.addEventListener('click', () => {
   topScroll();
});

/* ========================================================================================*/
// 실인수 설명 ( p태그 , PTextAr베열[인덱스 number] , input태그.value , FlagObj베열[인덱스 number]);
//Validation(firstP[0] , 0, firstNameValidation, userFirstName.value, 0);

// 모둘 실인수 설명 (input태그 , input태그 , p태그 , p태그 , 모듈에서 콜백 호출 함수 참조주소 )
//ValidationPsw(userPassword , userConfirmPasswords, pawP[0], conP[0], ModulechangeColor);

singupMainDiv.addEventListener('click' , (e) =>{
    if(e.target.closest('span')){
        if(e.target === pswFaEye || e.target === pswFaEyeSlash){
            changePswAttr(e.target , pswFaEye , pswFaEyeSlash ,userPassword);
        }else if( e.target === confirmFaEye || e.target === confirmEyeSlash){
            changePswAttr(e.target , confirmFaEye , confirmEyeSlash ,userConfirmPasswords);
        }
    }
});

singupMainDiv.addEventListener('keyup', (e) => {
    const eventObj = e.target;
    if(eventObj === userPassword || eventObj === userConfirmPasswords){
        ValidationPsw(userPassword , userConfirmPasswords, pawP[0], conP[0], ModulechangeColor);
    }else if(eventObj === userFirstName){
        Validation(firstP[0] , 0, firstNameValidation, userFirstName.value, 0);
    }else if(eventObj === userLastName){
        Validation(lastP[0] , 1, lastNameValidation, userLastName.value, 1);
    }else if(eventObj === PhoneNumInput){
        Validation(moblieP[0] , 2, PhoneNumValidation,  PhoneNumInput.value, 2);
    }else if(eventObj === userEemailaddress){
        Validation(EmailP[0] , 3, emailValidation, userEemailaddress.value, 3);
    }
});

creatButton.addEventListener('click' , (e) =>{
    if(FlagAr[0]){
        ButtonValidation('FirstName' ,userFirstName);
    }else if(FlagAr[1]){
        ButtonValidation('LastName' , userLastName);
    }else if(FlagAr[2]){
        ButtonValidation('MobliePhoneNumber' , PhoneNumInput);
    }else if(FlagAr[3]){
        ButtonValidation('Email' , userEemailaddress);
    }else if(PswFlagAr[0]){
        ButtonValidation('Password' , userPassword);
    }else if(PswFlagAr[1]){
        ButtonValidation('ConfirmPassword' , userConfirmPasswords);
    }else {
        return ;
    }
    e.preventDefault();
});
