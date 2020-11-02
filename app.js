let drapeWrap = document.querySelector('.drape');
let textDrape = document.querySelectorAll('.drape-text');
let loaded = document.querySelector('.loaded');

drapeWrap.addEventListener('click', function () {
    drapeWrap.classList.toggle('drapeUp');
    for(i = 0; i < textDrape.length; i++){
        textDrape[i].style.display = 'none';
    }
    
    loaded.style.display = 'block';
})