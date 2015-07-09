angular.module('starter')
.directive('progressBar' , function(){
	return{
    restrict: "E",
    templateUrl: 'templates/directives/progressBar.html',
    scope:{
    	header:'@',
    	created:'@'
    	

    	
     },

     controller: function($scope){
     	//date when it needs to refill
     	var firstDate = new Date($scope.header);
     	var secondDate = new Date();
     	var oneDay = 24*60*60*1000; 
     	//date when it was created
     	var thirdDate = new Date($scope.created);
     	//$scope.days = new Date($scope.header) - new Date();
     	$scope.days = Math.round(Math.abs((firstDate.getTime() - thirdDate.getTime())/(oneDay)));
     	$scope.daysStarted = Math.round(Math.abs((secondDate.getTime() - thirdDate.getTime())/(oneDay)));
     	console.log('days' , $scope.days);
     	console.log('days2' , $scope.daysStarted );
     	console.log('first' , firstDate);
     	console.log('third', thirdDate);

     	if ($scope.daysStarted == 0){
     		$scope.now = 0;

     	} 

     	
     		if($scope.daysStarted > 0 && $scope.days > 0){
     			$scope.now = ($scope.daysStarted/$scope.days) * 100 

     		}

     	
     	console.log('now' , $scope.now);
     	
   
}

};

})