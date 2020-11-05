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





function isMouseOver (li) {
    if(mouseEvent === 'mouseover'){
        drapeClass = drapeOpenClass;
    } else if (mouseEvent === 'mouseout'){
        drapeClass = drapeCloseClass;
    }
   
    return sliderDrape.classList = drapeClass;
}



function removeGrowImage () {
    for(let i = 0; i < sliderImg.length; i++){
        sliderImg[i].classList.remove('slider-image--grow');
    }
}



function lastLiGrowRemove (target) {
    if(sliderDrape.classList[1] == 'slider-drape--close'){
        for(let k = 0; k < sliderImg.length; k++){
            if(sliderImg[k].classList[1]){
                setTimeout(function (){
                sliderImg[k].classList.remove('slider-image--grow');
                }, 800);
                }else if(!sliderImg[k].classList[1]){
                continue;
            }else{
                return;
            }
        }
    } else{
        return;
    }
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
    lastLiGrowRemove(e.target);
    if(e.target.classList[0] === 'slider-li'){
        mouseOverUl = true;
        mouseEvent = 'mouseover';
        isMouseOver(e.target);
        liIsOver(e.target);
    } else if(e.target.classList[0] !== 'slider-li'){
        mouseOverUl = false;
        mouseEvent = 'mouseout';
        isMouseOver();

    }
    
} );




