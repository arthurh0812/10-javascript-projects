// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

// elements of sidebar
const toggleButton = document.querySelector('.sidebar-toggle');
const closeButton = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');
const activeSideLink = document.getElementById('side-link-active');
const main = document.querySelector('#main');

// elements of video
const videoButton = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');

// preloader
const preloader = document.querySelector('.preloader');

// EventListeners of video
videoButton.addEventListener('click', function(){
  if(!videoButton.classList.contains('slide')){
    videoButton.classList.add('slide');
    video.pause();
  }
  else {
    videoButton.classList.remove('slide');
    video.play();
  }
});

// EventListener for preloader
window.addEventListener('load', function(){
  preloader.classList.add('hide-preloader');
});

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

main.addEventListener('click', function(){
    sidebar.classList.remove('show-sidebar');
  });