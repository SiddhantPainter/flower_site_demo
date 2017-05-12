var app = angular.module('painter', []);

app.controller('loginCtrl', function($scope) {
  $scope.user={
	  username:"",
	  password:""
  };
  $scope.login = function(){
	  if(isUndefined($scope.user.username) && isUndefined($scope.user.password)){
		$scope.errormsg="Please Enter username and password";
	  }else if(isUndefined($scope.user.username)){
		  $scope.errormsg="Please Enter user name";
	  }else if(isUndefined($scope.user.password)){
		   $scope.errormsg="Please Enter password"
	  }else{
		  $scope.errormsg="";
		  success();
	  }
  };
  function success() {
	  if($scope.user.username==="test" && $scope.user.password==="test"){
		   window.location.assign("home.html");
	  }else{
		   $scope.errormsg="Username or Password did not match";
	  }
   
}
  function isUndefined(val){
	  if(val==undefined || val==null || val.trim()=="")
		  return true;
	  else
		  return false;
  }
});
