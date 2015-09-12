'use strict';
module.exports = function (grunt) {
    var sourceFiles = [];

    require('jit-grunt')(grunt, {
        bower: 'grunt-bower-installer'
    });

    grunt.initConfig({
        githooks: {},
        watch: {},
        jscs: {},
        jshint: {},
        bower: { install: {} },
        concurrent: {
            options: {
                logConcurrentOutput: true
            },
            watch: ['watch:js']
        },
        karma: {},
        browserSync: {}
    });
    grunt.registerTask('default', ['bower', 'concurrent:watch', 'browserSync']);
};
