$("document").ready(function(){
	s1_diply = true
	s2_diply = false
	$(".section1_show").click(function() {
		if (s2_diply == true) {
			$("#section2").fadeOut(100);
			s2_diply = false
		}

		$("#section1").fadeIn(100);
		s1_diply = true;
	});

	$(".section2_show").click(function() {
		if (s1_diply == true) {
			$("#section1").fadeOut(100);
			s1_diply = false
		}

		$("#section2").fadeIn(100);
		s2_diply = true;
	});

});