$( document ).ready(function() {

	$("#goRight1").click(function() {
		$("#exploreBody").css("background-image", "url('img/cave3.jpg')");
		$("#goBack").hide();
		$("#goRight1").hide();
		$("#goLeft1").hide();
		$("#goStraight2").show();


	});

	$("#goStraight3").click(function() {
		$("#exploreBody").css("background-image", "url('img/cave5.jpg')");
		$("#goStraight4").show();
		$("#goLeft2").show();
		$("#goRight2").hide();
		$("#goStraight1").hide();

	});

	$("#goRight2").click(function() {
		$("#exploreBody").css("background-image", "url('img/cave5.jpg')");
		$("#goStraight4").show();
		$("#goLeft2").show();
		$("#goRight2").hide();
		$("#goRight1").hide();
		$("#goStraight1").hide();
	});

	$("#goStraight4").click(function() {
		$("#exploreBody").css("background-image", "url('img/de1.gif')");
		$("#goBack2").show();
		$("#goLeft2").hide();
		$("#goLeft1").hide();
		$("#goRight1").hide();
		$("#goRight2").hide();
		$("#goStraight1").hide();
		$("#goStraight2").hide();
		$("#goStraight3").hide();
		$("#goStraight4").hide();
	});

	$("#goStraight5").click(function() {
		$("#exploreBody").css("background-image", "url('img/de2.gif')");
		$("#goLeft2").hide();
		$("#goLeft1").hide();
		$("#goRight1").hide();
		$("#goRight2").hide();
		$("#goStraight1").hide();
		$("#goStraight2").hide();
		$("#goStraight3").hide();
		$("#goStraight4").hide();
		$("#goBack1").show();
	});

	$("#goRight-Right2").click(function() {
		$("#exploreBody").css("background-image", "url('img/explore2-goBack2.jpg')");
		$("#goRight-Right2").hide();
		$("#goBack1").hide();
	});


	$("#goLeft1").click(function() {
		$("#exploreBody").css("background-image", "url('img/cave2.jpg')");
		$("#goStraight2").show();
		$("#goLeft1").hide();
		$("#goRight1").hide();
	});

	$("#goStraight2").click(function() {
		$("#exploreBody").css("background-image", "url('img/mine1.jpg')");
		$("#goLeft2").hide();
		$("#goLeft3").show();
		$("#goStraight5").show();

	});

	$("#goStraight1").click(function() {
		$("#exploreBody").css("background-image", "url('img/cave4.jpg')");
		$("#goLeft1").hide();
		$("#goRight1").hide();
		$("#goRight2").show();
	});


	$("#goLeft2").click(function() {
		$("#exploreBody").css("background-image", "url('img/cave4.jpg')");
		$("#goLeft1").hide();
		$("#goLeft2").hide();
		$("#goRight1").hide();
		$("#goRight2").show();

	});

	$("#goBack1").click(function() {
		$("#exploreBody").css("background-image", "url('img/openCave.jpg')");
		$("#goBack1").hide();
		$("#goBack2").hide();
		$("#goStraight1").show();
		$("#goStraight2").hide();
		$("#goStraight3").hide();
		$("#goStraight4").hide();
		$("#goRight1").show();
		$("#goLeft1").show();
		$("#goLeft2").hide();

	});

	$("#goBack2").click(function() {
		$("#exploreBody").css("background-image", "url('img/openCave.jpg')");
		$("#goBack1").hide();
		$("#goBack2").hide();
		$("#goStraight1").show();
		$("#goStraight2").hide();
		$("#goStraight3").hide();
		$("#goStraight4").hide();
		$("#goRight1").show();
		$("#goLeft1").show();
		$("#goLeft2").hide();

		
	});



});