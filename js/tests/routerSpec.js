define([
  'backbone',
  'router'
], function(Backbone, Router) {
  describe('The router', function() {
    var router;

    beforeAll(function() {
      router = new Router();
      Backbone.history.start({pushState: true});
    });

    it('has a "home" page route', function() {
      expect(router.routes['']).toBe('home');
    });
    it('reroutes to the home page', function() {
      var home = spyOn(router, 'home').and.callThrough();
      var pushStateSpy = spyOn(window.history, 'pushState').and.callFake(function (data, title, url) {
        expect(url).toEqual('/');
        router.home();
      });
      router.navigate('');
      expect(pushStateSpy).toHaveBeenCalled();
      expect(home).toHaveBeenCalled();
    });

    afterAll(function() {
      Backbone.history.stop();
    });
  });
});
