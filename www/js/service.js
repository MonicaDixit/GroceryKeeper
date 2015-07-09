myApp.factory('Items', ['$firebaseArray', function($firebaseArray) {
  var itemsRef = new Firebase('https://grocerylistionic.firebaseio.com/items');
  return $firebaseArray(itemsRef);
}]);
