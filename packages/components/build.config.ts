import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: [
    {
      builder: "mkdist",
      input: "./src/",
      outDir: "./dist",
    },
  ],
  clean: true,
  outDir: "dist",
  declaration: true,
  sourcemap: true,
  rollup: {
    emitCJS: true,
  },
});
