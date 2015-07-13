"use strict";

var grunt = require('grunt');

exports.testStrategyOption = function(test) {
  var content = grunt.file.read('test/test4/dist/replace.js')
  	,	regex = /\/\/console\.log\(test2\);/g;

	test.equal(true, regex.exec(content) !== null);

  test.done();
};
