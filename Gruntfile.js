module.exports = function(grunt) {

    // Load the plugins
    [
        'grunt-release',
        'grunt-babel',
        'grunt-contrib-copy',
        'grunt-contrib-clean',
        'grunt-karma'
    ].forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        clean: {
            dist:['dist/**/*.*'],
            verify:['test-es5/**/*.*']
        },
        babel: {
            options: {
                sourceMap: true
            },
            amd: {
                options: {
                    modules: 'amd'
                },
                files: [
                    {
                        expand: true,
                        cwd: 'src',
                        src: ['**/*.js'],
                        dest: 'dist/amd',
                        ext: '.js'
                    }
                ]
            },
            commonjs: {
                options: {
                    modules: 'common'
                },
                files: [
                    {
                        expand: true,
                        cwd: 'src',
                        src: ['**/*.js'],
                        dest: 'dist/common',
                        ext: '.js'
                    }
                ]
            },
            karma_amd: {
                    options: {
                        modules: 'amd'
                    },
                    files: [
                        {
                            expand: true,
                            cwd: 'test',
                            src: ['**/*.spec.js'],
                            dest: 'test-es5/amd',
                            ext: '.es5.spec.js'
                        }
                    ]
                }
        },

        copy: {
            dist: {
                files: [
                    { expand: true, src: 'src/**', dest: 'dist/' }
                ]
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        }
    });

    grunt.registerTask('verify', ['clean:verify', 'karma', 'babel:karma_amd']);
    grunt.registerTask('dist', ['clean:dist', 'copy:dist', 'babel:amd', 'babel:commonjs']);
    grunt.registerTask('default', ['verify', 'dist']);
};