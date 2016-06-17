export default function DtaDrag () {
  return {
    scope: {
      dtaDrag: '&'
    },
    restrict: 'A',
    link: function (scope, element, attrs) {
      element.attr('draggable', 'true')
      element[0].addEventListener('dragstart', evt => {
        scope.$apply(function () {
          scope.dtaDrag()
        })
      }, false)
    }
  }
}