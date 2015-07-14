/*
 * Grunt Replacer
 * https://github.com/tomaszczechowski/grunt-console-clean
 *
 * Copyright (c) 2013 Tomasz Czechowski
 * Licensed under the MIT license.
 */

module.exports = function (grunt) {

  'use strict';

  grunt.registerMultiTask('console-clean', 'Clean files from "console" object', function () {

    var options = this.options()
      , reportError = (reportError in options) ? grunt.fail.warn : grunt.log.error;

    this.files.forEach(function (filePair) {
      filePair.src.forEach(function (src) {
        grunt.file.copy(src, filePair.dest, {
          process: function (content) {
            var regex = /(window\.)?console.([a-zA-Z]+)\([^;]*\);/g;
            var m, i = 0, replace = [];

            while ((m = regex.exec(content)) !== null) {

              if (m.index === regex.lastIndex) {
                  regex.lastIndex++;
              }

              if (
                !options.hasOwnProperty('allows') ||
                ('allows' in options && options.allows.indexOf(m[2]) === -1)
              ){

                var to = options.hasOwnProperty('strategy')
                  ? options.strategy(m[0])
                  : '/*' + m[0] + '*/';

                replace.push({
                  from: m[0],
                  to: to
                });
              }
            }

            replace.forEach(function (item) {
              content = content.replace(item.from, item.to);
              grunt.log.writeln('Replaced from ' + item.from.green + ' to ' + item.to.green);
            });

            return content;
          }
        });
      });
    });
  });
};