
var main = function () { 
	"use strict";

	var app = angular.module("simpleApp", []);

	app.controller("control", function($scope) {
		
		$scope.comments = [];

		$scope.sendComment = function () {
			var $newComment = $scope.inputComment;
			$scope.comments.push($newComment);
			$scope.inputComment = "";
			return $scope.inputComment;

		}

		$scope.key = function ($event) {
			if($event.keyCode === 13) {
				$scope.sendComment();
			}
		}	
	});



	 
};

$(document).ready(main); 






