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

// EventListeners
navToggle.addEventListener('click', function(){
  navToggle.classList.toggle('nav-toggle-pressed');
  navLinks.classList.toggle('show-links');
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