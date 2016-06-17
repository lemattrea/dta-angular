class PizzaFormController {
  constructor ($element) {
    this.$element = $element
  }

  addTopping ({ topping }) {
    this.pizza.addTopping(topping)
  }

  updatePizza (pizzaForm) {
    if (pizzaForm.$valid) {
      var pizza = this.pizza
      this.onUpdatePizza({
        $event: { pizza }
      })
    }
  }
}

export const PizzaFormComponent = {
  bindings: {
    toppings: '<toppings',
    pizza: '<pizzaList',
    onUpdatePizza: '&'
  },
  controller: PizzaFormController,
  templateUrl: 'component-pizza-form.html'
}
