var gulp = require('gulp');
var connect = require('gulp-connect');
var stylus = require('gulp-stylus');

gulp.task('connect', function() {
	connect.server({
		root: './dist',
		livereload: true,
		port: 5555
	});
});

gulp.task('html', function() {
	return gulp.src('./src/*.html')
	.pipe(gulp.dest('./dist/'))
	.pipe(connect.reload());
});

gulp.task('js', function() {
	return gulp.src('./src/js/*.js')
	.pipe(gulp.dest('./dist/js'))
	.pipe(connect.reload());
});

gulp.task('stylusToCss', function() {
	return gulp.src('./src/stylus/*.styl')
	.pipe(stylus())
	.pipe(gulp.dest('./dist/stylus/'));
});

gulp.task('bootstrap', function() {
	return gulp.src('./node_modules/bootstrap/dist/css/bootstrap.css')
	.pipe(gulp.dest('./dist/vendors/'));
});

gulp.task('images', function() {
	return gulp.src('./src/images/**/*.{png,jpg,jpeg,svg}')
	.pipe(gulp.dest('./dist/images/'));
});

gulp.task('watch', function() {
	gulp.watch(['./src/*.html'], ['html']);
	gulp.watch(['./src/stylus/*.styl'], ['stylusToCss']);
	gulp.watch(['./src/js/main.js'], ['js']);
});

gulp.task('default', ['html','js', 'stylusToCss','bootstrap', 'images', 'connect', 'watch']);