import {Pizza} from './pizza.js'

export class PizzaController {

  constructor ($timeout, PizzasService) {
    this.$timeout = $timeout
    this.PizzasService = PizzasService

    this.pizzaAttenteCuisson = []
    this.fourActif = false

    this.PizzasService.getToppings().then((data) => {
      this.listTopping = data
    })
    // tri par défaut
    this.ordering = 'name'

    this.getPizzas()
  }

  sortPizzas () {
    return function (pizza) {
      if (this.ordering === 'name' || this.ordering === 'isCook') {
        return pizza[this.ordering]
      }
      if (this.ordering === 'toppings') {
        return (pizza.toppings || []).length
      }
      return 1
    }.bind(this)
  }

  getPizzas () {
    const ctrlP = this
    return this.PizzasService.getPizzas()
      .then(data => {
        ctrlP.listePizzas = []
        data.forEach((item) => {
          item._toppings = item.toppings2string('fr')
          ctrlP.listePizzas.push(item)
        })
      })
  }

  addPizza (name) {
    this.PizzasService.addPizza(new Pizza({name: name}))
      .then(() => this.getPizzas())
  }
  updatePizza (pizza) {
    this.PizzasService.updatePizza(new Pizza(pizza.name, pizza.toppings, pizza.isCook, pizza.id))
      .then(() => this.getPizzas())
  }

  deletePizza (id) {
    this.PizzasService.deletePizza(id)
      .then(() => this.getPizzas())
  }

  tamponFunction () {
    if (!this.fourActif && this.pizzaAttenteCuisson.length === 1) {
      this.fourActif = true
      this.cuissonFour().then(() => {
        this.fourActif = false
      })
    }
  }

  cuissonFour () {
    let pizzaACuir = this.pizzaAttenteCuisson.shift()
    return pizzaACuir.cook(3000)
      .then(function () {
        pizzaACuir.isCook = true
        this.PizzasService.updatePizza(pizzaACuir)
        if (this.pizzaAttenteCuisson.length !== 0) {
          this.cuissonFour(this.pizzaAttenteCuisson)
        }
      }.bind(this))
  }

}

PizzaController.$inject = ['$timeout', 'PizzasService']
