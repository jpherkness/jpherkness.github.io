var gulp = require("gulp");
var sass = require("gulp-ruby-sass");
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var sourcemaps = require("gulp-sourcemaps");
var autoprefixer = require("gulp-autoprefixer");
var plumber = require("gulp-plumber");
var browserSync = require("browser-sync");
var notify = require("gulp-notify");
var pug = require("gulp-pug");

gulp.task('default', ['sass', 'js', 'browser-sync', 'pug', 'watch']);

/**
* Watched files for changes
*/

gulp.task('watch', () => {
  gulp.watch('./src/sass/*', ['sass']);
  gulp.watch('./src/pug/**/*.pug', ['pug']);
  gulp.watch('./src/js/**/*.js', ['js']);
});

/**
* Syncs the browser when certain files are changed
*/

gulp.task('browser-sync', () => {
    browserSync.init({
        server: {baseDir: "./"},
        notify: false
    });
    gulp.watch("./img/**/*",     ['reload']);
    gulp.watch("./css/**/*.css", ['reload']);
	  gulp.watch("./js/**/*.js",   ['reload']);
    gulp.watch("./*.html",       ['reload']);
});

gulp.task('reload', () => {
    browserSync.reload();
});

/**
* Move the javascript files from source to dist
*/
gulp.task('js', () => {
  gulp.src('./src/js/**/*.js')
  .pipe(gulp.dest('./js'))
  .pipe(browserSync.stream());
});

/**
* Compile the sass/scss files and place them into dist
*/
gulp.task("sass", () => {
  return sass("./src/sass/**/*.sass")
  .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
  }))
  .pipe(sourcemaps.init())
  .pipe(autoprefixer())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./css'))
  .pipe(browserSync.stream())
  .pipe(cssmin())
  .pipe(rename({ suffix: '.min' }))
  .pipe(gulp.dest('./css'))
  .pipe(browserSync.stream())
});

/**
* Compile the pug files and place them into dist
*/
gulp.task("pug", () => {
  var option = {
    pretty: true
  }
  gulp.src("./src/pug/**/!(_)*.pug")
  .pipe(plumber({
    errorHandler: notify.onError("Error: <%= error.message %>")
  }))
  .pipe(pug(option))
  .pipe(gulp.dest("./"))
});
