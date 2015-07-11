"use strict";

var grunt = require('grunt');

exports.commentLog = function(test) {
  var content = grunt.file.read('test/test1/dist/replace.js')
  	,	regex = /\/\*console\.log\(i\);\*\//g;

	test.equal(true, regex.exec(content) !== null);

  test.done();
};
