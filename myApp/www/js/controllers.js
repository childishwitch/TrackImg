﻿angular.module('starter.controllers', ['ionic', 'ng-mfb'])

.controller('IndexCtrl', function($scope, $ionicSideMenuDelegate) {
/* 
 $scope.leftButtons = [{
    type: 'button-icon button-clear ion-navicon',
    tap: function(e) {
      $ionicSideMenuDelegate.toggleLeft($scope.$$childHead);
    }
  }];*/

  	  var updateOrientation=function(){
			if(window.orientation == 0)
				parent.location = "#/event/port";
			else if(window.orientation == 90 || window.orientation == -90)
				parent.location = "#/event/land";
			//window.location.reload();
               /*var body=document.body;  
               var viewport=document.getElementById("viewport");  
               if(body.getAttribute("orient")=="landscape"){  
                   body.setAttribute("orient","portrait");  
               }else{  
                   body.setAttribute("orient","landscape");  
               }*/  
   };

  var init=function(){  
      updateOrientation();  
      window.addEventListener("orientationchange",updateOrientation,false);  
  };  
  window.addEventListener("DOMContentLoaded",init,false);
  
  $scope.myItems = ["台北","101大樓"];
	$scope.sysItems = ["臺灣","煙火","跨年","台北市"];  
})

.controller("ContentCtrl", function($scope, $element, $window) {

})

.controller('LandCtrl', function($scope) {
 
})

.controller('PortCtrl', function($scope) {

});