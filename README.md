# lut-canvas

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

## Sample

![](https://gw.alicdn.com/tfs/TB1bgsjMhz1gK0jSZSgXXavwpXa-512-512.png)

## License

Licensed under [MIT](./LICENSE)
