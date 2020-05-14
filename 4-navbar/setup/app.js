// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.links');
const toggleButton = document.querySelector('.sidebar-toggle');
const closeButton = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');
const activeSideLink = document.getElementById('side-link-active');
const main = document.querySelector('main');
const activeLink = document.getElementById('active');

// EventListeners
navToggle.addEventListener('click', function(){
  navToggle.classList.toggle('nav-toggle-pressed');
  navLinks.classList.toggle('show-links');
})

activeLink.addEventListener('click', function(){
  navToggle.classList.remove('nav-toggle-pressed');
  navLinks.classList.remove('show-links');
})

// Sidebar EventListeners
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