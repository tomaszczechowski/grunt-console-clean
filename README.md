# grunt-console-clean [![Build Status](https://secure.travis-ci.org/tomaszczechowski/grunt-console-clean.png?branch=master)](http://travis-ci.org/tomaszczechowski/grunt-console-clean)

Grunt plugin to clean up code from console object. All meet object are commented out e.g. "/*console.log('test');*/"

*Please note:* All used console object in your code should be end with ";" otherwise plugin won't work properly.

## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-console-clean --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-console-clean');
```

*This plugin was designed to work with Grunt 0.4.x. If you're still using grunt v0.3.x it's strongly recommended that [you upgrade](http://gruntjs.com/upgrading-from-0.3-to-0.4), but in case you can't please use [v0.3.2](https://github.com/outaTiME/grunt-replace/tree/grunt-0.3-stable).*

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

 * 2015-07-11   v0.1.0   First version of plugin.

---

Task submitted by [Tomasz Czechowski](http://czechowski.pl/)

*This file was generated on Sat July 11 2015 12:47:00.*

