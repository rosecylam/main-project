$(document).ready(function() {

	// Animate on Scroll settings
    AOS.init({
      // offset: 300,
      duration: 1500,
    });

    /* NAV BAR */

	// When the user scrolls the page, execute stickyNav
	window.onscroll = function() {
		stickyNav()
	};

	// Get the navbar
	var navbar = document.getElementById("navbar");

	// Get the offset position of the navbar
	var sticky = navbar.offsetTop;

	// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
	function stickyNav() {
	  if (window.pageYOffset >= sticky) {
	    navbar.classList.add("sticky")
	  } else {
	    navbar.classList.remove("sticky");
	  }
	}

	/* PROGRAM INFO vertical tabs */
		
	var items = $('#tabs>ul>li').each(function() {
        $(this).click(function() {
            //remove previous class and add it to clicked tab
            items.addClass('grey');
            $(this).removeClass('grey');

            //hide all content divs and show current one
            $('#tabs>div.tab-content').hide().eq(items.index($(this))).fadeIn();

            window.location.hash = $(this).attr('tab');
        });
    });

    if (location.hash) {
        showTab(location.hash);
    }
    else {
        showTab("tab1");
    }

    function showTab(tab) {
        $("#tabs ul li:[tab*=" + tab + "]").click();
    }

});