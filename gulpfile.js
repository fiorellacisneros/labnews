var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');

var config = {
    source: './src/',
    dist: './public'
};

var paths = {
    assets: "/assets/",
    html: "**/*.html",
    sass: "scss/**/*.scss",
    mainSass: "scss/main.scss",
    js: "assets/js/",
    img: "assets/img/*.png",
    moreimg: "assets/img/**/*.png",
    components: "assets/js/components/",
    //components:"js/components/*",
    bootstrapCSS: "scss/bootstrap.min.css",
    json:"js/utils/get-json.js",
    mainJS: "js/index.js",
    bootstrapJS: "js/bootstrap.min.js",
};

var sources = {
    assets: config.source + paths.assets,
    html: config.source + paths.html,
    sass: paths.assets + paths.sass,
    rootSass: config.source + paths.assets + paths.mainSass,
    js: config.source + paths.js,
    img: config.source + paths.img,
    components: config.source + paths.components
};

gulp.task('html', () => {
    gulp.src(sources.html).pipe(gulp.dest(config.dist));
});

gulp.task('alljs', () => {
    gulp.src([sources.components + 'header.js' + 'navbar.js', sources.js + 'index.js' + 'jquery-3.2.1.min.js'])
        .pipe(concat("bundle.js"))
        .pipe(gulp.dest('./public/assets/js/'));
});
/*gulp.task('components',function () {
    gulp.src(sources.components).pipe(gulp.dest(config.dist + paths.assets + "js/components"))

});*/

gulp.task('bootstrapJS',function () {
    gulp.src(sources.bootstrap).pipe(gulp.dest(config.dist + paths.assets + "js/bootstrap"))

});
/*gulp.task("js", () => {
    gulp.src(sources.rootJS)
        .pipe(browserify())
        .pipe(gulp.dest(config.dist + paths.assets + "js"));
});*/

gulp.task('sass', ()=> {
    console.log(sources.rootSass);
    gulp.src(sources.rootSass)
        .pipe(sass({
        outputStyle: "compressed"
    }).on("Error", sass.logError))
        .pipe(gulp.dest(config.dist + paths.assets + "css"));
});

gulp.task('img', () => {
    gulp.src(sources.img).pipe(gulp.dest(config.dist + paths.assets + "img"))

});

gulp.task("sass-watch", ["sass"], function (done) {
    //browserSync.reload();
    done();
});

gulp.task("html-watch", ["html"], function (done) {
    //browserSync.reload();
    done();
});

gulp.task("alljs-watch", ["alljs"], function (done) {
    //browserSync.reload();
    done();
});

/*gulp.task("js-watch", ["js"], function (done) {
    browserSync.reload();
    done();
});*/


gulp.task("serve", () => {
    /*browserSync.init({
        server: {
            baseDir: config.dist
        }
    });*/
    
    gulp.watch(sources.html, ["html-watch"]);
    gulp.watch(sources.rootSass, ["sass-watch"]);
    gulp.watch(['./src/assets/js/components/*.js', sources.js +'index.js'], ["alljs-watch"]);
});


/*gulp.task('run', ['serve', 'html-watch', 'js-watch', 'sass-watch', 'vendor', 'components', 'img', 'vendor','bootstrapJS', 'bootstrapCSS']);*/