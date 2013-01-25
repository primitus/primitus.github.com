$(document).ready(function(){
	
	// Navigation
	// =============================== 	
	$("nav.nav-right-home a").click(function(){ 
		$("#home-section").hide();
		$("#aboutus-section").show(); 
	});
	$("nav.nav-left-home a").click(function(){ 
		$("#home-section").hide();
		$("#jobs-section").show();
	});
	$("nav.nav-right-aboutus a").click(function(){ 
		$("#aboutus-section").hide();
		$("#products-section").show(); 
	});
	$("nav.nav-left-aboutus a").click(function(){ 
		$("#aboutus-section").hide();
		$("#home-section").show();
	});
	$("nav.nav-right-products a").click(function(){ 
		$("#products-section").hide();
		$("#works-section").show(); 
	});
	$("nav.nav-left-products a").click(function(){ 
		$("#products-section").hide();
		$("#aboutus-section").show();
	});
	$("nav.nav-right-works a").click(function(){ 
		$("#works-section").hide();
		$("#jobs-section").show(); 
	});
	$("nav.nav-left-works a").click(function(){ 
		$("#works-section").hide();
		$("#products-section").show();
	});
	$("nav.nav-right-jobs a").click(function(){ 
		$("#jobs-section").hide();
		$("#home-section").show(); 
	});
	$("nav.nav-left-jobs a").click(function(){ 
		$("#jobs-section").hide();
		$("#works-section").show();
	});
	
	// Navigation icons on home page
	// ===============================	
	$("a.icon-aboutus").click(function(){ 
		$("#home-section").hide();
		$("#aboutus-section").show(); 
		evt.preventDefault();
	});
	$("a.icon-products").click(function(){ 
		$("#home-section").hide();
		$("#products-section").show(); 
		evt.preventDefault();
	});
	$("a.icon-works").click(function(){ 
		$("#home-section").hide();
		$("#works-section").show(); 
		evt.preventDefault();
	});
	$("a.icon-jobs").click(function(){ 
		$("#home-section").hide();
		$("#jobs-section").show(); 
		evt.preventDefault();
	});
	
	// Navigation page-circle
	// ===============================	
	// home page
	$("a.home-circle-aboutus").click(function(){ 
		$("#home-section").hide();
		$("#aboutus-section").show(); 
	});
	$("a.home-circle-products").click(function(){ 
		$("#home-section").hide();
		$("#products-section").show(); 
	});
	$("a.home-circle-works").click(function(){ 
		$("#home-section").hide();
		$("#works-section").show(); 
	});
	$("a.home-circle-jobs").click(function(){ 
		$("#home-section").hide();
		$("#jobs-section").show(); 
	});
	// about us page
	$("a.aboutus-circle-home").click(function(){ 
		$("#aboutus-section").hide();
		$("#home-section").show(); 
	});
	$("a.aboutus-circle-products").click(function(){ 
		$("#aboutus-section").hide();
		$("#products-section").show(); 
	});
	$("a.aboutus-circle-works").click(function(){ 
		$("#aboutus-section").hide();
		$("#works-section").show(); 
	});
	$("a.aboutus-circle-jobs").click(function(){ 
		$("#aboutus-section").hide();
		$("#jobs-section").show(); 
	});
	// products page
	$("a.products-circle-home").click(function(){ 
		$("#products-section").hide();
		$("#home-section").show(); 
	});
	$("a.products-circle-aboutus").click(function(){ 
		$("#products-section").hide();
		$("#aboutus-section").show(); 
	});
	$("a.products-circle-works").click(function(){ 
		$("#products-section").hide();
		$("#works-section").show(); 
	});
	$("a.products-circle-jobs").click(function(){ 
		$("#products-section").hide();
		$("#jobs-section").show(); 
	});
	// works page
	$("a.works-circle-home").click(function(){ 
		$("#works-section").hide();
		$("#home-section").show(); 
	});
	$("a.works-circle-aboutus").click(function(){ 
		$("#works-section").hide();
		$("#aboutus-section").show(); 
	});
	$("a.works-circle-products").click(function(){ 
		$("#works-section").hide();
		$("#products-section").show(); 
	});
	$("a.works-circle-jobs").click(function(){ 
		$("#works-section").hide();
		$("#jobs-section").show(); 
	});
	// jobs page
	$("a.jobs-circle-home").click(function(){ 
		$("#jobs-section").hide();
		$("#home-section").show(); 
	});
	$("a.jobs-circle-aboutus").click(function(){ 
		$("#jobs-section").hide();
		$("#aboutus-section").show(); 
	});
	$("a.jobs-circle-products").click(function(){ 
		$("#jobs-section").hide();
		$("#products-section").show(); 
	});
	$("a.jobs-circle-works").click(function(){ 
		$("#jobs-section").hide();
		$("#works-section").show(); 
	});
	
	// // footer
	// if ($(location).attr("href")) {
	// 		$("a.footer-home").click(function(){ 
	// 		});
	// 		$("a.footer-aboutus").click(function(){ 
	// 			$("#home-section").hide();
	// 			$("#aboutus-section").show();
	// 			evt.preventDefault();
	// 		});
	// 		$("a.footer-products").click(function(){ 
	// 			$("#home-section").hide();
	// 			$("#products-section").show(); 
	// 			evt.preventDefault();
	// 		});
	// 		$("a.footer-works").click(function(){ 
	// 			$("#home-section").hide();
	// 			$("#works-section").show(); 
	// 			evt.preventDefault();
	// 		});
	// 		$("a.footer-jobs").click(function(){ 
	// 			$("#home-section").hide();
	// 			$("#jobs-section").show(); 
	// 			evt.preventDefault();
	// 		});
	// }
	// if ($(location).attr("href", "#home")) {
	// 		$("a.footer-home").click(function(){ 
	// 		});
	// 		$("a.footer-aboutus").click(function(){ 
	// 			$("#home-section").hide();
	// 			$("#aboutus-section").show();
	// 			evt.preventDefault();
	// 		});
	// 		$("a.footer-products").click(function(){ 
	// 			$("#home-section").hide();
	// 			$("#products-section").show(); 
	// 			evt.preventDefault();
	// 		});
	// 		$("a.footer-works").click(function(){ 
	// 			$("#home-section").hide();
	// 			$("#works-section").show(); 
	// 			evt.preventDefault();
	// 		});
	// 		$("a.footer-jobs").click(function(){ 
	// 			$("#home-section").hide();
	// 			$("#jobs-section").show(); 
	// 			evt.preventDefault();
	// 		});
	// }
	// if ($(location).attr("href", "#aboutus")) {
	// 		$("a.footer-home").click(function(){ 
	// 			$("#aboutus-section").hide();
	// 			$("#home-section").show(); 
	// 			evt.preventDefault();
	// 		});
	// 		$("a.footer-aboutus").click(function(){ 
	// 		});
	// 		$("a.footer-products").click(function(){ 
	// 			$("#aboutus-section").hide();
	// 			$("#products-section").show(); 
	// 			evt.preventDefault();
	// 		});
	// 		$("a.footer-works").click(function(){ 
	// 			$("#aboutus-section").hide();
	// 			$("#works-section").show(); 
	// 			evt.preventDefault();
	// 		});
	// 		$("a.footer-jobs").click(function(){ 
	// 			$("#aboutus-section").hide();
	// 			$("#jobs-section").show(); 
	// 			evt.preventDefault();
	// 		});
	// }
	// if ($(location).attr("href", "#products")) {
	// 		$("a.footer-home").click(function(){ 
	// 			$("#products-section").hide();
	// 			$("#home-section").show(); 
	// 			evt.preventDefault();
	// 		});
	// 		$("a.footer-aboutus").click(function(){ 
	// 			$("#products-section").hide();
	// 			$("#aboutus-section").show();
	// 			evt.preventDefault();
	// 		});
	// 		$("a.footer-products").click(function(){ 
	// 		});
	// 		$("a.footer-works").click(function(){ 
	// 			$("#products-section").hide();
	// 			$("#works-section").show(); 
	// 			evt.preventDefault();
	// 		});
	// 		$("a.footer-jobs").click(function(){ 
	// 			$("#products-section").hide();
	// 			$("#jobs-section").show(); 
	// 			evt.preventDefault();
	// 		});
	// }
	// if ($(location).attr("href", "#works")) {
	// 		$("a.footer-home").click(function(){ 
	// 			$("#works-section").hide();
	// 			$("#home-section").show(); 
	// 			evt.preventDefault();
	// 		});
	// 		$("a.footer-aboutus").click(function(){ 
	// 			$("#works-section").hide();
	// 			$("#aboutus-section").show();
	// 			evt.preventDefault();
	// 		});
	// 		$("a.footer-products").click(function(){ 
	// 			$("#works-section").hide();
	// 			$("#products-section").show(); 
	// 			evt.preventDefault();
	// 		});
	// 		$("a.footer-works").click(function(){ 
	// 		});
	// 		$("a.footer-jobs").click(function(){ 
	// 			$("#works-section").hide();
	// 			$("#jobs-section").show(); 
	// 			evt.preventDefault();
	// 		});
	// }
	// if ($(location).attr("href", "#jobs")) {
	// 		$("a.footer-home").click(function(){ 
	// 			$("#jobs-section").hide();
	// 			$("#home-section").show();
	// 			evt.preventDefault(); 
	// 		});
	// 		$("a.footer-aboutus").click(function(){ 
	// 			$("#jobs-section").hide();
	// 			$("#aboutus-section").show();
	// 			evt.preventDefault();
	// 		});
	// 		$("a.footer-products").click(function(){ 
	// 			$("#jobs-section").hide();
	// 			$("#products-section").show(); 
	// 			evt.preventDefault();
	// 		});
	// 		$("a.footer-works").click(function(){ 
	// 			$("#jobs-section").hide();
	// 			$("#works-section").show(); 
	// 			evt.preventDefault();
	// 		});
	// 		$("a.footer-jobs").click(function(){ 
	// 		});
	// }
		
	// Click and Hover events for thumbnail list on Products page
	// ===============================
	
	$("div.products-bg #thumbs ul li:first").addClass('active');
	$("div.products-bg #thumbs ul li").click(function(){ 
		//Set Variables
		var imgTitle = $(this).find('a').attr("href"); //Get Main Image URL
		
		if ($(this).is(".active")) {  //If it's already active, then...
			return false; // Don't click through
		} else {
				$("#screen img").attr({ src: imgTitle});
		}
		
		$("div.products-bg #thumbs ul li").removeClass('active'); //Remove class of 'active' on all lists
		$(this).addClass('active');  //add class of 'active' on this list only
		return false;
		
	});
	
	// Click and Hover events for thumbnail list on Home page
	// ===============================
	
	// $("div.home-bg ul.home-nav li:first").addClass('active');
	$("div.home-bg ul.home-nav li").mouseover(function(){ 
		//Set Variables
		$navTitle = $(this).find('a').attr("title"); //Get Main Image URL
		
		$("div#home-nav-text").text($navTitle);

		return false;
		
	});
	$("div.home-bg ul.home-nav li").mouseout(function(){ 
			
		$("div#home-nav-text").text('');

		return false;
		
	});

	// Tool tips for circle pagination
	// ===============================
	
	$("a[rel=twipsy]").twipsy({
    live: true
  });
	
	// Popover for members bio
	// ===============================
	$("a[rel=popover]")
    .popover({
      offset: 5,
			placement: 'above',
			html: true
    })
    .click(function(e) {
      e.preventDefault()
  });
	
	
	// Fade in home page Logo
	// ===============================	
	$('#page_effect').fadeIn(2000);
	
	// Fade in nav buttons when mouse move
	// ===============================

	// attach event handler
	document.body.onmousemove = function(){
	  $('#left-nav').fadeIn(1000);      // 1000ms -> 1s
		$('#right-nav').fadeIn(1000);      // 1000ms -> 1s
	  this.onmousemove = null; // remove to only fade in once!
	};

	// sets the opacity of an element (x-browser)
	function setOpacity( obj, value ) {
	  if ( obj ) {
	    obj.style.opacity = value / 100;
	    obj.style.filter  = 'alpha(opacity=' + value + ')';
	    obj.style.zoom    = 1;
	  }
	}

	// makes an element to fade in
	function fadeIn( dom, interval, delay ) {

	      interval  = interval || 1000;
	      delay     = delay    || 10;

	  var opacity   = 0,
	      start     = Number(new Date()),
	      op_per_ms =  100 / interval;

	  if ( typeof dom === "string" ) {
	    dom = document.getElementById( dom );
	  }

	  function step() {

	    var now     = Number(new Date()),
	        elapsed = now - start;
	        opacity = elapsed * op_per_ms;

	    setOpacity( dom, opacity );

	    if ( elapsed < interval )
	      setTimeout( step, delay );
	    else
	      setOpacity( dom, 100 );
	  }

	  setTimeout( step, delay );
	};
	
	

	
});

