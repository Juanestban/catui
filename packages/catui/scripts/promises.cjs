const child = require('node:child_process');

const exec = (cmd) => {
  return new Promise((resolve, reject) => {
    child.exec(cmd, (error, stdout, stderr) => {
      if (error) {
        console.error('[-]', error);
        console.error(stderr);
        return reject(stderr);
      }

      return resolve(stdout);
    });
  });
};

const child_process = { exec };

module.exports = child_process;
