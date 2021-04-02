// set up initial count
let count = 0;

// get Elements
const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");
const toggleButton = document.querySelector('.sidebar-toggle');
const closeButton = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');
const activeSideLink = document.getElementById('side-link-active');
const main = document.querySelector('main');

// add EventListeners
buttons.forEach(function(btn){
  btn.addEventListener('click', function(e){
    const styles = e.target.classList;
    // check button type
    if(styles.contains('decrease')){
      count--;
    };
    if(styles.contains('reset')){
      count = 0;
    };
    if(styles.contains('increase')){
      count++;
    };

    // check count (over 0, equal to 0 or above 0)
    if(count > 0){
      value.classList.remove('red-count');
      value.classList.add('green-count');
    };
    if(count < 0){
      value.classList.remove('green-count');
      value.classList.add('red-count');
    };
    if(count === 0){
      value.classList.remove('green-count');
      value.classList.remove('red-count');
    };

    value.textContent = count;

  });
});

toggleButton.addEventListener('click', function(){
  sidebar.classList.toggle('show-sidebar');
});

closeButton.addEventListener('click', function(){
  sidebar.classList.remove('show-sidebar');
});

activeSideLink.addEventListener('click', function(){
  sidebar.classList.remove('show-sidebar');
});

main.addEventListener('click', function(){
  sidebar.classList.remove('show-sidebar');
});