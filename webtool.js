var idpc = angular.module('idpc', [])
	.controller('mainCtrl', function($scope) {

		//These are the variables that stores headings and studies, will be updated when data is available
		$scope.variables = ['', 'Policies & Procedures', 'Team Composition', 'Provider Remuneration', 'Team Funding', 'Team Governance'];
		//$scope.outcomes = ['Team Process', 'Health Services Process', 'Diabetes Care', 'Hypertension Care', 'Ashma Care', 'Ischemic Heart Disease Care', 'Other Chronic Disease Mgmt Outcomes'];
		
		$scope.results = [{outcome: 'Team Process',                        study: ['Example Study 1', 'Example Study 2', 'Example Study 3', 'Example Study 4', 'Example Study 5']},
						  {outcome: 'Health Services Process',             study: ['Example Study 1', 'Example Study 2', 'Example Study 3', 'Example Study 4', 'Example Study 5']},
						  {outcome: 'Diabetes Care',                       study: ['Example Study 1', 'Example Study 2', 'Example Study 3', 'Example Study 4', 'Example Study 5']},
						  {outcome: 'Hypertension Care',                   study: ['Example Study 1', 'Example Study 2', 'Example Study 3', 'Example Study 4', 'Example Study 5']},
						  {outcome: 'Ashma Care',                          study: ['Example Study 1', 'Example Study 2', 'Example Study 3', 'Example Study 4', 'Example Study 5']},
						  {outcome: 'Ischemic Heart Disease Care',         study: ['Example Study 1', 'Example Study 2', 'Example Study 3', 'Example Study 4', 'Example Study 5']},
						  {outcome: 'Other Chronic Disease Mgmt Outcomes', study: ['Example Study 1', 'Example Study 2', 'Example Study 3', 'Example Study 4', 'Example Study 5']},
						 ];
						 
		$scope.studies = [{id: 'pp_tp', study: 'Example Text'},
						  {id: 'tc_tp', study: 'Example Text'},
						  {id: 'pr_tp', study: 'Example Text'},
						  {id: 'pr_tp', study: 'Example Text'},
						  {id: 'pr_tp', study: 'Example Text'},
						  {id: 'pp_dc', study: 'Example Text'},
						  {id: 'tc_dc', study: 'Example Text'},
						  {id: 'pr_dc', study: 'Example Text'}
						  ];
		// Hide layer one and display layer 2
		$scope.toLayerTwo = function(id) {
			$('#layer_one').fadeOut();
			$('#layer_two').fadeIn();
			$('.getBack').fadeIn();

		};

		// When back is clicked in layer 2, hide layer 2 and show layer 1
		$scope.toLayerOne = function(id) {
			$("#layer_two").fadeOut();
			$('.getBack').fadeOut();
			$('#layer_one').fadeIn();
		};



	});

// Hide layer 2 and back button at default
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

// This is the scroll down effect at the start page
$('#click').on('click', function() {
	var targetOffset = $('#wrapper').offset().top - 65;
	$('html, body').animate({scrollTop:targetOffset}, 800);

});

// This scrolls up to the start page when click the title
$('#navbar h2').on('click', function() {
	var targetOffset = $('#header').offset().top - 65;
	$('html, body').animate({scrollTop:targetOffset}, 800);
});

// This adds background to the nav bar and makes it more visible
$(window).scroll(function() {
    if ($("#navbar").offset().top > 50) {
        $("#navbar").addClass("navbar_scroll");
    } else {
        $("#navbar").removeClass("navbar_scroll");
    }
});