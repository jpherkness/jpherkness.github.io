const gulp = require("gulp");
const sass = require("gulp-ruby-sass");
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var sourcemaps = require("gulp-sourcemaps");
var autoprefixer = require("gulp-autoprefixer");
var browserSync = require("browser-sync");
var pug = require("gulp-pug");

/**
* Static Server
*/
gulp.task('serve', function () {
    browserSync.init({
        server: {baseDir: "./"},
        notify: false,
        browser: "firefox"
    });
    gulp.watch("./img/**/*").on('change', browserSync.reload);
    gulp.watch("./css/**/*.css").on('change', browserSync.reload);
    gulp.watch("./js/**/*.js").on('change', browserSync.reload);
    gulp.watch("./*.html").on('change', browserSync.reload);

    gulp.watch('./src/sass/*', gulp.series('sass'));
    gulp.watch('./src/pug/**/*.pug', gulp.series('pug'));
    gulp.watch('./src/js/**/*.js', gulp.series('js'));
});

/**
* Move the javascript files from source to dist
*/
gulp.task('js', function () {
  return gulp.src('./src/js/**/*.js')
    .pipe(gulp.dest('./js'))
    .pipe(browserSync.stream());
});

/**
* Compile the sass/scss files and place them into dist
*/
gulp.task('sass', function () {
  return sass('./src/sass/**/*.sass')
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
* Compile the pug files and place them into dest
*/
gulp.task('pug', function () {
  return gulp.src("./src/pug/**/!(_)*.pug")
    .pipe(pug({pretty: true}))
    .pipe(gulp.dest("./"))
});

/**
 * Default task
 */
gulp.task('default', gulp.series('sass', 'js', 'pug', 'serve'));
