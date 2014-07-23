'use strict';
var original;
var name;
module.exports = function(grunt) {
  //require('time-grunt')(grunt);
  grunt.initConfig({
    clean: {
      files: [
      'assets/css/*.css',
      'assets/js/*.min.js'
      ]
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
      '!Gruntfile.js',
      'assets/js/*.js',
      ]
    },
    cssmin: {
      minify: {
        expand: true,
        cwd: 'assets/css/',
        src: ['page-*.min.css'],
        dest: 'page-*.min.css'
    //ext: '.min.css'
  }
},

recess: {
  dist: {
    options: {
      compile: true,
      compress: false,
    },
    files:
    [{
     expand: true, 
     cwd: 'assets/less/', 
     src: ['page-*.less'], 
     dest: 'assets/css/', 
     rename: function(dest, src) {
      return dest + src.substring(0, src.indexOf('.')) + '.min.css';
    }
  }
  ]

        // files: {
        //   'assets/css/main.min.css': [
        //   'assets/less/app.less'
        //   ],
      }
    },
    uglify: {
      dist: {
        files: {
          'assets/js/scripts.min.js': [
          'assets/js/_*.js'
          ]
        }
      }
    },
    // version: {
    //   options: {
    //     file: 'lib/scripts.php',
    //     css: 'assets/css/main.min.css',
    //     cssHandle: 'roots_main',
    //     js: 'assets/js/scripts.min.js',
    //     jsHandle: 'roots_scripts'
    //   }
    // },
    imagemin: {
     dist: {
      options: {
        optimizationLevel: 0,
        progressive: true
      },
      files: [{
        expand: true,
        cwd: 'assets/imgorg/',
        src: ['**/*.{png,jpg,gif}'],
        dest: 'assets/img/'
      }]
    }
  },
  watch: {
    options: {
      spawn: false
    },
    less: {
      files: [
      'assets/less/*.less',
      'assets/less/bootstrap/*.less'
      ],
      tasks: ['newer:recess']
    },
    js: {
      files: [
      '<%= jshint.all %>'
      ],
      tasks: ['jshint', 'uglify']
    },
    images: {
      files: [
      '**/*.{png,jpg,gif}'
      ],
      tasks: ['newer:imagemin']
    }
  }
});



  // Load tasks
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-recess');
  //grunt.loadNpmTasks('grunt-wp-version'); its ver verion
  grunt.loadNpmTasks('grunt-contrib-imagemin');


  // Register tasks
  grunt.registerTask('default', [
    'clean',
    //'newer:recess',
    'uglify',
    'cssmin'
    ]);
  grunt.registerTask('dev', [
    'watch',
    'newer:imagemin'
    ]);

};
