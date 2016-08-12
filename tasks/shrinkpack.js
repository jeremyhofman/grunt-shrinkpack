/*
* grunt-shrinkpack
* https://github.com/jeremyhofman/grunt-shrinkpack
*
* Copyright (c) 2016 Jeremy Hofman
* Licensed under the MIT license.
*/

'use strict';

var shelljs = require('shelljs');
var os = require('os');

module.exports = function(grunt) {
  grunt.registerTask('shrinkpack', 'Provides a task for Shrinkpack to run. Requires grunt-shrinkwrap to run before grunt-shrinkpack, as Shrinkpack uses the json file generated by Shrinkwrap.', function() {
    switch (os.type()) {
      case 'Darwin':
        shelljs.exec("./node_modules/.bin/shrinkpack");
        break;
      default:
        var pwd = shelljs.pwd();
        shelljs.exec(pwd + "\\node_modules\\.bin\\shrinkpack.cmd");
        break;
    }
  });
};
