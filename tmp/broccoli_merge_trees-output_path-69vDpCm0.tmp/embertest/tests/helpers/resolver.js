define('embertest/tests/helpers/resolver', ['exports', 'embertest/resolver', 'embertest/config/environment'], function (exports, _embertestResolver, _embertestConfigEnvironment) {

  var resolver = _embertestResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _embertestConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _embertestConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});