# lut-canvas

[![npm](https://flat.badgen.net/npm/dt/lut-canvas)](https://npmcharts.com/compare/lut-canvas?minimal=true) [![npm](https://flat.badgen.net/npm/v/lut-canvas)](https://www.npmjs.com/package/lut-canvas) [![NPM](https://flat.badgen.net/github/license/linkgod/lut-canvas)](https://www.npmjs.com/package/lut-canvas)

Render RGB lookup tables via canvas.

## Installation

```
npm i lut-canvas -S
```

## Usage

```js
import renderLut from 'lut-canvas';

// Simple usage
renderLut();

// Advanced usage
renderLut({
  blockWidth: 64, // width of each color block
  num: 64, // number of color blocks
  row: 8, // number of rows of color blocks
}, document.body);
```

## Live demo

https://linkgod.github.io/lut-canvas/

![](https://gw.alicdn.com/tfs/TB1bgsjMhz1gK0jSZSgXXavwpXa-512-512.png)

## License

Licensed under [MIT](./LICENSE)
