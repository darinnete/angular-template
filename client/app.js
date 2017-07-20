angular
  .module('app', ['ui.router'])
  // Add $state and $stateParams to $rootScope in order to update the title tag with $state data
  .run([
    '$rootScope',
    '$state',
    '$stateParams',
    function($rootScope, $state, $stateParams) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
    }
  ])
  .config([
    '$urlRouterProvider',
    '$stateProvider',
    '$locationProvider',
    function($urlRouterProvider, $stateProvider, $locationProvider) {
      $urlRouterProvider.otherwise('/');
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'components/home/home-view.html',
          controller: 'homeController',
          controllerAs: 'home',
          data: { pageTitle: 'Home' }
        })
        .state('home.list', {
          url: '^/list',
          templateUrl: 'components/home/homeList/home-list-view.html',
          controller: 'homeListController',
          controllerAs: 'homeList'
        })
        .state('about', {
          url: '/about',
          templateUrl: 'components/about/about-view.html',
          controller: 'aboutController',
          controllerAs: 'about',
          data: { pageTitle: 'About' }
        });
      // Use html5Mode to remove the # from Urls
      $locationProvider.html5Mode(true);
    }
  ]);
