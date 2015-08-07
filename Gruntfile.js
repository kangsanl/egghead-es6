module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-release');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.initConfig({

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
            }
        },

        copy: {
            dist: {
                files: [
                    { expand: true, flatten: true, src: 'src/*', dest: 'dist/' }
                ]
            }
        }
    });

    grunt.registerTask('dist', ['copy:dist', 'babel:amd', 'babel:commonjs']);
};