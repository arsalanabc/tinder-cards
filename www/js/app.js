var app = angular.module('conference', ['ionic', 'conference.AppCtrl', 'conference.SessionsCtrl', 'conference.SessionCtrl',
    'conference.FavoritesCtrl', 'conference.ProfileCtrl','conference.BalanceCtrl','ion-floating-menu','ngCordova', 'firebase','conference.TPCtrl'])



    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {

          


            // *** Do specific plugin related things here now on platform ready
            console.log("Platform ready");




            // Override the default HTML alert with native dialog - requires the cordova dialogs plugin
            if (navigator.notification) {
                window.alert = function (message) {
                    navigator.notification.alert(
                        message,    // message
                        null,       // callback
                        "Conference Tracker", // title
                        'OK'        // buttonName
                    );
                };
            }

            // In Ionic the accessory bar is hidden by default. Do not hide the keyboard accessory bar for this app
            // so the drop-down form input can be used properly.
            if(window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
            }

            if(window.StatusBar) {
                StatusBar.styleLightContent(); //status bar will have white text and icons
            }
        });
    })



.config(function($stateProvider, $urlRouterProvider) {
  //Facebook integration - Register your app and get your App ID from http://developer.facebook.com
  

        $stateProvider
    .state('app.profile', {
      url: "/profile",
      views: {
          'menuContent' :{
              templateUrl: "templates/profile.html",
              controller: "ProfileCtrl"
          }
      }
    })

    .state('app.addpost', {
      url: "/addpost",
      abstract: true,
      templateUrl: "templates/sign-in.html",
      controller: "sessionsCtrl"
    })

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.search', {
      url: "/search",
      views: {
        'menuContent' :{
          templateUrl: "templates/search.html"
        }
      }
    })

    .state('app.favorites', {
      url: "/favorites",
      views: {
        'menuContent' :{
          templateUrl: "templates/favorites.html",
          controller: "FavoritesCtrl"
        }
      }
    })

    .state('app.balance', {
      url: "/balance",
      views:{
        'menuContent' :{
          templateUrl: "templates/balance.html",
          controller:"BalanceCtrl"
        }
      }
    })

    .state('app.sessions', {
      url: "/sessions",
      views: {
          'menuContent': {
              templateUrl: "templates/sessions.html",
              controller: 'SessionsCtrl'
          }
      }
    })

    .state('app.twitter', {
      url: "/twitter",
      views: {
          'menuContent': {
              templateUrl: "templates/twitter.html",
              controller: 'TwitterController'
          }
      }
    })

    .state('app.timeline', {
      url: "/timeline",
      views: {
          'menuContent': {
              templateUrl: "templates/timeline.html",
              controller: "SessionsCtrl"
          }
        }      
    })

     .state('app.landingpage', {
      url: "/landingpage",
      views: {
          'menuContent': {
              templateUrl: "templates/landingpage.html",
              controller: "SessionsCtrl"
          }
        }      
    })

    .state('app.testingpage', {
      url: "/testingpage",
      views: {
          'menuContent': {
              templateUrl: "templates/testingpage.html",
              controller: "TPCtrl"
          }
        }      
    })

    .state('app.session', {
      url: "/sessions/:sessionId",
      views: {
          'menuContent': {
              templateUrl: "templates/session.html",
              controller: 'SessionCtrl'
          }
      }
    });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('app/testingpage');
});
