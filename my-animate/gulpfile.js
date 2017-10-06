var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');

var Paths = {
    src: {
        sass: "src/sass/",
        js: "src/js/",
        lib: "src/lib/",
        images: "src/images/"
    },
    dist: {
        css: "dist/css/",
        js: "dist/js/",
        lib: "dist/lib/",
        images: "dist/images/"
    }
};

gulp.task('sass', function () {
    return gulp.src(Paths.src.sass + 'style.scss')
        .pipe(sass({
            outputStyle: 'compact'
        }).on('error', sass.logError))
        .pipe(gulp.dest(Paths.dist.css));
});

gulp.task('prefixer', ['sass'], function () {
    return gulp.src(Paths.dist.css + 'style.css')
        .pipe(postcss([autoprefixer({
            browsers: ['last 4 versions', 'not ie <= 8', 'Android >= 4.0', 'ios > 7', 'ff >= 15']
        })]))
        .pipe(gulp.dest(Paths.dist.css))
});


gulp.task('babel', function () {
    return gulp.src(Paths.src.js + '*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest(Paths.dist.js));
});

gulp.task('watch', function () {
    gulp.watch(Paths.src.sass + '**/*.scss', ['prefixer']);
    gulp.watch(Paths.src.js + '*.js', ['babel']);
});

// 默认编译scss 
gulp.task('default', ['watch']);

// dist 打包
gulp.task('lib', function () {
    return gulp.src(Paths.src.lib + '**/*')
        .pipe(gulp.dest(Paths.dist.lib));
});

gulp.task('image', ['lib'], function () {
    return gulp.src(Paths.src.images + '**/*')
        .pipe(gulp.dest(Paths.dist.images));
});

gulp.task('dist', ['image']);