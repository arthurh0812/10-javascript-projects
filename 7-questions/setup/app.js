//using selectors inside the element

const questions = document.querySelectorAll('.question');
const toggleButton = document.querySelector('.sidebar-toggle');
const closeButton = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

toggleButton.addEventListener('click', function(){
    sidebar.classList.toggle('show-sidebar');
});

closeButton.addEventListener('click', function(){
    sidebar.classList.remove('show-sidebar');
});

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