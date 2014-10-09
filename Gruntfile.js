'use strict';

module.exports = function (grunt) {
    // Load Tasks
    require('load-grunt-tasks')(grunt);

    // Configure
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        clean: [
            'index.html',
            'styles/main.css',
            'bower_components/remark/remark.min.js'
        ],
        concat: {
            options: {
                separator: '\n'
            },
            build: {
                src: ['partials/header.html', 'tutorial.md', 'partials/footer.html'],
                dest: 'index.html'
            }
        },
        less: {
            default: {
                files: {
                    'styles/main.css': 'styles/main.less'
                }
            }
        },
        uglify: {
            options:{
                mangle: true
            },
            my_target: {
                files: {
                    'bower_components/remark/remark.min.js' : ['bower_components/remark/remark.js']
                }
            }
        },
        watch: {
            css: {
                files: ['**/*.less'],
                tasks: ['less']
            },
            md: {
                files: ['*.md'],
                tasks: ['compile']
            }
        },
        mkdir: {
            options: {
                create: [
                    'Untitled',
                ]
            }
        },
        processhtml: {
            options: {
                process: true,
                data: {
                    name: '<%= pkg.name %>'
                }
            },
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '.',
                        src: ['*.html'],
                        dest: '.',
                        ext: '.html'
                    }
                ]
            }
        }

    });

    // Register Tasks
    grunt.registerTask('compile', ['clean','concat','less','mkdir','processhtml','uglify']);
    grunt.registerTask('serve', ['compile', 'watch']);
    grunt.registerTask('default', function(){
        var output = [
            '',
            '*******************************',
            '* Gruntfile Default Task       *',
            '*******************************',
        ];

        for(var i=0; i<output.length; i++){
            console.log(output[i]);
        }
    });
};