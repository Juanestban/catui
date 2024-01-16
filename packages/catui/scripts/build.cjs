const { exec } = require('./promises.cjs');

const run = async () => {
  const { say, spinner } = await import('@astrojs/cli-kit');
  await say('Come on to build!', { clear: true });
  await spinner({
    start: 'Generating tokens css',
    end: 'created css tokens',
    while: () => exec(`pnpm gen:tokens`),
  });

  await spinner({
    start: 'Building components',
    end: 'build finished',
    while: () => exec(`pnpm unbuild`),
  });
};

run();
