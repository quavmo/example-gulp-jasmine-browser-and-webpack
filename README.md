# example-gulp-jasmine-browser-and-webpack
The tiniest setup for running gulp-jasmine-browser with webpack-stream

A repo with three gulp tasks: `spec`, `spec-console`, & `spec-console-watch`.

After `npm install`, you can see `gulp spec-console` fail tests. Hurray!

`gulp spec-console-watch` logs recognition of changes without re-running specs, e.g. 

```
[14:05:18] Starting 'spec-console-watch'...
[14:05:19] Version: webpack 1.12.9
  Asset     Size  Chunks             Chunk Names
test.js  1.65 kB       0  [emitted]  main
[14:05:19] webpack is watching for changes
[14:05:25] Version: webpack 1.12.9
[14:05:25] webpack is watching for changes
[14:05:26] Version: webpack 1.12.9
[14:05:26] webpack is watching for changes
[14:07:05] Version: webpack 1.12.9
[14:07:05] webpack is watching for changes
[14:07:06] webpack is watching for changes
^C
```

:cry:
