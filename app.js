let body = document.querySelector('body');
let sliderDrape = document.querySelector('.slider-drape');
let sliderUl = document.querySelector('.slider-ul');
let sliderLi = document.querySelectorAll('.slider-li');


let mouseOverUl;
let drapeClass;
let drapeClassOff = 'slider-drape';
let drapeClassOn = drapeClassOff + " slider-drape--on";
let mouseEvent = '';

function isMouseOver () {
    if(mouseEvent === 'mouseover'){
        drapeClass = drapeClassOn;
    } else if (mouseEvent === 'mouseout'){
        drapeClass = drapeClassOff;
    }
    return sliderDrape.classList = drapeClass;
}
console.log(sliderUl);

body.addEventListener('mousemove', function (e) {
    if(e.target.classList[0] === 'slider-li'){
        console.log('true');
        mouseOverUl = true;
        mouseEvent = 'mouseover';
    } else if(e.target.classList[0] !== 'slider-li'){
        mouseOverUl = false;
        mouseEvent = 'mouseout';
    }
    sliderUl.addEventListener( mouseEvent, function () {
        isMouseOver();
    })
    console.log(sliderDrape);
} );




