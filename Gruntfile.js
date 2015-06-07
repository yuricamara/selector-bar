'use strict';

module.exports = function(grunt){

  //require('time-grunt')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    /********************************************************
        Tasks config
    *********************************************************/

    /*********************
      Angular
    **********************/

    ngtemplates:  {
      options:{
        module: 'templates',
        standalone: true,
        prefix: '/'
      },
      main : {
        src: [
          'app/diretivas/**/*.tpl.html'
        ],
        dest: 'app/global/scripts/templates.js'
      }
    },

    /*********************
      Compass
    **********************/

    compass:{
      dev: {
        options: {
          sassDir: 'app/global',
          cssDir: 'app/global'
        }
      }
    },

    /*********************
      Watch
    **********************/

    watch:{
      options:{
        atBegin: true
      },
      create_templates:{
        files: [
          'app/diretivas/**/*.tpl.html'
        ],
        tasks: ['ngtemplates:main']
      },
      compass: {
        files: [
          'app/global/stylesheets/*.scss'
        ],
        tasks: ['compass:dev']
      }
    }
  });

  /********************************************************
      Tasks execution
  *********************************************************/
  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
};
