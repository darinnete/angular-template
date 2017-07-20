angular.module('app').controller('aboutController', [
  function() {
    var about = this;
    about.title = 'About';
    about.items = [
      { description: 'Item 1' },
      { description: 'Item 2' },
      { description: 'Item 3' },
      { description: 'Item 4' }
    ];
  }
]);
