$(document).ready(function(){

// banner slider initialization
$('.banner-slider').slick({
dots: false,
infinite: false,
speed: 1000
});

// onscroll add class
var $header = $('.header-section'),
scrollClass = 'on-scroll',
activateAtY = 10;

function deactivateHeader() {
if (!$header.hasClass(scrollClass)) {
  $header.addClass(scrollClass);
}
}

function activateHeader() {
if ($header.hasClass(scrollClass)) {
  $header.removeClass(scrollClass);
}
}

$(window).scroll(function() {
if($(window).scrollTop() > activateAtY) {
  deactivateHeader();
} else {
  activateHeader();
}
});


// for smooth scroll
$("a[href^='#']").click(function() { 
if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')  
|| location.hostname == this.hostname) { 

var target = $(this.hash); 
target = target.length ? target : $('[name=' + this.hash.slice(1) +']'); 
var scrollto = target.offset().top - 67; // minus fixed header height 
   if (target.length) { 
     $('html,body').animate({ 
     scrollTop: scrollto 
    }, 1000); 
    return false; 
} 
} 
});

});


/* ----------------------- Animation  JS --------------- */


$(document).ready(function(){
var parallaxSpeed = 1; 
var $img = $('.parallax-scroll');
$img.on('load', function(){
  $('.parallax-scroll').each(function(){
    var $element = $(this);
    var $win = $(window);
    function percentageSeen () {
      var viewportHeight = $(window).height(),
          scrollTop = $win.scrollTop(),
          elementOffsetTop = $element.offset().top,
          elementHeight = $element.height();
      if (elementOffsetTop > (scrollTop + viewportHeight)) {
        return 0;
      } else if ((elementOffsetTop + elementHeight) < scrollTop) {
        return 100;
      } else {
        var distance = (scrollTop + viewportHeight) - elementOffsetTop;
        var percentage = distance / ((viewportHeight + elementHeight) / 100);
        percentage = Math.round(percentage);
        return percentage;
      }
    }
    var margin = ($element.height() / 2) * (percentageSeen() / 100);
    margin = (($element.height() / 4) - margin) * parallaxSpeed
  //  $(this).find('img').css('transform', 'translate(' + margin +', 0 )' )
      $(this).css('transform', 'translate3d(0px, '+margin+'px, 0px)' )
    
    
  });
});
$(window).on('scroll', function () {
  $('.parallax-scroll').each(function(){
    var $element = $(this);
    var $win = $(window);
    function percentageSeen () {
      var viewportHeight = $(window).height(),
          scrollTop = $win.scrollTop(),
          elementOffsetTop = $element.offset().top,
          elementHeight = $element.height();
      if (elementOffsetTop > (scrollTop + viewportHeight)) {
        return 0;
      } else if ((elementOffsetTop + elementHeight) < scrollTop) {
        return 100;
      } else {
        var distance = (scrollTop + viewportHeight) - elementOffsetTop;
        var percentage = distance / ((viewportHeight + elementHeight) / 100);
        percentage = Math.round(percentage);
        return percentage;
      }
    }
    var margin = ($element.height() / 2) * (percentageSeen() / 100);
    margin = (($element.height() / 4) - margin) * parallaxSpeed
   // $(this).find('img').css('margin-top', margin)
    $(this).css('transform', 'translate3d(0px, '+margin+'px, 0px)' )
  })
}); 
});  
