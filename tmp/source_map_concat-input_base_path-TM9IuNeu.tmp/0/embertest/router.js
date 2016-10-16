define('embertest/router', ['exports', 'ember', 'embertest/config/environment'], function (exports, _ember, _embertestConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _embertestConfigEnvironment['default'].locationType,
    rootURL: _embertestConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('list-all-profiles');
  });

  exports['default'] = Router;
});