jQuery.noConflict();
(function($){
	$(document).ready(function(){
		var images = ['fat-albert.jpg','beach.jpg'];
		var i = 0;
		var timeoutVar;
		var nowDate = new Date();
		var today = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate(), 0, 0, 0, 0);

		function changeBackground() {
			clearTimeout(timeoutVar);

			$('html').css('background-image', function() {
				if (i >= images.length) {
					i=0;
				}
				return 'url(img/' + images[i++] + ')';      
			});
			
			timeoutVar = setTimeout(changeBackground, 3000);
		}

		changeBackground();
		
		if (!$.fn.bootstrapDP && $.fn.datepicker && $.fn.datepicker.noConflict) {
			var datepicker = $.fn.datepicker.noConflict();
			$.fn.bootstrapDP = datepicker;
		  }
  	
		$('#bdpDepartDate').bootstrapDP({
		  startDate: today,
		  autoclose: true
		});	
		
		$(".radio-inline").click(function() {
			$("#txtReturnDate").attr("disabled", true);
			if ($("input[name=rdbtnOneWayRound]:checked").val() == "roundtrip") {
				$("#txtReturnDate").attr("disabled", false);
				$('#bdpReturnDate').bootstrapDP({
				  startDate: today,
				  autoclose: true
				});
			}
		});
	
	$('#flightForm').bootstrapValidator({
        excluded: [':enabled'],
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            txtOrigin: {
                validators: {
                    notEmpty: {
                        message: 'The first name is required and cannot be empty'
                    }
                }
            }
		}
    });
	
	$('#bdpCheckIn,#bdpCheckOut').bootstrapDP({
		  startDate: today,
		  autoclose: true
		});
	
	$('.carousel[data-type="multi"] .item').each(function(){
		var next = $(this).next();
		if (!next.length) {
			next = $(this).siblings(':first');
		}
		next.children(':first-child').clone().appendTo($(this));
	  
		for (var i=0;i<2;i++) {
			next=next.next();
			if (!next.length) {
				next = $(this).siblings(':first');
			}
			next.children(':first-child').clone().appendTo($(this));
		}
	});
    
	var availableOrigDest = [
      "India",
	  "United Arab Emirates",
      "United Kingdom",
      "United States"
    ];
    $( "#availOrigins,#availDest" ).autocomplete({
      source: availableOrigDest
    });
	
	var availableCities = [
      "Dubai",
	  "Mumbai",
      "Delhi",
      "New York"
    ];
    $( "#availCity" ).autocomplete({
      source: availableCities
    });
	
	});
})(jQuery);
