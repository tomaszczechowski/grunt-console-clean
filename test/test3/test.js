"use strict";

var grunt = require('grunt');

exports.commentLogLeaveWarn = function(test) {
  var content = grunt.file.read('test/test3/dist/replace.js')
  	,	regex1 = /\/\*console\.log\(test2\);\*\//g
  	,	regex2 = /\/\*console\.warn\('End test'\);\*\//g;

	test.equal(true, regex1.exec(content) !== null);
	test.equal(true, regex2.exec(content) === null);

  test.done();
};
