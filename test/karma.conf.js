module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'app/scripts/vendor/angular.js',
      'app/scripts/vendor/angular-route.js',
      'app/scripts/vendor/angular-resource.js',
      'app/scripts/vendor/angular-mocks.js',
      'app/scripts/*.js',
      'test/unit/controllersSpec.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    /*plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
            ],*/

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};