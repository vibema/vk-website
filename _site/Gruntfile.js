const sass = require('sass');

module.exports = function(grunt) {
  // Project configuration
  grunt.initConfig({
    sass: {
      options: {
        implementation: sass,
        sourceMap: true
      },
      slick: {
        files: {
          'assets/css/slick.css': 'sass/slick.scss'
        }
      },
      base: {
        files: {
          'assets/css/base.css': 'sass/base.scss'
        }
      },
      home: {
        files: {
          'assets/css/home.css': 'sass/home.scss'
        }
      }

    },
    jekyll: {
      build: {},
      serve: {
        options: {
          serve: true,
          watch: true
        }
      }
    },
    browserSync: {
      dev: {
        bsFiles: {
          src: [
            'assets/css/*.css',
            '**/*.html',
            '**/*.js'
          ]
        },
        options: {
          watchTask: true,
          server: '_site'
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
      css: {
        files: ['sass/**/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false
        }
      },
      jekyll: {
        files: ['**/*.{html,md,markdown,css,scss,js,yml,json}'],
        tasks: ['sass', 'jekyll:build'],
        options: {
          spawn: false
        }
      }
    }
  });

  // Load Grunt plugins
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s)
  grunt.registerTask('default', ['sass', 'jekyll:build', 'connect', 'browserSync', 'watch']);
};
