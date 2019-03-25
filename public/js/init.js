
 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, options);
  });

(function($){
	$(function(){

	  $('.sidenav').sidenav();
	  $('.parallax').parallax();

	}); // end of document ready
  })(jQuery);