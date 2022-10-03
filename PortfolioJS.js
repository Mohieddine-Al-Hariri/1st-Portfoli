
const control = document.querySelector('#topz').firstElementChild;
const r = document.querySelector(":root");
const bg = document.querySelector("#bg");
const tag = document.querySelector('#topz').lastElementChild;
const dev = document.querySelector('#dev');
const btn = document.querySelectorAll('button');
const secTwo = document.querySelector('#sec-two a');
const secTwor = document.querySelector('#sec-two');
const binary = document.querySelector('#binary');
const secThree = document.querySelector('#sec-three');
const projects = document.querySelector('#projects');
const throwing = document.getElementById('glass-ul').querySelectorAll('li');
//Bg Changing
let i = 0;
const gradients = ['linear-gradient(45deg,#800080 0%,#E90207 46%,#ff8c80 100%)','linear-gradient(45deg, #020024 0%, #090979 35%, #00d4ff 100%)','linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)',
'linear-gradient(180deg, #FFFFFF 0%, #6284FF 50%, #FF0000 100%)',
'linear-gradient(to top, #fcc5e4 0%, #fda34b 15%, #ff7882 35%, #c8699e 52%, #7046aa 71%, #0c1db8 87%, #020f75 100%)'
];

let z = 0;
function bgChanger(){    
    if(z===0){easterEggs();}
    z+=1;
    if(i===gradients.length){i=0}
    r.style.setProperty('--bgcolor', gradients[i]);
    i++}

// Developer Options
let g=5;
function deveOptions(){
    console.log("Hello");
    dev.style.setProperty('display','inline-block');
    g-=1;
    dev.innerHTML="";
    var text= document.createTextNode("Deveplor Options after: "+ g);
    dev.appendChild(text);
    if(g<=0){
        dev.style.setProperty('display','none');
        tag.removeEventListener('click',deveOptions);
        for(var i=0; i<btn.length; i++) {btn[i].style.setProperty('display','inline-block');}
        
        let l_tt=10;
        btn[0].addEventListener('click',function(){secTwor.style.setProperty('top',`${l_tt-=5}px`);});
        btn[1].addEventListener('click',function(){secTwor.style.setProperty('top',`${l_tt+=5}px`);});
        let g=0;
        btn[2].addEventListener('click',function(){
            binary.style.setProperty('top',`${g-=5}px`);});
        btn[3].addEventListener('click',function(){
            binary.style.setProperty('top',`${g+=5}px`);});
        let gThree=0;
        btn[4].addEventListener('click',function(){
            secThree.style.setProperty('top',`${gThree-=5}px`);});
        btn[5].addEventListener('click',function(){
            secThree.style.setProperty('top',`${gThree+=5}px`);});
        let g_proj=0;
        btn[6].addEventListener('click',function(){
            projects.style.setProperty('top',`${g_proj-=5}px`);});
        btn[7].addEventListener('click',function(){
            projects.style.setProperty('top',`${g_proj+=5}px`);});
        
        secThree.style.setProperty('left','50px');
        control.addEventListener("click", bgChanger);
        var textTwo = document.createElement("h1");
        textTwo.innerHTML= "Developer Options: <br> ON!";
        bg.appendChild(textTwo);
        textTwo.classList.add('text-two');
        setTimeout(function(){ textTwo.style.setProperty('animation','opic 2s'); }, 3000);
        easterEggs();
        setTimeout(function(){ bg.removeChild(textTwo) }, 4300);
}}
tag.addEventListener("click", deveOptions);

let egg = 0;
function easterEggs(){
    egg+=1;
    var textThree = document.createElement("h1");
    textThree.innerHTML= `You Found ${egg} of the 3 Eastereggs!`;
    bg.appendChild(textThree);
    textThree.classList.add('text-three');
    textThree.style.setProperty('top',`${5-egg}0%`);
    
    setTimeout(function(){ textThree.style.setProperty('animation','opic 2s'); }, 3000);
    setTimeout(function(){ bg.removeChild(textThree) }, 4300);
    if(egg==3){
        textThree.style.setProperty('top',`${3-egg}0%`);
        textThree.innerHTML= `You Found all 3 Eastereggs! <br> Congrats!!`;
        }
}
function easterSecTwo(){
    easterEggs();
    secTwo.removeEventListener("click",easterEggs);
}
secTwo.addEventListener("click", easterSecTwo);

// console.log(navigator.userAgent);
// console.log(navigator.userAgentData.mobile)
// console.log(throwing.length)
// if(navigator.userAgentData.mobile===true){console.log("working");}

if(navigator.userAgentData.mobile===true){
    for(let i=1;i<throwing.length;i++){
        throwing[i].style.setProperty('display','none');
}}