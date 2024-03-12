module.exports = function(grunt) {
    // Project configuration
    grunt.initConfig({
      jekyll: {
        build: {},
        serve: {
          options: {
            serve: true,
            watch: true
          }
        }
      },
      connect: {
        server: {
          options: {
            port: 2222,
            base: '_site', // The directory where Jekyll generates the static files
            livereload: true,
            open: true
          }
        }
      },
      watch: {
        jekyll: {
          files: ['**/*.{html,md,markdown,css,scss,js}'],
          tasks: ['jekyll:build'],
          options: {
            spawn: false,
            livereload: true
          }
        }
      }
    });
  
    // Load Grunt plugins
    grunt.loadNpmTasks('grunt-jekyll');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
  
    // Default task(s)
    grunt.registerTask('default', ['jekyll:build', 'connect', 'watch']);
  };
  