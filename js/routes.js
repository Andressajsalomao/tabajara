angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.inCio', {
    url: '/Index.tabajara',
    views: {
      'side-menu21': {
        templateUrl: 'templates/inCio.html',
        controller: 'inCioCtrl'
      }
    }
  })

  .state('menu.conheAOCurso', {
    url: '/cursoionic',
    views: {
      'side-menu21': {
        templateUrl: 'templates/conheAOCurso.html',
        controller: 'conheAOCursoCtrl'
      }
    }
  })

  .state('menu.aEmpresa', {
    url: '/empresa',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aEmpresa.html',
        controller: 'aEmpresaCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('contato', {
    url: '/contato',
    templateUrl: 'templates/contato.html',
    controller: 'contatoCtrl'
  })

$urlRouterProvider.otherwise('/side-menu21/Index.tabajara')

  

});