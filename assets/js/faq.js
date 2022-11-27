const faq = {
    questions: null,
    buttons: null,
    verticals: null,
    currentButton: null,
    currentAnswer: null,
    answers: null,
    
    init: function() {

        faq.questions = document.querySelectorAll('.question');
        for(let question of faq.questions) {
            question.addEventListener('click', faq.handleClick);
        }  

     },

     handleClick: function(e) {
        faq.currentButton = e.currentTarget.querySelector('.question-title-button').querySelector('.display-button');

        faq.setButtonsBackToInitialPosition();
        faq.setAnswersHeightToZero();
        faq.animateButton(e);
        faq.openHideContent(e);
     },
     openHideContent: function(e) {
        faq.currentAnswer = faq.currentButton.parentNode.parentNode.querySelector('.question-answer');
        
        if(faq.currentAnswer.offsetHeight == 0) {    
            faq.currentAnswer.classList.add('question-answer-ative');
        } else {
            faq.setAnswersHeightToZero();
            faq.setButtonsBackToInitialPosition();
        }
     },
     
     animateButton: function(e) {
        faq.currentButton.style.transform = 'rotate(180deg)';
        faq.currentButton.querySelector('#vertical').style.transform = 'scale(0)';
     },

     setAnswersHeightToZero: function() {
        faq.answers = document.querySelectorAll('.question-answer');
        for(let answer of faq.answers) {
            answer.classList.remove('question-answer-ative');
        }
     },

     setButtonsBackToInitialPosition: function() {
        faq.buttons = document.querySelectorAll('.display-button');
        for(let button of faq.buttons) {
            button.removeAttribute('style');
        }
        faq.verticals = document.querySelectorAll('#vertical');
        for(let vertical of faq.verticals) {
            vertical.removeAttribute('style');
        }
     }
     
};
document.addEventListener('DOMContentLoaded', faq.init);