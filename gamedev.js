$( document ).ready(function() {

	$("#goLeft1").click(function() {
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

	});

	$("#goRight2").click(function() {
		$("#exploreBody").css("background-image", "url('img/cave5.jpg')");
		$("#goStraight4").show();
		$("#goLeft2").show();
	});

	$("#goStraight4").click(function() {
		$("#exploreBody").css("background-image", "url('img/de1.jpg')");
		$("#goBack2").show();
	});

	$("#goRight-Straight3").click(function() {
		$("#exploreBody").css("background-image", "url('img/exploreRight3.jpg')");
		$("#goRight-Straight3").hide();
		$("#goRight-Right2").show();
	});

	$("#goRight-Right2").click(function() {
		$("#exploreBody").css("background-image", "url('img/explore2-goBack2.jpg')");
		$("#goRight-Right2").hide();
		$("#goBack1").show();
	});


	$("#goRight1").click(function() {
		$("#exploreBody").css("background-image", "url('img/cave2.jpg')");
		$("#goStraight3").show();
		$("#goLeft1").hide();
		$("#goRight1").hide();
	});

	$("#goStraight2").click(function() {
		$("#exploreBody").css("background-image", "url('img/mine1.jpg')");
		$("#goLeft2").hide();
		$("#goLeft3").show();
	});

	$("#goStraight1").click(function() {
		$("#exploreBody").css("background-image", "url('img/cave4.jpg')");
		$("#goLeft1").hide();
		$("#goRight1").hide();
		$("#goBack").show();
		$("#goRight2").show();
	});


	$("#goLeft2").click(function() {
		$("#exploreBody").css("background-image", "url('img/cave4.jpg')");
		$("#goLeft1").hide();
		$("#goRight1").hide();
		$("#goBack").show();
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

		
	});



});