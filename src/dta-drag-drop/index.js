import angular from 'angular'
import DtaDrag from './dta.drag'
import DtaDrop from './dta.drop'
export default
  angular.module('dtang.DragAndDrop', [])

  .directive('dtaDrag', DtaDrag)
  .directive('dtaDrop', DtaDrop)

  .name
