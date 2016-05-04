module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options:{
          style:'compressed'
        },
        files: {
          '../static/css/style.css' : 'scss/style.scss'
        }
      }
    },
    autoprefixer:{
      dist:{
        files:{
          '../static/css/style.css':'../static/css/style.css'
        }
      }
    },
    watch: {
      css: {
        files: ['scss/**/*.scss',
                'scss/*.scss'],
        tasks: ['sass', 'autoprefixer']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.registerTask('default',['sass', 'autoprefixer', 'watch']);
}