console.log('it works');

const mainButton = document.querySelector('.firstB');
const modalOuter = document.querySelector('.modal-outer');
const formSubmit = document.querySelector('.form-submit');
const modalInner = document.querySelector('.modal-inner');
const subModalInner = document.querySelector('.submodal-inner');
const backBtn = document.querySelector('.backBtn');
const formReset = document.querySelector('.form-reset');

const hubby = document.querySelector('.hubby');
const dob = document.querySelector('.dob');
const pName = document.querySelector('.pname');

const nameOutput = document.querySelector('.name-output');
const ageOutput = document.querySelector('.age-output');
const hobbyOutput = document.querySelector('.hobby-output');
const msg = document.querySelector('.msg');



const currentYear = 2020;


function mainButtonCallback(){
    modalOuter.classList.add('open');
   

}

function formSubmitCallBack(e){
    e.preventDefault();

    const hbb = hubby.value;
    const name = pName.value;
    const db = parseInt(dob.value);

    // const ff = hbb;
    // ff.split('').map((l)=>{
    //     l.toUpperCase();
    // })
    
    if (hbb == '' || name == '' || db == ''){
        alert('oh oh you left a filled empty');
        return;
    }else if(typeof hbb != 'string' || typeof name != 'string' || typeof db != 'number'){
        alert('please type a valid input');
        return;
    }else{
        hobbyOutput.textContent += hbb;
        nameOutput.textContent += name;
        ageOutput.textContent += currentYear - db;
        msg.textContent += (currentYear - db) * 365;
    }

    modalInner.classList.add('hidden');
    subModalInner.classList.remove('hidden');

}

function backBtnCallBack(){
    modalOuter.classList.remove('open');
    modalInner.classList.remove('hidden');
    subModalInner.classList.add('hidden');

}

function formResetCallBack(e){
    e.preventDefault();
    hubby.value = '';
    pName.value = '';
    dob.value = '';
    
}

mainButton.addEventListener('click', mainButtonCallback);
formSubmit.addEventListener('click',formSubmitCallBack);
backBtn.addEventListener('click',backBtnCallBack);
formReset.addEventListener('click',formResetCallBack);