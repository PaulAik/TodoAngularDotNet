module.exports = function (grunt) {
    grunt.initConfig({
       
        less: {
            dev: {
                options: {
                    compress: true,
                    sourceMap: true,
                    sourceMapRootpath: '/'
                },
                files: {
                    "css/core.css": "less/core.less"
                }
            }
        },
       
        watch: {
            css: {
                files: ['less/**/*.less'],
                tasks: ['less:dev'],
                options: {
                    livereload: true,
                }
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	
	grunt.registerTask('default', ['watch']);
	grunt.registerTask('build', ['less:dev']);
};