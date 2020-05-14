// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

// elements of sidebar
const toggleButton = document.querySelector('.sidebar-toggle');
const closeButton = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');
const activeSideLink = document.getElementById('side-link-active');
const header = document.querySelector('header');

// EventListeners of sidebar
toggleButton.addEventListener('click', function(){
    sidebar.classList.toggle('show-sidebar');
});

closeButton.addEventListener('click', function(){
    sidebar.classList.remove('show-sidebar');
});

activeSideLink.addEventListener('click', function(){
    sidebar.classList.remove('show-sidebar');
  });

header.addEventListener('click', function(){
    sidebar.classList.remove('show-sidebar');
  });