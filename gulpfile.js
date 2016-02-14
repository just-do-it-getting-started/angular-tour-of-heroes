var gulp = require('gulp'),
	browserify = require("browserify");

// typescript
var typescript = require('gulp-tsc');

gulp.task('compile', function(){
	gulp.src('./app/**/*.ts', { read: false })
			.pipe(typescript({
				module: 'commonjs',
				target: 'ES5',
				"experimentalDecorators": true
			}))
			.pipe(gulp.dest('./dest/'))
});