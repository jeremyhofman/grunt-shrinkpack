/*
 * grunt-shrinkpack
 * https://github.com/jeremyhofman/grunt-shrinkpack
 *
 * Copyright (c) 2016 Jeremy Hofman
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js'//,
        //'<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    }//,

    // Unit tests.
    // nodeunit: {
    //   tests: ['test/*_test.js']
    // }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'shrinkpack']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint']);

};
