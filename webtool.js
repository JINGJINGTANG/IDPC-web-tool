var idpc = angular.module('idpc', [])
	.controller('mainCtrl', function($scope) {
		$scope.variables = ['Policies & Procedures', 'Team Composition', 'Provider Remuneration', 'Team Funding', 'Team Governance'];
		$scope.outcomes = ['Team Process', 'Health Services Process', 'Diabetes Care', 'Hypertension Care', 'Ashma Care', 'Ischemic Heart Disease Care', 'Other Chronic Disease Mgmt Outcomes'];

		$scope.studies = [{id: 'pp_tp', study: 'Example Text'},
						  {id: 'tc_tp', study: 'Example Text'},
						  {id: 'pr_tp', study: 'Example Text'},
						  {id: 'pr_tp', study: 'Example Text'},
						  {id: 'pr_tp', study: 'Example Text'},
						  {id: 'pp_dc', study: 'Example Text'},
						  {id: 'tc_dc', study: 'Example Text'},
						  {id: 'pr_dc', study: 'Example Text'}
						  ];

		$scope.toLayerTwo = function(id) {
			$('#layer_one').fadeOut();
			$('.getBack').fadeIn();
			$('#layer_two').fadeIn();

		};

		$scope.toLayerOne = function(id) {
			$("#layer_two").fadeOut();
			$('.getBack').fadeOut();
			$('#layer_one').fadeIn();
		};



	});

$('#layer_two').hide();
$('.getBack').hide();



// document.querySelector('#layerOne').addEventListener('click', toLayerTwo, false);
// var modal = document.querySelector('#layerTwo').addEventListener('click', tolayerThree, false);
// var back = document.querySelector('#layerTwo a');
// back.addEventListener('click', getBack, false);

// $(document).ready(function () {
// 	$('#layerTwo').hide();
// });


// function toLayerTwo(e) {
// 	if (e.target !== e.currentTarget) {
// 		$('#layerOne').toggle('slow');
// 		$('#layerTwo').fadeIn();
// 	}
// }

// function getBack() {
// 	$('#layerTwo').toggle();
// 	$('#layerOne').fadeIn();
// }

// function tolayerThree(e) {
// 	if (e.target !== e.currentTarget && e.target !== back) {
// 		$('#ex1').modal();
// 	}
// }

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