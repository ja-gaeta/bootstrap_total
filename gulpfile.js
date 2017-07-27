var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-sass'),
	plumber = require('gulp-plumber'),
	livereload = require('gulp-livereload');

// Scripts Task
// Uglifies,
gulp.task('scripts', function(){
	gulp.src('js/*.js')
	.pipe(plumber())
	.pipe(uglify())
	.pipe(gulp.dest('build/js'));
});

// Styles Task
// Run sass
gulp.task('styles', function(){
	return gulp.src('scss/**/*.scss')
	.pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
	.pipe(gulp.dest('css/'))
	.pipe(livereload());
});

// HTML Task
// Reloads browser on html changes
gulp.task('html', function() {
	gulp.src('**/*.html')
	.pipe(livereload());
});

//  WatchTask
//  Watches js, scss, html
gulp.task('watch', function(){

	livereload.listen();
	gulp.watch('**/*.html', ['html']);
	gulp.watch('js/*.js', ['scripts']);
	gulp.watch('scss/**/*.scss', ['styles']);
});

gulp.task('default', ['scripts', 'styles', 'watch']);