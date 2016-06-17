import angular from 'angular'
import ngRoute from 'angular-route'
import PizzaModule from './pizza'

angular.module('dtang', [
  PizzaModule,
  ngRoute
])

.config(function ($routeProvider) {
  $routeProvider
  .when('/pizzas', {
    templateUrl: 'pizza-list.html',
    controller: 'PizzaController',
    controllerAs: 'ctrlP'
  })
  .when('/pizzas/:id', {
    templateUrl: 'pizza-form.html',
    controller: 'PizzaUpdateController',
    controllerAs: 'ctrl'
  })
  .when('/about', {
    template: '<h1>Bonjour about</h1>',
    controller: function () {}
  })
  .otherwise('/')
})

angular.bootstrap(document, ['dtang'])



/*
import angular from 'angular'

angular.module('dtang', [])
  .config(function () {
    console.log('Dtang config')
  })

  .value('AppName', 'Dtang')

  .run(function (AppName) {
    console.log(AppName + ' start')
  })

  .controller('MonController', MonController)

function MonController () {
  const monCtrl = this
  console.log('Mon controller')

  monCtrl.test = {age: 20}
  monCtrl.file = 'default'
  monCtrl.message = 'Bonjour'
  monCtrl.newName = {
    name: 'Albin'
  }

  function initNewUser () {
    monCtrl.newUser = {
      delete: false,
      name: ''
    }
  }
  initNewUser()

  monCtrl.isPasswordOk = function () {
    return monCtrl.user.name === 'abracadabra'
  }

  monCtrl.deleteMe = function (index) {
    monCtrl.listName[index].delete = !monCtrl.listName[index].delete
  }

  monCtrl.listName = [
    {name: 'toto', delete: false},
    {name: 'tata', delete: false},
    {name: 'titi', delete: false}
  ]

  monCtrl.clickme = function () {
    monCtrl.listName.push(angular.copy(monCtrl.newUser))
    initNewUser()
  }

  monCtrl.getName = function () {
    return 'Albin'
  }
}
*/
