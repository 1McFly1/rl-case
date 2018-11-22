var
 gulp  = require("gulp"),
 livereload = require("gulp-livereload");
 
gulp.task("reload-css", function() {
 gulp.src('./NiceTry/*.css')
 .pipe(livereload());
});

gulp.task("default", function() {
 livereload.listen();
 gulp.watch('./NiceTry/*.css', ['reload-css']);
});﻿