var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    changed = require('gulp-changed'),
    imagemin = require('gulp-imagemin'),
    minifyHtml = require('gulp-minify-html'),
    concat = require('gulp-concat'),
    stripDebug = require('gulp-strip-debug'),
    uglify = require('gulp-uglify');

gulp.task('jshint', function() {
	gulp.src('./src/scripts/*.js')
	    .pipe(jshint())
	    .pipe(jshint.reporter('default'));
});

gulp.task('imagemin', function() {
	var imgSrc = './src/images/**/*',
        imgDst = './build/images';

    gulp.src(imgSrc)
        .pipe(changed(imgDst))
        .pipe(imagemin())
        .pipe(gulp.dest(imgDst));
});

gulp.task('htmlpage', function() {
	var htmlSrc = './src/*.html',
	    htmlDst = './build';

	gulp.src(htmlSrc)
	    .pipe(changed(htmlDst))
	    .pipe(minifyHtml())
	    .pipe(gulp.dest(htmlDst));
});

gulp.task('scripts', function() {
	gulp.src(['./src/scripts/lib.js', './src/scripts/*.js'])
	    .pipe(concat('script.js'))
	    .pipe(stripDebug())
	    .pipe(uglify())
	    .pipe(gulp.dest('./build/scripts/'));
});
