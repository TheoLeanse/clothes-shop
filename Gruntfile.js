'use strict';
module.exports = function (grunt) {
    var sourceFiles = [
        'public/javascripts/*.js',
        'public/javascripts/products.js',
        'test/spec/productsSpec.js',
        'test/spec/storeControllerSpec.js'
    ];
    grunt.loadNpmTasks('grunt-protractor-runner');
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
                tasks: ['karma', 'newer:jscs', 'newer:jshint']
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
                        'public/bower_components/angular/angular.js',
                        'public/bower_components/angular-mocks/angular-mocks.js',
                        'public//javascripts/ui-bootstrap-custom-build/ui-bootstrap-custom-tpls-0.13.4.min.js',
                        'public/javascripts/app.js',
                        'public/javascripts/storeController.js',
                        'public/javascripts/products.js',
                        'test/spec/productsSpec.js',
                        'test/spec/storeControllerSpec.js'
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
                src: [
                    'test/index.html',
                    'public/javascripts/app.js',
                    'public/javascripts/products.js',
                    'public/javascripts/storeController.js',
                    'test/spec/productsSpec.js',
                    'test/spec/storeControllerSpec.js',
                    'public/bower_components/jasmine-core/lib/jasmine-core/jasmine.js'
                ]
            },
            options: {
                watchTask: true,
                host: '0.0.0.0',
                server: {
                    baseDir: [
                        'test',
                        'public/javascripts',
                        'public/bower_components',
                        './'
                    ]
                },
                open: true,
                ghostMode: {
                    clicks: true,
                    scroll: true,
                    location: true,
                    forms: true
                }
            }
        },
        protractor: {
            options: {
                configFile: 'node_modules/protractor/example/conf.js',
                keepAive: true,
                noColor: false
            },
            all: {
                options: {
                    configFile: 'test/e2e/conf.js'
                }
            }
        }
    });
    grunt.registerTask('default', ['bower', 'browserSync', 'concurrent:watch']);
};
