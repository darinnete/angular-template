angular.module('app').directive('aboutListItem', function() {
  var linker = function(scope, element, attrs) {
    $(element).hover(
      function() {
        $(this).css('opacity', '0.5');
      },
      function() {
        $(this).css('opacity', '1.0');
      }
    );
  };

  return {
    link: linker,
    replace: true,
    templateUrl: 'components/about/aboutListItem/about-list-item-view.html'
  };
});
