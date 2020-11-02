
// home loading page
let drapeWrap = document.querySelector('.drape');
let textDrape = document.querySelectorAll('.drape-text');
let homePage = document.querySelector('.homePage');
let sliderList = document.querySelectorAll('.sliderList');
let sliderImage = document.querySelector('.slider-img');

// home page

drapeWrap.addEventListener('click', function () {
    drapeWrap.classList.toggle('drapeUp');
    for(i = 0; i < textDrape.length; i++){
        textDrape[i].style.display = 'none';
    }
    
    homePage.style.display = 'block';
})


let pictures = ['vietnam.jpg', 'jordan.jpg', 'southafrica.jpeg', 'ecuador.jpg', 'australia.jpg'];

for( let x = 0; x < sliderList.length; x++){
    sliderList[x].addEventListener('mouseover', function () {
        sliderImage.style.backgroundImage = 'url(./images/' + pictures[x] + ')';
        sliderImage.classList.add('slider-img--on');

    });
    sliderList[x].addEventListener('mouseout', function () {
        sliderImage.classList.remove('slider-img--on');

    });
    

}
