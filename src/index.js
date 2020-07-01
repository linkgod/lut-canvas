/**
 * @param {object} options
 * @param {number} options.blockWidth The width of each color block, the default is 64 pixels
 * @param {number} options.num The number of color blocks, the default is 64
 * @param {number} options.row The number of rows of color blocks, the default is 8 rows
 * @param {HTMLElement || HTMLCanvasElement} container
 * @returns {HTMLCanvasElement}
 **/
export default function renderLut(
  options = {},
  container = document.body
) {
  const blockWidth = Math.round(options.chunkWidth) || 64;
  const { num = 64, row = 8 } = options;
  const col = Math.ceil(num / row);

  const canvas = container instanceof HTMLCanvasElement ?
    container : document.createElement('canvas');
  canvas.width = blockWidth * col;
  canvas.height = blockWidth * row;

  const { width, height } = canvas;
  const ctx = canvas.getContext('2d');
  const image = ctx.getImageData(0, 0, width, height);

  let [r, g, b] = []
  for (r = 0; r < blockWidth; r += 1) {
    for (g = 0; g < blockWidth; g += 1) {
      for (b = 0; b < num; b += 1) {
        const x = r + b % col * blockWidth;
        const y = g + Math.floor(b / col) * blockWidth;

        image.data[(x + y * width) * 4] = r / (blockWidth - 1) * 255;
        image.data[(x + y * width) * 4 + 1] = g / (blockWidth - 1) * 255;
        image.data[(x + y * width) * 4 + 2] = b / (num - 1) * 255;
        image.data[(x + y * width) * 4 + 3] = 255;
      }
    }
  }

  ctx.putImageData(image, 0, 0)

  if (!(container instanceof HTMLCanvasElement)) {
    container.appendChild(canvas);
  }

  return canvas
};
