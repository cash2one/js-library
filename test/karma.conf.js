// Karma configuration
// Generated on Thu Aug 27 2015 11:59:05 GMT+0800 (CST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../',

    frameworks: ['jasmine', 'requirejs'],

    files: [
      {
        pattern: 'dep/requirejs/require.js',
        included: false
      },
      {
        pattern: 'src/util/**/*.js',
        included: false
      },
      {
        pattern: 'test/unit/util/**/*.js',
        included: false
      },
      {
        pattern: 'dep/angular/angular.js',
        included: true
      },
      {
        pattern: 'dep/angular-mocks/angular-mocks.js',
        included: true
      },
      'test/unit/main.js',
      'dep/jquery/dist/jquery.js'
    ],

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    reporters: ['progress', 'coverage'],

    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // web server port
    port: 9879,

    preprocessors: {
      'test/unit/**/*.js': ['coverage']
    },

    plugins : [
        'karma-jasmine',
        'karma-requirejs',
        'karma-chrome-launcher',
        'karma-coverage'
    ],
    coverageReporter:{
        type:'html',
        dir:'./test/unit/coverage/'
    }
  });
};
