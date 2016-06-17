import angular from 'angular'
import { PizzaController } from './pizza.controller'
import { PizzaGestionController } from './pizza.gestion.controller'
import { pizzaToppingsFilter } from './pizza-toppings.filter'
import { PizzasService } from './pizza.service'
import { ListPizza } from './listPizza'
import { PizzaUpdateController } from './pizza.update.controller'
import { ToppingsListComponent } from './toppings.list.component'
import DtaDragDrop from '../dta-drag-drop'
import { PizzaFormComponent } from './form.pizza.component'

export default

  angular.module('dtang.pizza', [
    DtaDragDrop
  ])
    .controller('PizzaController', PizzaController)
    .controller('PizzaGestionController', PizzaGestionController)
    .controller('PizzaUpdateController', PizzaUpdateController)
    .controller('ToppingsListComponent', ToppingsListComponent)

    .filter('pizzaToppings', pizzaToppingsFilter)

    .service('PizzasService', PizzasService)
    .service('ListPizza', ListPizza)

    .component('pizzaToppings', ToppingsListComponent)
    .component('pizzaForm', PizzaFormComponent)

    .name
