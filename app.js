
// home loading page
let drapeWrap = document.querySelector('.drape');
let textDrape = document.querySelectorAll('.drape-text');
let homePage = document.querySelector('.homePage');
let sliderList = document.querySelectorAll('.sliderList');

// home page

drapeWrap.addEventListener('click', function () {
    drapeWrap.classList.toggle('drapeUp');
    for(i = 0; i < textDrape.length; i++){
        textDrape[i].style.display = 'none';
    }
    
    homePage.style.display = 'block';
})

// diapo picture 
// quand on passe sur le premier lien on voit la premiere photo
const pictures = ['vietnam.jpg', ]

sliderList.forEach(li => {
    li.addEventListener('mouseover' function () {
        for( i = 0; i < )
    })
    
});