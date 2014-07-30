TemplateInit
============

#A Personalised Grunt-init Template#
<i>By Sanjeev Praja</i>

Creates basic html-skeleton with simple grunt tasks.

NPM dependencies
--------------------------
+ grunt
+ grunt-contrib-clean
+ grunt-contrib-jshint
+ grunt-contrib-uglify
+ grunt-contrib-watch
+ grunt-contrib-cssmin
+ grunt-contrib-imagemin
+ grunt-newer
+ grunt-recess

====================================

**Steps**

**1. Install nodejs, npm, grunt-cli, grunt-init globally.**
	
- [nodejs](http://nodejs.org/)
- [npm](https://www.npmjs.org/)
- [Gruntjs](http://gruntjs.com/getting-started)


**2. Add template **templateinit** to ~/.grunt-init on mac**

**3. On terminal**

*Go to the directory you want to create project
	The use command to create project*
	
	<code>grunt-init templateinit</code>

**4. Folder assets, files Gruntfile.js, package.json, index.html would be generated**

**5.On terminal**

<code>npm install</code>

*installs all npm dependencies*

**6. Finally on Terminal**
<code> grunt watch</code>

*Now your project is watched for any changes on assets/less to minified css on assets/css and assets/imgorg for any change on *.png, *.gif, *.jpg to optimised image on assets/img*
