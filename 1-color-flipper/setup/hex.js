const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const button = document.getElementById('btn');
const color = document.querySelector('.color');
const toggleButton = document.querySelector('.sidebar-toggle');
const closeButton = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');
const activeSideLink = document.getElementById('side-link-active');

button.addEventListener('click', function() {
  let hexColor = "#";
  for(let i = 0; i < 6; i++){
    hexColor += hex[getRandom()];
  };
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

function getRandom() {
  return Math.floor(Math.random()*hex.length);
}

toggleButton.addEventListener('click', function(){
  sidebar.classList.toggle('show-sidebar');
});

closeButton.addEventListener('click', function(){
  sidebar.classList.remove('show-sidebar');
});

activeSideLink.addEventListener('click', function(){
  sidebar.classList.remove('show-sidebar');
});