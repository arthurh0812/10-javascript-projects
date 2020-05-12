//using selectors inside the element

const questions = document.querySelectorAll('.question');

questions.forEach(function(question){
    const button = question.querySelector('.question-btn');
    button.addEventListener('click', function(){
        questions.forEach(function(item){
            if(item !== question){
                item.classList.remove('show-text');
            };
        });
        question.classList.toggle('show-text');
    });
});




// traversing the dom

// const buttons = document.querySelectorAll('.question-btn');

// buttons.forEach(function(button){
//     button.addEventListener('click', function(e){
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text');
//     });
// });