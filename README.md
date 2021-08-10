# Web-Console.log-js
## Overview
- Later some web developers uses their phone for coding but coding without any debug log is soo hard maybe a small mistake stop the whole code
- so that's why this tool is made to help web programmers in debugging their code and testing deferant data types
-  this tool overriding the `console.log` method and create a semulator for `console.log`  that will display any errors happend in the code and also checking deferant data types like the normal usage of `console.log` method 
   -### This Repo consist of 2 files
       1. console.js > that's uses for apply the `console.log` script in the document
       2. console.css > that's uses for highlight the data types you can easily modify it and create your custom style
> Note: before usage this script should to be at the first of your scripts to be able to use it otherwise you won't be able to use it and if there's mistakes in your code it's won't displayed
## Usage
- firstly download include the script and the css file in your document
- be sure that the files at the same folder - if you put them inside another folder change the file path
```html
<link rel="stylesheet" type="text/css" href="./console.css">
<script src="./console.js"></script>
```
### How to use it
- it's so simple just `console.log(yourData)`
### Usage Examples
- you can use it for checking value or deferant data types

__Example__
```js
console.log(1 > 2) //result: false
```
- also you can check nested objects, array's 
```js
var obj = {
    "a": 123,
    "b": 456,
    "arr": [1,5,4,8, {
        nested: "object",
        draft: "ok"
    }]
}
console.log(obj)
```
__Result will be like the image below__

![](https://github.com/mahmoud01x/Web-Console.log-js/blob/main/obj.PNG)

- checking html elements dom object

__HTML__
```
<div id="results"></div>
```
__JS__
```
var res = document.getElementById("results");
console.log(res); //result will be the dom object check it
```

## Updates
- __Beta Version__
- This script still under develop maybe there's some mistakes need to be solved so anyone welcome to commit on this project

