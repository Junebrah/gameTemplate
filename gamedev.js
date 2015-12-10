$( document ).ready(function() {

	$("#goRight1").click(function() {
		$("#exploreBody").css("background-image", "url('img/cave3.jpg')");
		$("#goBack").hide();
		$("#goRight-Straight1").hide();
		$("#goRight-Right2").hide();
	});

	$("#goRight-Straight1").click(function() {
		$("#exploreBody").css("background-image", "url('img/exploreRight2.jpg')");
		$("#goRight-Straight1").hide();
		$("#goRight-Straight2").show(
	});

	$("#goRight-Straight2").click(function() {
		$("#exploreBody").css("background-image", "url('img/exploreRight3.jpg')");
		$("#goRight-Straight2").hide();
		$("#goRight-Straight3").show();
	});

	$("#goRight-Straight3").click(function() {
		$("#exploreBody").css("background-image", "url('img/exploreRight3.jpg')");
		$("#goRight-Straight3").hide();
		$("#goRight-Right2").show();
	});

	$("#goRight-Right2").click(function() {
		$("#exploreBody").css("background-image", "url('img/explore2-goBack2.jpg')");
		$("#goRight-Right2").hide();
		$("#goBack").show();
	});


	$("#goLeft1").click(function() {
		$("#exploreBody").css("background-image", "url('img/cave2.jpg')");
		$("#goStraight2").show();
		$("#goStraight1").hide();
		$("#goLeft1").hide();
		$("#goRight1").hide();
	});

	$("#Straight2").click(function() {
		$("#exploreBody").css("background-image", "url('img/mine1.jpg')");
		$("#goLeft2").hide();
		$("#goLeft3").show();
	});

	$("#goStraight1").click(function() {
		$("#exploreBody").css("background-image", "url('img/exploreLeft3.jpg')");
		$("#goLeft3").hide();
		$("#goBack").show();
	});


	$("#goBack").click(function() {
		$("#exploreBody").css("background-image", "url('img/openCave.jpg')");
		$("#goBack").hide();
		$("#goStraight1").show();
		$("#goStraight2").hide();
		$("#goRight1").show();
		$("#goLeft1").show();

		
	});



});