"use strict";

var grunt = require('grunt');

exports.commentLogAndWarn = function(test) {
  var content = grunt.file.read('test/test2/dist/replace.js')
  	,	regex1 = /\/\*console\.log\(test2, test3\);\*\//g
  	,	regex2 = /\/\*console\.warn\('End test'\);\*\//g;

	test.equal(true, regex1.exec(content) !== null);
	test.equal(true, regex2.exec(content) !== null);

  test.done();
};
