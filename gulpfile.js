var gulp = require('gulp');
var cleanhtml = require('gulp-cleanhtml');

var paths = {
    bower: './bower_components/',
    assets: './dist/assets/',
    src: './src/',
    html: './src/client/**/*.html'
};

gulp.task('copy:html', function() {
    return gulp.src(paths.html)
               .pipe(cleanhtml())
               .pipe(gulp.dest('./dist'));
});

gulp.task('copy:js', function() {
    return gulp.src([paths.bower + 'jquery/dist/jquery.js',
                     paths.bower + 'bootstrap/dist/js/bootstrap.js',
                     paths.bower + 'react/react.js',
                     paths.bower + 'react/react-dom.js',
                     paths.bower + 'system.js/dist/system.js',
                     paths.bower + 'react-router/umd/ReactRouter.js'])
               .pipe(gulp.dest(paths.assets + 'js/lib'));
});

gulp.task('copy:systemjs', function() {
    return gulp.src('./src/client/systemjs.config.js')
               .pipe(gulp.dest('./dist/assets/js'));
});

gulp.task('copy:app', function() {
    return gulp.src(['./pre/**/*', '!./pre/**/*.map'])
               .pipe(gulp.dest('./dist/app'));
});

gulp.task('copy:css', function() {
    return gulp.src(['!' + paths.bower + 'bootstrap/dist/css/*.min.css*',
                     paths.bower + 'bootstrap/dist/css/*.css'])
               .pipe(gulp.dest(paths.assets + 'css'));
});

gulp.task('copy:fonts', function() {
    return gulp.src([paths.bower + 'bootstrap/dist/fonts/*.*'])
               .pipe(gulp.dest(paths.assets + 'fonts'));
});

gulp.task('build', ['copy:html', 'copy:js', 'copy:css', 'copy:fonts', 'copy:systemjs', 'copy:app']);

gulp.task('default', ['build']);