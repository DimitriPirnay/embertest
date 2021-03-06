/* global DS, require, requirejs */ // added here to prevent an import from erroring when ED is not present

import TestModule from './test-module';
import Ember from 'ember';

export default TestModule.extend({
  init: function(modelName, description, callbacks) {
    this.modelName = modelName;

    this._super.call(this, 'model:' + modelName, description, callbacks);

    this.setupSteps.push(this.setupModel);
  },

  setupModel: function() {
    var container = this.container;
    var defaultSubject = this.defaultSubject;
    var callbacks = this.callbacks;
    var modelName = this.modelName;

    var adapterFactory = container.lookupFactory('adapter:application');
    if (!adapterFactory) {
      if (requirejs.entries['ember-data/adapters/json-api']) {
        adapterFactory = require('ember-data/adapters/json-api')['default'];
      }

      // when ember-data/adapters/json-api is provided via ember-cli shims
      // using Ember Data 1.x the actual JSONAPIAdapter isn't found, but the
      // above require statement returns a bizzaro object with only a `default`
      // property (circular reference actually)
      if (!adapterFactory || !adapterFactory.create) {
        adapterFactory = DS.JSONAPIAdapter || DS.FixtureAdapter;
      }

      var thingToRegisterWith = this.registry || this.container;
      thingToRegisterWith.register('adapter:application', adapterFactory);
    }

    callbacks.store = function(){
      var container = this.container;
      var store = container.lookup('service:store') || container.lookup('store:main');
      return store;
    };

    if (callbacks.subject === defaultSubject) {
      callbacks.subject = function(options) {
        var container = this.container;

        return Ember.run(function() {
          var store = container.lookup('service:store') || container.lookup('store:main');
          return store.createRecord(modelName, options);
        });
      };
    }
  }
});
