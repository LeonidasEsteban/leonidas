var gulp = require('gulp')
var critical = require('critical')
var stylus = require('gulp-stylus')
var watch = require('gulp-watch')
var livereload = require('gulp-livereload')
var nib = require('nib')
var rupture = require('rupture')


gulp.task('critical', function(){
    critical.generateInline({
        base: './',
        src: 'index.html',
        // styleTarget: 'static/css/estilos.css',
        css: 'static/css/estilos.css',
        htmlTarget: 'index.html',
        minify: true,
        width : 1440,
        height : 700,
    });
});


gulp.task('watch', function(){
    livereload.listen();
    gulp.watch('./static/stylus/estilos.styl',['stylus', 'critical']);
});


gulp.task('stylus', function(){
    gulp.src("./static/stylus/estilos.styl")
    .pipe(stylus({
        compress:true,
        url: 'embedurl',
        use: [
            nib(),
            rupture()
        ],
        import : [
            'nib',
        ],
        
        }))

    .pipe(gulp.dest("./static/css/"))
    .pipe(livereload({auto:true}));

});