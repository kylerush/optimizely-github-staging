module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        trailing: true,
        curly: true,
        eqeqeq: true,
        indent: 4,
        latedef: true,
        noempty: true,
        nonbsp: true,
        undef: true,
        quotmark: 'single',
        browser: true,
        unused: true
      },
      sourceFiles: {
        files: {
          src: ['js/**/*.js']
        }
      }
    },
    watch: {
      dev: {
        files: ['js/**/*.js'],
        tasks: ['jshint']
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['jshint']);

  grunt.registerTask('dev', ['watch']);

};
