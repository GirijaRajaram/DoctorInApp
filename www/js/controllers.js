'use strict';

angular.module('MyApp.controllers', ['ngStorage'])

.controller('SignupCtrl', 
  function($scope,  $state, $localStorage,$firebase) {

     $scope.user = {};                
     $scope.user = ionic.Platform.device();
     $scope.user.date = new Date();
     $scope.user.logcount = 1;
     $scope.save = function() {
                    $localStorage.data1 = $scope.user;
                    $localStorage.showtutorial1 = true;
                    $state.go('tab.dash');
                }

    
  })

.controller('DashboardCtrl', 
  function($scope, $state, $localStorage,$firebase, Userservice, firebaseservice) {

      console.log('inside the controller');
      $scope.showtutorial1 = $localStorage.showtutorial1;
      $scope.data1 = $localStorage.data1;

      $scope.apptime = $localStorage.apptime;
      $scope.feedback = $localStorage.feedback;

      if(typeof $scope.showtutorial1 === "undefined"){
        console.log('inside the intro');
        $state.go('intro');
      }
      else if(typeof $scope.data1 === "undefined"){
        $state.go('signup');
        console.log('inside the signup');
      }
      else{
       var connectedRef = new Firebase("https://appdevfactory.firebaseio.com/.info/connected");
      var reflink = new Firebase("https://appdevfactory.firebaseio.com/doctorin/userdata");
        $scope.ref = $firebase(reflink);
        if(typeof $localStorage.store === "undefined"){
        
        
        connectedRef.on("value", function(snap) {
          if (snap.val() === true) {
            
              $localStorage.store = true;
              $scope.ref.$add($scope.data1);
              

          } 
        });
      }

     else{
        $localStorage.logcount = $localStorage.logcount+1; 
        $scope.data1.logcount = $localStorage.logcount;

      }
        $state.go('tab.dash');
        console.log('inside the dashboard');
          $scope.aboutPage = Userservice.getAboutPage();
           console.log('AboutPage', $scope.aboutPage);

      }


  })

.controller('DashCtrl', function($scope, Userservice, $state, $firebase, $localStorage) {
 
 
 // Chats.init();
//  $scope.aboutPage = Userservice.getDbaboutPage();

})


.controller('ChatsCtrl', function($scope, Userservice) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Userservice.all();
  $scope.remove = function(chat) {
    Userservice.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Userservice, $localStorage, $firebase, $state) {
    console.log('inside gettime');

  $scope.chat = Userservice.get($stateParams.chatid);
  $scope.appointment = $localStorage.appointment;
  console.log(' appointmentdetail', $scope.appointment );


    $scope.user = {}; 
    $scope.user.date = new Date();

    
    $scope.gettime = function(apptime) {
                    $scope.user.doc = $scope.chat.Name;
                     $localStorage.appointment = $scope.user;
                     console.log('gettime', $scope.user);

                     //$scope.apptime=null;



     var connectedRef = new Firebase("https://appdevfactory.firebaseio.com/.info/connected");
      var reflink = new Firebase("https://appdevfactory.firebaseio.com/doctorin/userapptime");
        $scope.appointment = $firebase(reflink);
       
        
        
        connectedRef.on("value", function(snap) {
          if (snap.val() === true) {
            
             
              $scope.appointment.$push($localStorage.appointment);
              

          } 
        });
        $state.go('tab.appointment');
                }

})

.controller('settingCtrl', function($scope,  Userservice,  $localStorage, $firebase ) {
 $scope.user = {}; 
  $scope.feedback = $localStorage.feedback;
    $scope.feedback = function() {
                    $localStorage.feedback = $scope.user;
                    //$scope.feedback = null;
                     console.log('feedback', $scope.user);



     var connectedRef = new Firebase("https://appdevfactory.firebaseio.com/.info/connected");
      var reflink = new Firebase("https://appdevfactory.firebaseio.com/doctorin/userfeedback");
        $scope.fb = $firebase(reflink);
       
        
        
        connectedRef.on("value", function(snap) {
          if (snap.val() === true) {
            
             
              $scope.fb.$push($localStorage.feedback);
              

          } 
        });
      


                    //$localStorage.showtutorial1 = true;
                   // $state.go('tab.dash');
                }
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
