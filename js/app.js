var resumeApp = angular.module('resumeApp',['ui.unique']);

  
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
	$scope.p_skills = null;
	$scope.filterArr = [];
	$scope.filterBySkill = function(item){
		var index = $scope.filterArr.indexOf(item);
			if(index >= 0)
				$scope.filterArr.splice(index,1);

			else{
				$scope.filterArr.push(item);
			}
		for(var i=0;i < $scope.projects.length; i++){
			for(var j=0; j< $scope.filterArr.length; j++){
				if($scope.projects[i].skills.indexOf($scope.filterArr[j]) >= 0){
					$scope.projects[i].filtered = true;
					break;
				}
				else $scope.projects[i].filtered = false;
			}
		}

		if($scope.filterArr.length <= 0){
			for(var i=0;i < $scope.projects.length; i++){
				$scope.projects[i].filtered = true;
			}
		}	
	};
	
	$http.post('/resume/query/', {list: "projects-catagory"}).
		success(function(data, status, headers, config){
			$scope.projects = data;
			$http.post('/resume/query/', {list: "projects-skills"}).
				success(function(data, status, headers, config){
					$scope.p_skills = data;
					for(var i = 0; i < $scope.projects.length; i++){
						var skillsArr = [];

						for(var j = 0; j < $scope.p_skills.length; j++)
							if($scope.projects[i].p_id == $scope.p_skills[j].p_id){
						 		skillsArr.push($scope.p_skills[j].s_name);
						 	}

						$scope.projects[i].skills = skillsArr;
						$scope.projects[i].filtered = true;
					}


				}).
				error(function(data, status, headers, config) {

				});
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
	$scope.hobbies = null;
	
	$http.post('/resume/query/', {list: "hobbies"}).
		success(function(data, status, headers, config){
			$scope.hobbies = data;
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
