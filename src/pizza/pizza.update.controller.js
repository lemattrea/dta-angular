
import { Pizza } from './pizza.js'

export class PizzaUpdateController {

  constructor (PizzasService, $routeParams, $location) {
    this.PizzasService = PizzasService
    this.$location = $location

    this.PizzasService.getPizza($routeParams.id)
      .then(pizza => {
        this.pizza = new Pizza(pizza)
      })

    this.PizzasService.getToppings()
      .then(toppings => {
        this.toppings = toppings
      })
  }

  savePizza (form) {
    if (form.$invalid) return
    this.PizzasService.savePizza(this.pizza)
      .then(() => {
        this.$location.path('/pizzas')
      })
  }

  updatePizza ({ pizza }) {
    this.PizzasService.updatePizza(new Pizza(pizza))
      .then(() => {
        this.$location.path('/pizzas')
      })
  }
}
