var moduleFilter = require('broccoli-dist-es6-module');
var templateFilter = require('broccoli-template-compiler');

var templates = templateFilter('lib', {module: true});
var modules = moduleFilter(templates, {
  global: 'ic.tabs',
  packageName: 'ic-tabs',
  main: 'main',
  shim: {
    'ember': 'Ember'
  }
});

module.exports = modules;
