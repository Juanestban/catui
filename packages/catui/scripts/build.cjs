const path = require('node:path');
const chokidar = require('chokidar');

const src = path.resolve(__dirname, '../src');
console.log(src);
const theWatcher = chokidar.watch(src);

theWatcher
  .on('add', (path, stats) => {
    console.log('ADDED');
    console.log(path);
    console.log(stats);
  })
  .on('change', (path, stats) => {
    console.log('CHANGED');
    console.log(path);
    console.log(stats);
  })
  .on('ready', () => {
    console.log('[ + ] FINALLY');
  })
  .on('error', (err) => {
    console.error('error on', err);
  });
