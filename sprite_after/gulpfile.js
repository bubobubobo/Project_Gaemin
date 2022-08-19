const gulp = require('gulp');
const spritesmith = require('gulp.spritesmith');

gulp.task('sprite', function() {
  const spriteData = gulp.src('./images/delivery-main/modified/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css',
    padding: 5
  }));
  return spriteData.pipe(gulp.dest('./images/sprites/modified'));
})