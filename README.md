# react-mini-alert-confirm

[![NPM version](https://img.shields.io/npm/v/mini-alert-confirm.svg?style=flat)](https://www.npmjs.com/package/mini-alert-confirm)

Simple and easy configurable alert/confirm dialog box for Javascript.

![mini-alert-confirm](https://user-images.githubusercontent.com/6490641/83878015-5fc2e400-a733-11ea-93d6-b157c96afd46.gif "mini-alert-confirm")

## Installation

```bash
$ npm i mini-alert-confirm
```

## Import

add the following code on your index.js

```js

import miniAlertConfirm from 'mini-alert-confirm';
// import 'mini-alert-confirm/index.css';                   // <!-- CSS file (optional, if you want to customize the dialog box)

alert = function (text) { miniAlertConfirm(text); }
confirm = function (text, callback) { miniAlertConfirm(text, callback); }

```

## Examples

after importing the library you can just call `alert` and `confirm`

```js

alert("I'm a beautiful alert popup!!");

confirm("Do you like this popup?", () => {

    console.log("I'm a callback if you press OK button");

})

```

## Demo

[Just a example project where you can see mini-alert-confirm in action..](https://scammy.is)

## License

Licensed under MIT