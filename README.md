# grunt-console-clean

[![NPM][grunt-console-clean-icon]][grunt-console-clean-url]

[![Build Status][grunt-clean-console-ci-image]][grunt-clean-console-ci-url]
[![devdependencies][grunt-console-clean-devdependencies-image]][grunt-console-clean-devdependencies-url]

Grunt plugin to clean up code from console object. All meet object are commented out e.g. `/*console.log('test');*/`

**Please note:** All used console object in your code should be end with ";" otherwise plugin won't work properly.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-console-clean --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-console-clean');
```

*This plugin was designed to work with Grunt 0.4.x. If you're still using grunt v0.3.x it's strongly recommended that [you upgrade](http://gruntjs.com/upgrading-from-0.3-to-0.4)*

## Console clean

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

### Options

##### variables
Name: allows
Type: `array`

This option is used to determine "console" object to be unchanged.

```javascript
options : {
   allows: ["log", "warn"]
}
```

Name: strategy
Type: `function`

This option is used to modify/comment-out found console object. It allows to change strategy of commeting from "/**/" to e.g. "//"

```javascript
options : {
  strategy: function (content) {
  	return '//' + content;
  }
}
```

### Usage Examples

#### Comment all console objects

_Run this task with the `grunt console-clean:all` command._

```js
all: {
  files : [
    { src: ['file.js'], dest: 'file.js' }
  ]
},
```

#### Leave "console.warn" objects

_Run this task with the `grunt console-clean:keepWarn` command._

```js
keepWarn: {
  options: {
    allows: ["warn"]
  },
  files : [
    { src: ['file.js'], dest: 'file.js' }
  ]
},
```

## Release History

 * 2015-07-11   v0.1.1   Updated dev dependencies.
 * 2015-07-11   v0.1.0   First version of plugin.

---

Task submitted by [Tomasz Czechowski](http://czechowski.pl/)

*This file was generated on Sat July 11 2015 12:47:00.*

[grunt-console-clean-icon]: https://nodei.co/npm/grunt-console-clean.png?downloads=true
[grunt-console-clean-url]: https://npmjs.org/package/grunt-console-clean
[grunt-clean-console-ci-image]: https://secure.travis-ci.org/tomaszczechowski/grunt-console-clean.png?branch=master
[grunt-clean-console-ci-url]: http://travis-ci.org/tomaszczechowski/grunt-console-clean
[grunt-console-clean-devdependencies-image]: https://david-dm.org/tomaszczechowski/grunt-console-clean/dev-status.png
[grunt-console-clean-devdependencies-url]: https://david-dm.org/tomaszczechowski/grunt-console-clean#info=devDependencies
