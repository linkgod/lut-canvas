/**
 * @param {object} options
 * @param {number} options.chunkWidth 每个色块的宽度，默认为 64 像素
 * @param {number} options.num 色块的个数，默认为 64 个
 * @param {number} options.row 色块的排列行数，默认为 8 行
 * @param {HTMLElement || HTMLCanvasElement} container
 * @returns {HTMLCanvasElement}
 **/
export default function renderLut(
  options = {},
  container = document.body
) {
  const chunkWidth = Math.round(options.chunkWidth) || 64;
  const { num = 64, row = 8 } = options;
  const col = Math.ceil(num / row);

  const canvas = container instanceof HTMLCanvasElement ?
    container : document.createElement('canvas');
  canvas.width = chunkWidth * col;
  canvas.height = chunkWidth * row;

  const { width, height } = canvas;
  const ctx = canvas.getContext('2d');
  const image = ctx.getImageData(0, 0, width, height);

  let [r, g, b] = []
  for (r = 0; r < chunkWidth; r += 1) {
    for (g = 0; g < chunkWidth; g += 1) {
      for (b = 0; b < num; b += 1) {
        const x = r + b % col * chunkWidth;
        const y = g + Math.floor(b / col) * chunkWidth;

        image.data[(x + y * width) * 4] = r / (chunkWidth - 1) * 255;
        image.data[(x + y * width) * 4 + 1] = g / (chunkWidth - 1) * 255;
        image.data[(x + y * width) * 4 + 2] = b / (num - 1) * 255;
        image.data[(x + y * width) * 4 + 3] = 255; // Alpha Channel
      }
    }
  }

  ctx.putImageData(image, 0, 0)

  if (!(container instanceof HTMLCanvasElement)) {
    container.appendChild(canvas);
  }

  return canvas
};
