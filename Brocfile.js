/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var mergeTrees = require('broccoli-merge-trees');
var pickFiles = require('broccoli-static-compiler');

var app = new EmberApp({
  name: require('./package.json').name,

  getEnvJSON: require('./config/environment')
});

// Use this to add additional libraries to the generated output files.
app.import('vendor/ember-data/ember-data.js');
app.import('vendor/firebase/firebase.js');
app.import('vendor/emberfire/dist/emberfire.min.js');
app.import('vendor/momentjs/min/moment.min.js');

// If the library that you are including contains AMD or ES6 modules that
// you would like to import into your application please specify an
// object with the list of modules as keys along with the exports of each
// module as its value.
app.import('vendor/ic-ajax/dist/named-amd/main.js', {
  'ic-ajax': [
    'default',
    'defineFixture',
    'lookupFixture',
    'raw',
    'request',
  ]
});

// Bootstrap JS
app.import('vendor/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/affix.js');
app.import('vendor/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/alert.js');
app.import('vendor/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/button.js');
app.import('vendor/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/carousel.js');
app.import('vendor/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/collapse.js');
app.import('vendor/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/dropdown.js');
app.import('vendor/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/tab.js');
app.import('vendor/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/transition.js');
app.import('vendor/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/scrollspy.js');
app.import('vendor/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/modal.js');
app.import('vendor/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/tooltip.js');
app.import('vendor/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/popover.js');

var glyphicons = pickFiles('vendor/bootstrap-sass-official/vendor/assets/fonts/bootstrap', {
  srcDir: '/',
  files: [
    'glyphicons-halflings-regular.*',
  ],
  destDir: '/assets/bootstrap'
});

module.exports = mergeTrees([
  app.toTree(),
  glyphicons
]);
