

const num1Elem=document.querySelector('#num1');
const getButton=document.querySelector('#getButton');
console.warn(window.screen.width)
console.error(window.screen.height)



getButton.addEventListener('click',() => {
    let szam=num1Elem.value;
    num1Elem.value='';
    //kiir(szam);
    vizsgalat(szam);
});

function vizsgalat(input){
    let egyezik = input.match(/^[0-9]+$/); // ^ a sor elejét jelzi, $ a sor végét jelzi
    if(egyezik){
        console.log('Egyezik');
    }else{
        console.log('Nem egyezik');
    }
};

function kiir(szam) {
    if (szam == 1) {
        console.log('egy');
    } else if (szam == 2) {
        console.log('ketto');
    } else if (szam == 3) {
        console.log('három');
    } else {
        console.log('egyéb');
    }
};

const doboz1=document.querySelector("#doboz1");
const startButton=document.querySelector("#startButton");

startButton.addEventListener('click',()=>{
    doboz1.style.backgroundColor='blue';
    doboz1.style.animation='valami1 5s infinite'

})
