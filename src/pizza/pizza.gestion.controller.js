import {_map} from './pizza.js'

export class PizzaGestionController {
  constructor () {
    this.pizza = {
      name: 'Pizza',
      toppings: []
    }
    this.listTopping = _map
  }

  savePizza (form) {
    if (form.$invalid) {
      alert('ERROR !')
      return
    }

    var keys = Object.keys(_map)

    //transformation toppings
    this.pizza.toppings = this.pizza.toppings
      .map((v, i) => {
        if (v) return keys[i]
      })
      .filter(v => v)

    console.log('save', this.pizza.toppings)
  }
}
