/*
 * Grunt Console Clean
 * https://github.com/tomaszczechowski/grunt-console-clean
 *
 * Copyright (c) 2015 Tomasz Czechowski
 * Licensed under the MIT license.
 *
 */

module.exports = function (grunt) {
  'use strict';

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // Project configuration.
  grunt.initConfig({
    "console-clean": {
      test1: {
        files : [
          { src: ['test/test1/replace.js'], dest: 'test/test1/dist/replace.js' }
        ]
      },
      test2: {
        files : [
          { src: ['test/test2/replace.js'], dest: 'test/test2/dist/replace.js' }
        ]
      },
      test3: {
        options: {
          allows: ["warn"]
        },
        files : [
          { src: ['test/test3/replace.js'], dest: 'test/test3/dist/replace.js' }
        ]
      },
    },

    jshint: {
      options: {
        jshintrc : '.jshintrc'
      },
      files: [
        'Gruntfile.js',
        'tasks/*.js',
        'test/*.js'
      ]
    },

    nodeunit: {
      test1: ['test/test1/test.js'],
      test2: ['test/test2/test.js'],
      test3: ['test/test3/test.js'],
    },

    clean: {
      dist: 'test/dist/*'
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');


  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test-1', ['clean', 'console-clean:test1', 'nodeunit:test1']);
  grunt.registerTask('test-2', ['clean', 'console-clean:test2', 'nodeunit:test2']);
  grunt.registerTask('test-3', ['clean', 'console-clean:test3', 'nodeunit:test3']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test-1', 'test-2', 'test-3']);
};
