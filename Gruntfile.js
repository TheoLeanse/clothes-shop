'use strict';
module.exports = function (grunt) {
    var sourceFiles = ['javascripts/*.js', 'test/**/*Spec.js'];

    require('jit-grunt')(grunt, {
        bower: 'grunt-bower-installer'
    });

    grunt.initConfig({
        githooks: {},
        watch: { options: { spawn: false },
                 js: { files: sourceFiles,
                       tasks: ['newer:jshint', 'newer:jscs', 'karma'] } },
        jscs: { options: { config: '.jscsrc' }, files: { src: sourceFiles } },
        jshint: { options: { jshintrc: true }, files: { src: sourceFiles } },
        bower: { install: {} },
        concurrent: {
            options: {
                logConcurrentOutput: true
            },
            watch: ['watch:js']
        },
        karma: {
            unit: {
                singleRun: true,
                options: {
                    files: [
                        'test/**/*Spec.js'
                    ],
                    plugins: [
                        'karma-chrome-launcher',
                        'karma-jasmine',
                        'karma-phantomjs-launcher'
                    ],
                    browsers: ['PhantomJS'],
                    frameworks: ['jasmine']
                }
            }
        },
        browserSync: {}
    });
    grunt.registerTask('default', ['bower', 'concurrent:watch', 'browserSync']);
};
