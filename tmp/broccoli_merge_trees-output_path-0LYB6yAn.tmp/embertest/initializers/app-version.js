define('embertest/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'embertest/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _embertestConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_embertestConfigEnvironment['default'].APP.name, _embertestConfigEnvironment['default'].APP.version)
  };
});