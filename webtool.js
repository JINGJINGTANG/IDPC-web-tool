document.querySelector('#layerOne').addEventListener('click', toLayerTwo, false);
var modal = document.querySelector('#layerTwo').addEventListener('click', tolayerThree, false);
var back = document.querySelector('#layerTwo a');
back.addEventListener('click', getBack, false);

$(document).ready(function () {
	$('#layerTwo').hide();
});


function toLayerTwo(e) {
	if (e.target !== e.currentTarget) {
		$('#layerOne').toggle('slow');
		$('#layerTwo').fadeIn();
	}
}

function getBack() {
	$('#layerTwo').toggle();
	$('#layerOne').fadeIn();
}

function tolayerThree(e) {
	if (e.target !== e.currentTarget && e.target !== back) {
		$('#ex1').modal();
	}
}

$('#click').on('click', function() {
	var targetOffset = $('#wrapper').offset().top - 65;
	$('html, body').animate({scrollTop:targetOffset}, 800);

});

$('#navbar h2').on('click', function() {
	var targetOffset = $('#header').offset().top - 65;
	$('html, body').animate({scrollTop:targetOffset}, 800);
});

$(window).scroll(function() {
    if ($("#navbar").offset().top > 50) {
        $("#navbar").addClass("navbar_scroll");
    } else {
        $("#navbar").removeClass("navbar_scroll");
    }
});