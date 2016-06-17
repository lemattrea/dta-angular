export default function DtaDrop () {
  return {
    scope: {
      dtaDrop: '&'
    },
    restrict: 'A',
    link: function (scope, element, attrs) {
      element[0].addEventListener('dragover', evt => {
        evt.preventDefault()
      }, false)
      element[0].addEventListener('drop', evt => {
        evt.preventDefault()
        scope.$apply(function () {
          scope.dtaDrop()
        })
      }, false)
    }
  }
}
