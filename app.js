let body = document.querySelector('body');
let sliderDrape = document.querySelector('.slider-drape');
let sliderUl = document.querySelector('.slider-ul');
let sliderLi = document.querySelectorAll('.slider-li');


let mouseOverUl;
let drapeClass;
let drapeClassOff = 'slider-drape';
let drapeOpenClass = drapeClassOff + " slider-drape--open";
let drapeCloseClass = drapeClassOff + " slider-drape--close";
let mouseEvent = '';

function isMouseOver () {
    if(mouseEvent === 'mouseover'){
        drapeClass = drapeOpenClass;
    } else if (mouseEvent === 'mouseout'){
        drapeClass = drapeCloseClass;
    }
    return sliderDrape.classList = drapeClass;
}

body.addEventListener('mousemove', function (e) {
    if(e.target.classList[0] === 'slider-li'){
        mouseOverUl = true;
        mouseEvent = 'mouseover';
        isMouseOver();
    } else if(e.target.classList[0] !== 'slider-li'){
        mouseOverUl = false;
        mouseEvent = 'mouseout';
        isMouseOver();
    }
    
    console.log(sliderDrape);
} );




