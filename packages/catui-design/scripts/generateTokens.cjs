const path = require('node:path');
const fs = require('node:fs/promises');
const { exec } = require('node:child_process');

const { decisions, choices } = require('./tokens.cjs');

const root = process.cwd();
const css = path.resolve(root, 'src/styles/tokens.css');

const build = () => {
  return new Promise((resolve, reject) => {
    exec('pnpm unbuild', (error, stdout, stderr) => {
      if (error) {
        reject(stderr);
      }

      resolve(stdout);
    });
  });
};

const toKebabCase = (string) => {
  return string
    .replace(/([A-Z])([A-Z])/g, '$1-$2')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
};

const cleanLines = (string = '') => string.trim().replace(/^\n\n/gm, '\n');

function transformTokens(parentKey, object) {
  const objectKeys = Object.keys(object);

  return objectKeys.reduce((transformedTokens, objectKey) => {
    const value = object[objectKey];
    const customProperty = parentKey
      ? toKebabCase(`${parentKey}-${objectKey}`)
      : toKebabCase(`${objectKey}`);

    if (Array.isArray(value)) {
      return `${transformedTokens}\n  --${customProperty}: ${value.join(', ')};`;
    } else if (typeof value === 'object') {
      return `${transformedTokens}\n${transformTokens(customProperty, value)}`;
    }

    const label = `--${parentKey}-${toKebabCase(objectKey)}`;
    return `${transformedTokens}\n  ${label}: ${value};`;
  }, '');
}

async function buildTokens() {
  const { color, say, label, spinner } = await import('@astrojs/cli-kit');
  await say('Hi! Come on to generate css file tokens!', { clear: true });

  console.log(label('[+] generating tokens'));
  const transformedChoices = transformTokens(null, choices);
  const transformedDecisions = transformTokens(null, decisions);
  const customProperties = `${transformedChoices}${transformedDecisions}`;

  const data = `:root {\n  ${cleanLines(customProperties)}\n}\n`;

  console.log(label('[+] creating file css token'));
  await spinner({
    start: 'generating `tokens.css` file',
    end: 'created `tokens.css` file',
    while: () => fs.writeFile(css, data),
  });

  console.clear();
  console.log(label('[+] building'));
  await spinner({ start: 'starting build', end: 'end build', while: () => build() });

  console.clear();
  console.log(label('[+] build done'));
  process.exit(0);
}

buildTokens();
