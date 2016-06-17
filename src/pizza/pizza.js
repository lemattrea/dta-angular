export var _map = {
  'tomato_sauce': { 'fr': 'sauce tomate', 'en': 'tomato sauce' },
  'mozzarella': { 'fr': 'mozzarelle', 'en': 'mozzarella' },
  'mushrooms': { 'fr': 'champignon', 'en': 'mushrooms' },
  'ham': { 'fr': 'jambon', 'en': 'ham' },
  'eggs': { 'fr': 'oeuf', 'en': 'eggs' },
  'artichoke': { 'fr': 'articho', 'en': 'artichoke' },
  'green_olives': { 'fr': 'olives verte', 'en': 'green olives' },
  'onion': { 'fr': 'oignon', 'en': 'onion' },
  'sweet_corn': { 'fr': 'mais', 'en': 'sweet corn' },
  'green_peppers': { 'fr': 'poivre vert', 'en': 'green peppers' },
  'black_olives': { 'fr': 'olive noir', 'en': 'black olives' },
  'peas': { 'fr': 'pois', 'en': 'peas' },
  'salami': { 'fr': 'salami', 'en': 'salami' }
}

export class Pizza {
  constructor ({name, toppings, isCook, id}) {
    this.id = id
    this.name = name || 'default_name'
    this.toppings = toppings || []
    this.isCook = isCook || false
  }

  monNom () {
    return this.name
  }

  setNom (name) {
    this.name = name || 'default_name'
    return this
  }

  addTopping (toppings) {
    const filtre = function (v) {
      return v === toppings
    }

    if (Object.keys(_map).filter(filtre).length !== 0 && this.toppings.filter(filtre).length < 2) {
      this.toppings.push(toppings)
    }
    return this
  }

  deleteTopping (toppings) {
    const filtre = function (v) {
      return v !== toppings
    }
    this.toppings = this.toppings.filter(filtre)
    return this
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
        if (size > 1) return `${this.translate(topping, lang)} (${size})`
        return `${this.translate(topping, lang)}`
      })
      .join(', ')
  }

  translate (topping, lang = 'en') {
    return _map[topping][lang] || topping
  }

  isToppingPresent (topping) {
    if (this.toppings.indexOf(topping) === -1) {
      return false
    }
    return true
  }

  cook (time = 1000) {
    console.log('pizza lancer')
    return new Promise((resolve, reject) => {
      if (this.isCook) return reject('pizza déjà cuite')

      setTimeout(() => {
        this.isCook = true
        resolve()
      }, time)
    })
  }
}
