let body = document.querySelector('body');
let sliderImg = document.querySelectorAll('.slider-image');
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
        removeGrowImage();
    
    }
    return sliderDrape.classList = drapeClass;
}

function removeGrowImage () {
    for(i = 0; i < sliderImg.length; i++){
        sliderImg[i].classList.remove('slider-image--grow');
    }
    return true;
}

function liIsOver (li) {
    removeGrowImage();
    for(x = 0; x < sliderLi.length; x++){
            if(li == sliderLi[x]){
                sliderImg[x].classList.add('slider-image--grow');
            }else{
                continue;
            }
        }
}

body.addEventListener('mousemove', function (e) {
    if(e.target.classList[0] === 'slider-li'){
        mouseOverUl = true;
        mouseEvent = 'mouseover';
        isMouseOver();
        liIsOver(e.target);
    } else if(e.target.classList[0] !== 'slider-li'){
        mouseOverUl = false;
        mouseEvent = 'mouseout';
        isMouseOver();
    }
    
} );




