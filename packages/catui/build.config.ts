import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: [
    {
      builder: 'mkdist',
      input: './src/',
      outDir: './dist',
      esbuild: {
        jsx: 'automatic',
      },
    },
  ],
  clean: true,
  outDir: 'dist',
  declaration: true,
  sourcemap: true,
  failOnWarn: false,
});
