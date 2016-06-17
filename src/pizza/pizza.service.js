import {Pizza} from './pizza.js'

const urlPizza = 'http://localhost:1337/pizzas'
const urlToppings = 'http://localhost:1337/toppings'

export class PizzasService {
  constructor ($timeout, $http) {
    this.$timeout = $timeout
    this.$http = $http
  }

  getPizzas () {
    return this.$http.get(urlPizza)
    .then(response => {
      return response.data
    })
    .then(pizzas => pizzas.map(pizza => new Pizza(pizza))
    )
  }

  getPizza (id) {
    return this.$http.get(urlPizza + '/' + id)
      .then(response => response.data)
  }

  getToppings () {
    return this.$http.get(urlToppings)
    .then(response => {
      return response.data
    })
  }

  addPizza (Pizza) {
    return this.$http.post(urlPizza, {
      name: Pizza.name,
      toppings: Pizza.toppings
    })
  }

  updatePizza (Pizza) {
    return this.$http.put(urlPizza + '/' + Pizza.id, {
      name: Pizza.name,
      toppings: Pizza.toppings,
      isCook: Pizza.isCook
    })
  }

  deletePizza (id) {
    return this.$http.delete(urlPizza + '/' + id)
  }
}
