describe('Home Test Suite', function() {
  var scope = {};
  var controller, home;

  beforeEach(module('app'));

  beforeEach(
    inject(function($controller) {
      controller = $controller;
      home = controller('homeController', { $scope: scope });
    })
  );

  describe('Home Controller', function() {
    it('should initialize home.title', function() {
      expect(home.title).toBeDefined();
      expect(home.title).toBe('Home');
    });
  });
});
