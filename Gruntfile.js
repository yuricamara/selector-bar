'use strict';

module.exports = function(grunt){

  require('time-grunt')(grunt);

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
      Build/Dev
    **********************/
    // concat: {
    //     options:{
    //       nonull: true
    //     },
    //     dev:{
    //       src:[
    //         'app/global/scripts/*.js',
    //         'app/diretivas/**/*.js'
    //       ],
    //       dest:'app/global/scripts.js'
    //     }
    // },
    copy: {
      deploy: {
        src: 'app/index.html',
        dest: 'public/index.html',
      }
    },
    filerev: {
      deploy: {
        src: [
          'public/scripts.js',
          'public/stylesheets.css'
        ]
      }
    },
    useminPrepare: {
      html: 'public/index.html',
      options: {
        root: './app/',
        dest: 'public/'
      }
    },
    usemin: {
      html: 'public/index.html'
    },

    /*********************
      Clean
    **********************/
    clean:{
      tmp: '.tmp',
      public: 'public'
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
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-filerev');
  grunt.loadNpmTasks('grunt-usemin');

  /**********************************
    build tasks
  ***********************************/

  grunt.registerTask('build', [
    'clean',
    'ngtemplates:main',
    //'concat:dev',
    'copy:deploy',
    'useminPrepare',
    'concat:generated',
    'cssmin:generated',
    'uglify:generated',
    'filerev',
    'usemin'
  ]);
};
