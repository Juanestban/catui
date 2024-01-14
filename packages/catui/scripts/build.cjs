const path = require('node:path');
const child = require('node:child_process');
const chokidar = require('chokidar');

const src = path.resolve(__dirname, '../src');
console.log(src);
const theWatcher = chokidar.watch(src);

const build = () => {
  return new Promise((resolve, reject) => {
    child.exec('pnpm build', (error, stdout, stderr) => {
      if (error) {
        console.error('[-]', error);
        console.error(stderr);
        return reject(stderr);
      }

      return resolve(stdout);
    });
  });
};

theWatcher
  .on('add', (path, stats) => {})
  .on('change', async (path, stats) => {
    console.clear();
    console.log('[+] Building...');
    console.time('time building');
    await build();
    console.log('[+] file changed', path);
    console.timeEnd('time building');
  })
  .on('ready', () => {
    console.log('[ + ] FINALLY');
  })
  .on('error', (err) => {
    console.error('error on', err);
  });
