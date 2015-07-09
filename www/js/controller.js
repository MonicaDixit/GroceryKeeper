angular.module('starter.controllers' , [])

.controller('ListCtrl', function($scope, $ionicListDelegate, Items, $state, $firebaseArray) {

  $scope.items = Items;

  $scope.grocery={};
  $scope.newItem = function() {
  //   var name = prompt('What do you need to buy?');
  //   if (name) {
  //     $scope.items.$add({
  //       'name': name
  //     });
  //   }
  // };

  $state.go('addItem');

};

$scope.addItem = function(){
	var ref = new Firebase('https://grocerylistionic.firebaseio.com/items/');
    $scope.items= $firebaseArray(ref);
	var name = $scope.grocery.itemname;
	var refilDate = $scope.grocery.refilDate;
	console.log('date', refilDate);
	var groceryItem = {
		name: name,
		refilDate: refilDate.toString(),
		dateCreated: new Date().toString()
	}
  $scope.items.$add(groceryItem);
 };



  $scope.purchaseItem = function(item) {
    var itemRef = new Firebase('https://grocerylistionic.firebaseio.com/items/' + item.$id);
    itemRef.child('status').set('purchased');
    $ionicListDelegate.closeOptionButtons();
  };
})
.controller('HomeCtrl' , ['$scope' , '$firebaseAuth' ,  '$state', function($scope , $firebaseAuth, $state){
	$scope.login={};
	//$scope.user = null;
	var ref = new Firebase('https://grocerylistionic.firebaseio.com/');

	$scope.showsignup = function(){
		$state.go('signup');
	}
	
	$scope.signin = function(){
       var username = $scope.login.username;
       var password = $scope.login.password;


       ref.authWithPassword({
       	"email" : username,
       	"password": password
       }, function(error, authData){
       	if(error){
       		console.log('auth failure');
       	} else{
       		console.log("Authenticated Successfully with payload", authData);
       		$state.go('main');
       	}

       });

	};


	$scope.signup = function(){
      var username = $scope.login.username;
      var password = $scope.login.password;	
      var repeatpassword = $scope.login.repeatpassword;

      ref.createUser({
        "email": username,
        "password": password 

      }, 

       function(error, userData){
         if(error){
         	switch(error.code){
         		case "EMAIL_TAKEN" :
         		  console.log("email already taken");
         		  break;
         	    case "INVALID_EMAIL":
         	      console.log("invalid email");
         	      break;
         	    default:
         	      console.log("Error creating user", error) ;

         	}

         }  else{

             console.log("successfully created the user with the following payload" , userData);
             //$scope.user = userData.
             $state.go('main');
         } 

      });
   

	}




}]);