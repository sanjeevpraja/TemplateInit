/*
 * grunt-init-gruntfile by sanjeev
 * https://gruntjs.com/
 *
 * Copyright (c) 2012 "Cowboy" Ben Alman, contributors
 * Licensed under the MIT license.
 */

 'use strict';

// Basic template description.
exports.description = 'Create a basic Gruntfile.';

// Template-specific notes to be displayed before question prompts.
exports.notes = 'This template tries to guess file and directory paths, but ' +
'you will most likely need to edit the generated Gruntfile.js file before ' +
'running grunt. _If you run grunt after generating the Gruntfile, and ' +
'it exits with errors, edit the file!_';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = 'Gruntfile.js';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({}, [
    // Prompt for these values.
    {
      name: 'package_json',
      message: 'Will you have a package.json file?',
      default: 'Y/n',
      warning: 'This changes how filenames are determined and banners are generated.'
    }
    ], function(err, props) {
      props.package_json = /y/i.test(props.package_json);
      props.file_name = props.package_json ? '<%= pkg.name %>' : 'FILE_NAME';

    // Find the first `preferred` item existing in `arr`.
    function prefer(arr, preferred) {
      for (var i = 0; i < preferred.length; i++) {
        if (arr.indexOf(preferred[i]) !== -1) {
          return preferred[i];
        }
      }
      return preferred[0];
    }

    // Guess at some directories, if they exist.
    var dirs = grunt.file.expand({filter: 'isDirectory'}, '*').map(function(d) { return d.slice(0, -1); });
    props.lib_dir = prefer(dirs, ['lib', 'src']);
    props.test_dir = prefer(dirs, ['test', 'tests', 'unit', 'spec']);

    // Maybe this should be extended to support more libraries. Patches welcome!
    props.jquery = grunt.file.expand({filter: 'isFile'}, '**/jquery*.js').length > 0;

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props);


    // If is package_json true, generate package.json
    if (props.package_json) {
      var devDependencies = {
        "grunt": "~0.4.1",
        "grunt-contrib-clean": "~0.5.0",
        "grunt-contrib-jshint": "~0.6.4",
        "grunt-contrib-uglify": "~0.2.4",
        "grunt-contrib-watch": "~0.5.3",
        "grunt-contrib-cssmin": "~0.10.0",
        "grunt-contrib-imagemin": "~0.7.1", 
        "grunt-newer": "^0.7.0",
        "grunt-recess": "~0.5.0"
      };


      // Generate package.json file, used by npm and grunt.
      init.writePackageJSON('package.json', {
        name: "sanjeevinit",
        version: "0.1.0",
        author: 'sanjeevpraja@gmail.com',
        node_version: '>= 0.10.0',
        devDependencies: devDependencies
      });
    }


// module dependencies
var join = require("path").join;
// empty directories will not be copied, so we need to create them manual
grunt.file.mkdir( join(init.destpath(), 'assets') );
grunt.file.mkdir( join(init.destpath()+'/assets', 'img'));
grunt.file.mkdir( join(init.destpath()+'/assets', 'imgorg'));
grunt.file.mkdir( join(init.destpath()+'/assets', 'less'));
grunt.file.mkdir( join(init.destpath()+'/assets', 'css'));
grunt.file.mkdir( join(init.destpath()+'/assets', 'js'));

init.copy('normalize.css', 'assets/css/normalize.css');

    // All done!
    done();
  });

};
