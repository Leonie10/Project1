let drapeWrap = document.querySelector('.drape');
let textDrape = document.querySelectorAll('.drape-text');
drapeWrap.addEventListener('click', function () {
    drapeWrap.classList.toggle('drapeUp');
    for(i = 0; i < textDrape.length; i++){
        textDrape[i].classList.toggle('drape-textUp');

    }
})