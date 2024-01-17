import { defineBuildConfig } from 'unbuild';
import tsConfig from './tsconfig.json';

export default defineBuildConfig({
  entries: [
    {
      builder: 'mkdist',
      input: './src/components/',
      outDir: './build',
      cleanDist: true,
      esbuild: {
        color: true,
        jsx: 'automatic',
      },
    },
  ],
  rollup: {
    cjsBridge: true,
    esbuild: {
      exclude: ['*.stories.ts', '*.stories.tsx'],
    },
  },
  clean: true,
  outDir: 'dist',
  declaration: true,
  sourcemap: true,
  failOnWarn: false,
});
