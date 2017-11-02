GruntJS-In-3-Steps
==

![](http://www.cowglow.com/github/GruntJS-In-3-Steps/images/grunt-logo-no-wordmark.svg)


Tutorial for the FrankenJS group
--


A GruntJS Automation Approach for a [remarkjs](http://remarkjs.com/) Presentation

---

###BEFORE YOU START
- Start by __CLONING__ of __BRANCHING__ the repository.
- Install NPM Dependencies
 ``` npm install ```
- Editing the CSS
- Add Image Resources

---

#Step 1 - Gruntfile.js
- Load Tasks 
```javascript
// Individually  
grunt.loadNpmTasks('grunt-contrib-__plugin__');
```
```javascript
// All At Once
require('load-grunt-tasks')(grunt);
// Visit: https://www.npmjs.org/package/load-grunt-tasks
```

---

#Step 2 - Configure Plug-ins
- Prepare the Config Settings ([See Individual Plug-in Documentation](http://gruntjs.com/plugins))
```javascript
 grunt.initConfig({});
 ```

- Expose Additional Variables
```javascript
grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    /* and so on */
});
```

---

# Step 3 - Register Tasks
- Always have a __default__ task
```
grunt.registerTask('default', function(){
    /* some logic */
});
```

- Alias Tasks
```javascript
grunt.registerTask('TaskList', ['first:task','second:task','third']);
```

---

### More about GruntJS
- [gruntjs.com/getting-started](https://gruntjs.com/getting-started)
- [The State of Grunt](http://cowboy.github.io/state-of-grunt-fe-summit-2014-talk/)
