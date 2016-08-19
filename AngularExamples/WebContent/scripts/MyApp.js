var app= angular.module("iteration",[]);

var projects = [
                {'projCode': 'EDU101', 'description': 'Multimedia', 'cost': 450000},
                {'projCode': 'EDU102', 'description': 'E-Tutor', 'cost': 650000},
                {'projCode': 'MED101', 'description': 'ECG', 'cost': 145000},
                {'projCode': 'MED102', 'description': 'CT-Scan', 'cost': 950000}                
                ];

app.controller("projectController", function($scope) {
	$scope.code = "";
	$scope.desc = "";
	$scope.cost = 0;
	$scope.projectDetails = projects;
	$scope.add = function(){
		projects.push({'projCode': $scope.code, 'description': $scope.desc, 'cost': $scope.cost})
	}
	
});
		
	