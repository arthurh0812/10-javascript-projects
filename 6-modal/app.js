// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const modalButton = document.querySelector('.modal-btn');
const closeButton = document.querySelector('.close-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const toggleButton = document.querySelector('.sidebar-toggle');
const sidebarCloseButton = document.querySelector('.side-close-btn');
const sidebar = document.querySelector('.sidebar');
const activeSideLink = document.getElementById('side-link-active');
const main = document.querySelector('.hero');
const modal = document.querySelector('.modal-overlay');

modalButton.addEventListener('click', function(){
    modalOverlay.classList.add('open-modal');
});

closeButton.addEventListener('click', function(){
    modalOverlay.classList.remove('open-modal');
});

toggleButton.addEventListener('click', function(){
    sidebar.classList.toggle('show-sidebar');
});

sidebarCloseButton.addEventListener('click', function(){
    sidebar.classList.remove('show-sidebar');
});

activeSideLink.addEventListener('click', function(){
    sidebar.classList.remove('show-sidebar');
  });
  
main.addEventListener('click', function(){
    sidebar.classList.remove('show-sidebar');
  });

modal.addEventListener('click', function(){
    sidebar.classList.remove('show-sidebar');
});
