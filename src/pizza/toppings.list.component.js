class ToppingsListController {
  constructor ($element) {
    this.$element = $element
  }

  $onChanges (changes) {
    if ((changes.toppings && this.toppings && this.allToppings) || (changes.allToppings && this.toppings && this.allToppings)) {
      this.toppingsTranslate = this.toppings2string('fr')
    }
  }

  toppings2string (lang = 'en') {
    return this.toppings

      // uniqs
      .reduce((acc, topping) => {
        if (acc.indexOf(topping) === -1) acc.push(topping)
        return acc
      }, [])

      // topping (translated (nb))
      .map(topping => {
        const size = this.toppings.filter(item => item === topping).length
        let obj
        if (size > 1) {
          obj = {
            topping: this.translate(topping, lang) + '(' + size + ')',
            topping_key: topping
          }
          return obj
        } else {
          obj = {
            topping: this.translate(topping, lang),
            topping_key: topping
          }
          return obj
        }
      })
  }

  translate (topping, lang = 'en') {
    return this.allToppings[topping][lang] || topping
  }

  addCurrentToppings (topping) {
    this.onAddTopping({
      $event: { topping }
    })
    this.toppingsTranslate = this.toppings2string('fr')
  }

  addListToppings (topping) {
    this.toppings.splice(this.toppings.indexOf(topping), 1)
    this.toppingsTranslate = this.toppings2string('fr')
  }

  dropped () {
    this.addCurrentToppings(this.draggedTopping)
  }
}

export const ToppingsListComponent = {
  bindings: {
    toppings: '<toppings',
    allToppings: '<allToppings',
    onAddTopping: '&'
  },
  controller: ToppingsListController,
  templateUrl: 'component-toppings.html'
}
