function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (global, factory) {
  (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global = global || self, global.renderLut = factory());
})(this, function () {
  'use strict';
  /**
   * @param {object} options
   * @param {number} options.blockWidth The width of each color block, the default is 64 pixels
   * @param {number} options.num The number of color blocks, the default is 64
   * @param {number} options.row The number of rows of color blocks, the default is 8 rows
   * @param {HTMLElement || HTMLCanvasElement} container
   * @returns {HTMLCanvasElement}
   **/

  function renderLut() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var container = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.body;
    var blockWidth = Math.round(options.chunkWidth) || 64;
    var _options$num = options.num,
        num = _options$num === void 0 ? 64 : _options$num,
        _options$row = options.row,
        row = _options$row === void 0 ? 8 : _options$row;
    var col = Math.ceil(num / row);
    var canvas = container instanceof HTMLCanvasElement ? container : document.createElement('canvas');
    canvas.width = blockWidth * col;
    canvas.height = blockWidth * row;
    var width = canvas.width,
        height = canvas.height;
    var ctx = canvas.getContext('2d');
    var image = ctx.getImageData(0, 0, width, height);
    var _ref = [],
        r = _ref[0],
        g = _ref[1],
        b = _ref[2];

    for (r = 0; r < blockWidth; r += 1) {
      for (g = 0; g < blockWidth; g += 1) {
        for (b = 0; b < num; b += 1) {
          var x = r + b % col * blockWidth;
          var y = g + Math.floor(b / col) * blockWidth;
          image.data[(x + y * width) * 4] = r / (blockWidth - 1) * 255;
          image.data[(x + y * width) * 4 + 1] = g / (blockWidth - 1) * 255;
          image.data[(x + y * width) * 4 + 2] = b / (num - 1) * 255;
          image.data[(x + y * width) * 4 + 3] = 255;
        }
      }
    }

    ctx.putImageData(image, 0, 0);

    if (!(container instanceof HTMLCanvasElement)) {
      container.appendChild(canvas);
    }

    return canvas;
  }

  return renderLut;
});
