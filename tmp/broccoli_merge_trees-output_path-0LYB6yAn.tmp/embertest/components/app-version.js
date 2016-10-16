define('embertest/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'embertest/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _embertestConfigEnvironment) {

  var name = _embertestConfigEnvironment['default'].APP.name;
  var version = _embertestConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});