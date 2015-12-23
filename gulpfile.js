var gulp = require('gulp');
var jasmineBrowser = require('gulp-jasmine-browser');
var webpack = require('webpack-stream');
var JasminePlugin = require('gulp-jasmine-browser/webpack/jasmine-plugin');
var plugin = new JasminePlugin();
var specFiles = ['spec/**/*_spec.js'];

var webpackConfig = {
  output: {filename: 'test.js'},
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [plugin]
};

gulp.task('spec', function() {
  return gulp.src(specFiles)
    .pipe(webpack(webpackConfig))
    .pipe(jasmineBrowser.specRunner())
    .pipe(jasmineBrowser.server({whenReady: plugin.whenReady}));
});

gulp.task('spec-console', function() {
  return gulp.src(specFiles)
    .pipe(webpack(webpackConfig))
    .pipe(jasmineBrowser.specRunner({console: true}))
    .pipe(jasmineBrowser.headless({whenReady: plugin.whenReady}));
});

gulp.task('default', function(){
  var watchConfig = JSON.parse(JSON.stringify(webpackConfig))
  watchConfig.watch = true;

  return gulp.src(specFiles)
    .pipe(webpack(watchConfig))
    .pipe(jasmineBrowser.specRunner({console: true}))
    .pipe(jasmineBrowser.headless({whenReady: plugin.whenReady}));
});
