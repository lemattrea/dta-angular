describe('Test du PizzaController', function () {
  var ctrl
  var _PizzaService
  var http

  beforeEach(angular.mock.module('dtang'));

  beforeEach(angular.mock.inject(function ($rootScope, $controller, $httpBackend, PizzasService) {
    let scope = $rootScope.$new()
    ctrl = $controller("PizzaController as ctrl", { $scope: scope })
    http = $httpBackend
    _PizzaService = PizzasService
  }))

  it('should initialize predicate to ordering', function () {
    expect(ctrl.ordering).toEqual("name")
  })

  it('should load pizzas', function (done) {
    http.when('GET', 'http://localhost:1337/pizzas').respond([
      {
        name: 'test',
        toppings: [
          'mozzarella',
          'onion',
          'green_peppers'
        ]
      }
    ])

    http.when('GET', 'http://localhost:1337/toppings').respond([
      {
        "tomato_sauce": {
          "fr": "sauce tomate",
          "en": "tomato sauce"
        },
        "mozzarella": {
          "fr": "mozzarelle",
          "en": "mozzarella"
        },
        "mushrooms": {
          "fr": "champignon",
          "en": "mushrooms"
        },
        "ham": {
          "fr": "jambon",
          "en": "ham"
        },
        "eggs": {
          "fr": "oeuf",
          "en": "eggs"
        },
        "artichoke": {
          "fr": "articho",
          "en": "artichoke"
        },
        "green_olives": {
          "fr": "olives verte",
          "en": "green olives"
        },
        "onion": {
          "fr": "oignon",
          "en": "onion"
        },
        "sweet_corn": {
          "fr": "mais",
          "en": "sweet corn"
        },
        "green_peppers": {
          "fr": "poivre vert",
          "en": "green peppers"
        },
        "black_olives": {
          "fr": "olive noir",
          "en": "black olives"
        },
        "peas": {
          "fr": "pois",
          "en": "peas"
        },
        "salami": {
          "fr": "salami",
          "en": "salami"
        }
      }
    ])

    ctrl.getPizzas()
      .then(() => {
        expect(ctrl.listePizzas.length).toEqual(1)
      })
      .finally(done)

    http.flush()
  })

})
