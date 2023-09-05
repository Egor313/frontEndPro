const { src, dest, series, parallel, watch } = require('gulp');
const concat = require('gulp-concat');
const clean = require('gulp-clean');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps'); 
const browserSync = require('browser-sync').create();
const sourcesJs = [
    "./src/index.js",
    "../lib/isValidation/isEmpty.js",
    "../lib/isValidation/isValidNumber.js",
    "../lib/form/getFormData.js",
    "../lib/form/clearFormData.js",
    "../lib/showError.js",
    "../lib/generateTemplate.js"
];
const sourceHtml = './src/*.html';
const sourceCss = './src/*.css';
const sourceDist = './dist';
const sourceAppJs = 'app.js';
const sourceAppCss = 'app.css';
const sourceIndexHtml = './src/index.html';



function startTask(done) {
    browserSync.init({
        server: {
            baseDir: sourceDist
        }
    });

    watch(sourceHtml, series(copyHtmlTask, reloadBrowser))
    watch(sourcesJs, series(copyJsTask, reloadBrowser))
    watch(sourceCss, series(copyCssTask, reloadBrowser))

    done()
}

function reloadBrowser(done) {
    browserSync.reload()
    done()
}

function buildTask() {
   return series(
    clearDistTask,
    parallel(
        copyHtmlTask,
        copyJsTask,
        copyCssTask,
    )) 
}


function clearDistTask() {
    return src(sourceDist, {read: false, allowEmpty: true}).pipe(clean());
}

function copyHtmlTask() {
    return src(sourceIndexHtml).pipe(dest(sourceDist))
}

function copyJsTask() {
    return src(sourcesJs)
        .pipe(concat(sourceAppJs))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(dest(sourceDist))
}

function copyCssTask() {
    return src(sourceCss)
        .pipe(concat(sourceAppCss))
        .pipe(dest(sourceDist))
}
  
exports.build = buildTask()
exports.start = series(buildTask(), startTask)