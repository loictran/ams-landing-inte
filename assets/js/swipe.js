const swipe = {
    startingX: 0,
    startingY: 0,
    movingX: 0,
    movingY: 0,
    cardWrapper: null,
    cardWrapperContainer: null,
    cardWidth: 0,
    button: null,
    titlePremium: null,
    titleFree: null,

    init: function() {
        swipe.cardWrapper = document.querySelector('.card-compare-wrapper');
        swipe.cardWrapper.addEventListener('touchstart', swipe.swipeStart);
        swipe.cardWrapper.addEventListener('touchmove', swipe.swipeMove);
        swipe.cardWrapper.addEventListener('touchend', swipe.swipeEnd);

        swipe.cardWrapperContainer = document.querySelector('.card-compare-wrapper-container');
        swipe.cardWidth = document.querySelector('.card-compare').offsetWidth;

        swipe.button = document.querySelector('.card-selector-button');
        swipe.titlePremium = document.querySelectorAll('#card-selector-txt-premium');
        swipe.titleFree = document.querySelectorAll('#card-selector-txt-free');
     },
     swipeStart: function(e){
        startingX = e.touches[0].clientX ;
		startingY = e.touches[0].clientY ;
     },
     swipeMove: function(e){
        movingX = e.touches[0].clientX ;
		movingY = e.touches[0].clientY ;
     },
     swipeEnd: function(e){

        //SCROLL X :
        if(startingX+60 < movingX){
            //console.log('right');
            swipe.cardWrapperContainer.style.left = 0;
            swipe.animateButton();
            
        }   
        else if(startingX-60 > movingX){
            //console.log('left');
            swipe.cardWrapperContainer.style.left = - swipe.cardWidth + 'px';
            swipe.animateButton();
            
        }
        
        // SCROLL Y :
        // if(startingY+60 < movingY){
        //     console.log('down');
        // }   
        // else if(startingY-60 > movingY){
        // console.log('up');
        // }
    
     },
     animateButton: function() {
        if(swipe.button.style.left === '5px') {
            swipe.button.style.left = '145px';
            swipe.cardWrapperContainer.style.left = - swipe.cardWidth + 'px';
        } else {
            swipe.button.style.left = '5px';
            swipe.cardWrapperContainer.style.left = 0;
        }


        swipe.button.classList.toggle('card-selector-button-premium');
        swipe.button.classList.toggle('card-selector-button-free');

        swipe.titlePremium[0].classList.toggle('card-selector-txt-active');
        swipe.titleFree[0].classList.toggle('card-selector-txt-active');
     },

     
};
document.addEventListener('DOMContentLoaded', swipe.init);