const slider = {
    slider: null,
    buttons: null,
    lastClickDate: null,
    timer: null,
    currentSlide: 0,
    duration: 3000,
    
    init: function() {

        slider.slider = document.querySelector('.slider-testimonials');
        slider.buttons = document.querySelectorAll('.testimonials-bullets span');

        for(let button of slider.buttons) {
            button.addEventListener('click', slider.handleClick);
        }
        
        slider.start();
        slider.checkAutoRestart();
        
    },

    handleClick: function(e) {
        e.preventDefault();

        if(e.isTrusted) {
            const currentDate = new Date();
            slider.lastClickDate = currentDate.getTime();
            slider.stop();
        }    
        const clickedButton = e.currentTarget;
        let slideToDisplay = clickedButton.dataset.slideNumber;

        slider.displaySlide(slideToDisplay);
        slider.setCurrentButton(clickedButton);
    },
    displaySlide: function(slideNumber) {
        let slideWidth = slider.slider.offsetWidth;
        let horizontalScroll = slideWidth * slideNumber;
        slider.slider.style.left = - horizontalScroll + 'px';
    },
    setCurrentButton: function(clickedButton) {
        const currentButton = document.querySelector('.testimonials-bullets span.active');
        currentButton.classList.remove('active');
        clickedButton.classList.add('active');
        
    },
    start: function() {
        slider.timer = setInterval(
            function() {
                let newSlide = slider.currentSlide ++;
                let newSlideToDisplay = newSlide % slider.buttons.length;
                slider.buttons[newSlideToDisplay].click();
        }, slider.duration)
    },
    stop: function() {
        clearInterval(slider.timer);
    },
    checkAutoRestart: function() {
        setInterval(function(){
            const currentDate = new Date();
            const currentTimeStamp = currentDate.getTime();
            if(slider.lastClickDate){
                let elapsed = currentTimeStamp - slider.lastClickDate;
                console.log(elapsed);

                if(elapsed > 1000) {
                    slider.lastClickDate = null;
                    slider.start();
                }
            }
        }, 500);        
    }
     
};
document.addEventListener('DOMContentLoaded', slider.init);



