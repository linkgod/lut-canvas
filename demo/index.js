import './styles.css';
import renderLut from '../src/index';

document.getElementById('app').innerHTML = `
  <h1>Look Up Table</h1>
  <canvas id="lut"></canvas>
`;

renderLut({
  chunkWidth: 64,
  num: 64,
  row: 8,
}, document.getElementById('lut'));
