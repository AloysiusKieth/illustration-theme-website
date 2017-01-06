$(document).ready(function()  {
  initGallery();
  mobileNav();
});

function mobileNav() {
  $('.menu-toggler').on('click', function(){

    var status = $(this).hasClass('is-open');
    if(status){ $('.menu-toggler, .mobile-site-nav').removeClass('is-open');$("#fadeIn").fadeIn(3000); }
    else { $('.menu-toggler, .mobile-site-nav').addClass('is-open'); }
  });
}

function initGallery() {
  $('.gallery').galereya({
    modifier:"gallery",
    disableSliderOnClick: true,
      load: function(next) {
          $.getJSON('images.json', function(data) {
              next(data);
          });
      }
  });
}
