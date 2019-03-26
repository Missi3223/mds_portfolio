// On ready
$(document).ready(function () {
  // Floating Action Button - left - on click only
  $(".fixed-action-btn").floatingActionButton({
      direction: "left",
      hoverEnabled: false
  });
  // Parallax call
  $(".parallax").parallax();
  // Sidenav call
  $(".sidenav").sidenav();


});

