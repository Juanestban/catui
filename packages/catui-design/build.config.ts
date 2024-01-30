import path from 'node:path';
import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: [
    {
      builder: 'mkdist',
      input: './src/components/',
      outDir: './build/components',
      cleanDist: true,
      esbuild: {
        color: true,
        jsx: 'automatic',
      },
    },
    './src/index.ts',
    {
      builder: 'mkdist',
      input: './src/styles/',
      outDir: './build/styles',
      cleanDist: true,
    },
    {
      builder: 'mkdist',
      input: './src/utils/',
      outDir: './build/utils',
      cleanDist: true,
    },
    {
      builder: 'mkdist',
      input: './src/types/',
      outDir: './build/types',
      cleanDist: true,
    },
    {
      builder: 'mkdist',
      input: './src/hooks/',
      outDir: './build/hooks',
      cleanDist: true,
    },
  ],
  clean: true,
  outDir: 'build',
  declaration: true,
  sourcemap: true,
  failOnWarn: false,
});
