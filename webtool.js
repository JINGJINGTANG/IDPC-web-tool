var idpc = angular.module('idpc', [])
	.controller('mainCtrl', function($scope) {
		var variables = ['Policies and Procedures', 'Team Composition', 'Provider Remuneration'];
		var outcomes = ['Team Process', 'Diabetes Care'];
		$scope.variable1 = variables[0];
		$scope.variable2 = variables[1];
		$scope.variable3 = variables[2];

		$scope.outcome1 = outcomes[0];
		$scope.outcome2 = outcomes[1];

		$scope.studies = [{id: 'pp_tp', study: 'Example 1-1'},
						  {id: 'tc_tp', study: 'Example 1-2'},
						  {id: 'pr_tp', study: 'Example 1-3'},
						  {id: 'pp_dc', study: 'Example 2-1'},
						  {id: 'tc_dc', study: 'Example 2-2'},
						  {id: 'pr_dc', study: 'Example 2-3'}
						  ];

		$scope.toLayerTwo = function(id) {
			alert(id);
		};



	});






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