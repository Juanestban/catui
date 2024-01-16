import { defineBuildConfig } from 'unbuild';
import tsConfig from './tsconfig.json';

export default defineBuildConfig({
  entries: [
    {
      builder: 'mkdist',
      input: './src/',
      outDir: './dist',
      cleanDist: true,
      esbuild: {
        color: true,
        jsx: 'automatic',
      },
    },
  ],
  rollup: {
    cjsBridge: true,
  },
  clean: true,
  outDir: 'dist',
  declaration: true,
  sourcemap: true,
  failOnWarn: false,
});
