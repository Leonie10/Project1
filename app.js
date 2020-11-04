let body = document.querySelector('body');
let sliderImg = document.querySelector('.slider-image');
let sliderDrape = document.querySelector('.slider-drape');
let sliderUl = document.querySelector('.slider-ul');
let sliderLi = document.querySelectorAll('.slider-li');


let mouseOverUl;
let drapeClass;
let imageClass = 'slider-image';
let imageGrow = 'slider-image--grow';
let drapeClassOff = 'slider-drape';
let drapeOpenClass = drapeClassOff + " slider-drape--open";
let drapeCloseClass = drapeClassOff + " slider-drape--close";
let mouseEvent = '';

const pictures =  ['vietnam.jpg', 'ecuador.jpg', 'australia.jpg', 'jordan.jpg', 'southafrica.jpeg'];
let oldLi;
let currentLi;

// QUAND MOUSE EST SUR 1 LI ALORS ANIMATION
// SI MOUSE EST SUR UNE LI DIFFERENTE DONC ELLE BOUGE 
// ON ENLEVE LA CLASS GROW DE SLIDER IMAGE 

function isMouseOver () {
    if(mouseEvent === 'mouseover'){
        drapeClass = drapeOpenClass;
    } else if (mouseEvent === 'mouseout'){
        drapeClass = drapeCloseClass;
    
    }
    return sliderDrape.classList = drapeClass;
}

function liIsOver (li) {
    for(x = 0; x < sliderLi.length; x++){
        if(li == sliderLi[x]){
            sliderImg.style.backgroundImage = 'url(./images/' + pictures[x] + ')';
        }else{
            continue;
        }
    }
}

function growImage (li) {
    if(li.classList[0] === 'slider-li' && !oldLi){
        currentLi = li;
        oldLi = currentLi;
        sliderImg.style.animation = 'growImage 1s forwards';
    }
    if (li !== currentLi && oldLi){
        oldLi = currentLi;
        currentLi = li;
    }
    if(currentLi !== oldLi){

    }


}



body.addEventListener('mousemove', function (e) {
    if(e.target.classList[0] === 'slider-li'){
        mouseOverUl = true;
        mouseEvent = 'mouseover';
        isMouseOver();
        liIsOver(e.target);
        growImage(e.target);
    } else if(e.target.classList[0] !== 'slider-li'){
        mouseOverUl = false;
        mouseEvent = 'mouseout';
        isMouseOver();
    }
    
} );




