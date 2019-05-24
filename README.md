# Babel Plugin XSS [![Build Status](https://travis-ci.org/ycjcl868/babel-plugin-xss.svg?branch=master)](https://travis-ci.org/ycjcl868/babel-plugin-xss) [![Codecov](https://img.shields.io/codecov/c/github/ycjcl868/babel-plugin-xss/master.svg?style=flat-square)](https://codecov.io/gh/ycjcl868/babel-plugin-xss/branch/master) [![npm package](https://img.shields.io/npm/v/babel-plugin-xss.svg?style=flat-square)](https://www.npmjs.org/package/babel-plugin-xss)

## Examples

## Install

```
npm install babel-plugin-xss --save-dev
```

## Use
Add a `.babelrc` file and write:
```javascript
{
  "plugins": [
    "babel-plugin-xss"
  ]
}
```
or pass the plugin with the plugins-flag on CLI
```
babel-node myfile.js --plugins babel-plugin-xss
```

## Customize
If you want to enable different file extensions, you can define them in your `.babelrc` file
```javascript
{
  "plugins": [
    ["babel-plugin-xss", {
      "handler": (content) => {
        return content.replace(/alert/);
      }
    }]
  ]
}
```

## Motivate
If you like this project just give it a star :) I like stars.
