"use strict";

var grunt = require('grunt');

exports.testWindowObject = function(test) {
  var content = grunt.file.read('test/test5/dist/replace.js')
  	,	regex1 = /\/\*window.console\.log\(test2\);\*\//g
  	,	regex2 = /\/\*console\.warn\('Test'\);\*\//g;

	test.equal(true, regex1.exec(content) !== null);
	test.equal(true, regex2.exec(content) !== null);

  test.done();
};
