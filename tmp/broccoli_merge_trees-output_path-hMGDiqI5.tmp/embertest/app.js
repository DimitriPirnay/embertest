define('embertest/app', ['exports', 'ember', 'embertest/resolver', 'ember-load-initializers', 'embertest/config/environment'], function (exports, _ember, _embertestResolver, _emberLoadInitializers, _embertestConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _embertestConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _embertestConfigEnvironment['default'].podModulePrefix,
    Resolver: _embertestResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _embertestConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});