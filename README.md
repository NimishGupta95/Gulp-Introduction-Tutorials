# Gulp-Introduction-Tutorials

Gulp is a tool to run task automatically, Follwing are the task which we have to perform every time when we make any change in a project, after using gulp we don't have to worry about these task anymore gulp will perform thee tasks for us.
tasks like -
1) Concatinating and minifying Javascripts and CSS files.

2) Removing console and debugger statements from scripts.

3) Compressing new and modified images.

   .
   
   . so on.
   
   
# How To Install Gulp.

Gulp uses node.js for performing it's tasks, so first you need to install Node.js

Now You can install gulp globaly using npm.

# For Mac Or Linux Users.

$ sudo npm install -g gulp

# For Windows Users.

npm install -g gulp

# Grunt Vs. Gulp

Grunt and Gulp both do the same things for us. Basically Grunt is a Node.js Based Task Runner while Gulp is a task runner which uses Node.js

# Advantage Of Gulp Over Grunt.

1) Grunt plug-ins performs multiple tasks, while Gulp Plug-ins are designed to do one thing only.

2) Grunt uses Json like data configuration files, while Gulp uses lenear Javascript



# Setup Your Project

cd Gulp-Introduction-Tutorials

src -

   images - uncompressed images
   
   scripts - multiple preprocessed script files
   
   styles - multiple preprocessed css files
   
bulid -

   images - compressed images
   
   scripts - a single minified script file
   
   styles - a silgle minified file


# For Working With Gulp, We Must Install Locally.

  npm install --save-dev gulp.

# Plug-ins 

 Gulp don't do much on it's own. we need to install and configure plug-ins to perform specific tasks, In gulp there is sepertae plugin for each tasks.
 At this time, Gulp supports more then 2500 plugins, and this number will increase in future.

# Install Your First Plugin
  
  npm install --save-dev gulp-jshint

# Open Your Gulpfile And Paste The Follwing Code.

  var gulp = require('gulp'); 

  // include plug-ins
  var jshint = require('gulp-jshint');

  // JS hint task
  gulp.task('jshint', function() {

     gulp.src('./src/scripts/*.js')

         .pipe(jshint())

         .pipe(jshint.reporter('default'));
         
});

This Plugin will check the performance of your javascript file, and will log the errors on console.



