// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

 var myApp = angular.module('starter', ['ionic', 'starter.controllers', 'firebase']);


myApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'templates/home.html',
            controller: 'HomeCtrl'
        })

        .state('signup', {
          url: '/signup',
          templateUrl: 'templates/signup.html',
          controller: 'HomeCtrl'
        })

        .state('addItem', {
          url:'/addItem',
          templateUrl: 'templates/addItem.html',
          controller: 'ListCtrl'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('main', {
            url: '/items',
            templateUrl: 'templates/listView.html',
            controller: 'ListCtrl'       
        });
        
});

