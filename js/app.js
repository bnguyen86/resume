var resumeApp = angular.module('resumeApp',[]);

  
resumeApp.controller('contentController', ['$scope', function($scope) {
  $scope.name = {first:"Ben", last:"Nguyen"};
}]);

resumeApp.controller('skillsController', ['$scope', '$http', function($scope, $http) {
	$scope.skillsArray = [];
	$scope.catagories = null;
	
	$http.post('/resume/query/', {list: "skill-catagory"}).
		success(function(data, status, headers, config){
			$scope.catagories = data;
		}).
		error(function(data, status, headers, config) {

		});
		
	$http.post('/resume/query/', {list: "skill-detail"}).
		success(function(data, status, headers, config){
			
		
				  //var newArr = [];
				  	for (var i=0; i<data.length; i+=(data.length/3)) {
						$scope.skillsArray.push(data.slice(i, i+(data.length/3)));
					}
						//$scope.skillsArray = newArr;

		}).
		error(function(data, status, headers, config) {

		});
  
}]);

resumeApp.controller('projectsController', ['$scope', '$http', function($scope, $http) {
	$scope.projects = null;
	$scope.p_details = null;
	
	$http.post('/resume/query/', {list: "projects-catagory"}).
		success(function(data, status, headers, config){
			$scope.projects = data;
		}).
		error(function(data, status, headers, config) {

		});
		
	$http.post('/resume/query/', {list: "projects-detail"}).
		success(function(data, status, headers, config){
			$scope.p_details = data;
		}).
		error(function(data, status, headers, config) {

		});
  
}]);

resumeApp.controller('workController', ['$scope', '$http', function($scope, $http) {
	$scope.work = null;
	$scope.w_details = null;
	
	$http.post('/resume/query/', {list: "work-catagory"}).
		success(function(data, status, headers, config){
			$scope.work = data;
		}).
		error(function(data, status, headers, config) {

		});
		
	$http.post('/resume/query/', {list: "work-detail"}).
		success(function(data, status, headers, config){
			$scope.w_details = data;
		}).
		error(function(data, status, headers, config) {

		});
}]);

resumeApp.controller('educationController', ['$scope', '$http', function($scope, $http) {
	$scope.edu = null;
	$scope.e_details = null;
	
	$http.post('/resume/query/', {list: "edu-catagory"}).
		success(function(data, status, headers, config){
			$scope.edu = data;
		}).
		error(function(data, status, headers, config) {

		});
		
	$http.post('/resume/query/', {list: "edu-detail"}).
		success(function(data, status, headers, config){
			$scope.e_details = data;
		}).
		error(function(data, status, headers, config) {

		});
}]);

resumeApp.controller('hobbiesController', ['$scope', '$http', function($scope, $http) {
	$scope.projects = null;
	$scope.p_details = null;
	
	$http.post('/resume/query/', {list: "projects-catagory"}).
		success(function(data, status, headers, config){
			$scope.projects = data;
		}).
		error(function(data, status, headers, config) {

		});
		
	$http.post('/resume/query/', {list: "projects-detail"}).
		success(function(data, status, headers, config){
			$scope.p_details = data;
		}).
		error(function(data, status, headers, config) {

		});
}]);


resumeApp.controller('formTester', ['$scope', '$http', function($scope, $http) {
  $scope.testData = 'TESTING';
  $scope.submit = function(){
  	var obj = {data : this.testData};
  	$http.post('/post/', obj).success(function(data, status, headers, config){
  		$scope.testData = data;
  	});
	 };
}]);


resumeApp.filter('nullToPresent', function() {
	return function(input){
		if(input == null || '') return 'Present';
		else return input;
	};
});

function catagoryFilter(item, detail, catagory){
	if(detail == catagory)
		return true;
		else return false;
}
