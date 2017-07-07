'use strict';
var gulp = require('gulp');
var fs = require('fs');

gulp.task('stat', function(cb){
  fs.readdir('./latest', function(err, files){
    files = files.filter(function(file){
      return file.match(/.*\.tar\.gz/);
    });
    console.log("Stats for file", files[0]);
    fs.stat( './latest/' + files[0], function(err, stat){
      console.log("Size:  ",stat.size);
      return cb()
    });
  });

});