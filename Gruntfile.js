'use strict';
module.exports = function (grunt) {
    var sourceFiles = [
        'javascripts/*.js',
        'test/spec/dummySpec.js'
    ];

    require('jit-grunt')(grunt, {
        bower: 'grunt-bower-installer'
    });

    grunt.initConfig({
        githooks: {
            all: {
                'pre-commit': 'karma'
            }
        },
        watch: {
            options: { spawn: false },
            js: {
                files: sourceFiles,
                tasks: ['karma', 'newer:jshint', 'newer:jscs']
            }
        },
        jscs: {
            options: { config: '.jscsrc' },
            files: { src: sourceFiles }
        },
        jshint: {
            options: { jshintrc: true },
            files: { src: sourceFiles }
        },
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
                        'bower_components/angular/angular.js',
                        'bower_components/angular-mocks/angular-mocks.js',
                        'javscripts/app.js',
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
        browserSync: {
            bsFiles: {
                src: ['test/SpecRunner.html']
            },
            options: {
                watchTask: true,
                host: '0.0.0.0',
                server: {
                    baseDir: './test/'
                },
                open: true,
                ghostMode: {
                    clicks: true,
                    scroll: true,
                    location: true,
                    forms: true
                }
            } }
    });
    grunt.registerTask('default', ['bower', 'concurrent:watch', 'browserSync']);
};
