define('embertest/tests/test-helper', ['exports', 'embertest/tests/helpers/resolver', 'ember-qunit'], function (exports, _embertestTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_embertestTestsHelpersResolver['default']);
});