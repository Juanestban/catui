const path = require('node:path');
const chokidar = require('chokidar');

const { exec } = require('./promises.cjs');

const watch = () => {
  const src = path.resolve(__dirname, '../src');
  const theWatcher = chokidar.watch(src);

  theWatcher
    .on('change', async (path, stats) => {
      const { spinner, label } = await import('@astrojs/cli-kit');
      const component = path.split('/src')[1];

      console.clear();
      console.log(label('[+] Starting build'), '\n');
      console.time('time building');

      await spinner({ start: 'Building...', end: 'Done build', while: () => exec('pnpm unbuild') });

      console.log('\n', label(`[+] file changed ${component}`));
      console.timeEnd('time building');
    })
    .on('ready', async () => {
      const { color } = await import('@astrojs/cli-kit');

      console.log('');
      console.log(color.cyan('"Ctrl + C" for finish the process 🐱‍💻'));
    })
    .on('error', (err) => {
      console.error('error on', err);
      process.exit(1);
    });
};

watch();

process.on('SIGINT', () => {
  console.log('SIGINT');
  process.exit(0);
});
