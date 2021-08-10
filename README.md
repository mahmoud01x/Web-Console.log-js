# Web-Console.log-js
## Overview
- Later some web developers uses their phone for coding but coding without any debug log is so hard maybe a simple mistake stopping the whole code
- That's why this tool is made to help web dev's in debugging their code and testing deferant data types
-  this tool overriding the `console.log` method and create a semulator for `console.log`  that will display any errors happend in the code and also checking deferant data types like the normal usage of `console.log` method 
    ### This Repo consist of 2 files
       1. console.js > that's uses for apply the `console.log` script in the document
       2. console.css > that's uses for highlight the data types you can easily modify it and create your custom style
> Note: before usage this script should to be at the first of your scripts to be able to use it otherwise you won't be able to use it and if there's mistakes in your code it's won't displayed
## Usage
- firstly download include script and css file in your page
- be sure that the files at the same folder - if you put them inside another folder change the file path
```html
<link rel="stylesheet" type="text/css" href="./console.css">
<script src="./console.js"></script>
```
### How to use it
- it's so simple just `console.log(yourData)`
### Usage Examples
- you can use it for comparsion operations

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
```html
<div id="results"></div>
```
__JS__
```js
var res = document.getElementById("results");
console.log(res); //result will be the dom object check it
```
- you can check the functons output
```js
function sum(a, b) {
  return a + b
}
console.log(sum(2, 4))//result 6
```
- also you can use comma seprator to check deferant data types at same time - but here every seperator will be in a new block element not in the same line like web console
```js
console.log(1 > 2, typeof "", parseInt("22") + 4)
```

___result like image below___

![](https://github.com/mahmoud01x/Web-Console.log-js/blob/main/res.PNG)

## Styling Guide 
- if you want to apply custom style here's some helpful details about css classess
1. `str` = style of string data type - default `color: red`
2. `fn` = style of function data type - default `color: blue` 
3. `num` = style of number data type - default `color: royalblue` 
4. `bool` = style of boolean data type - default `color: royalblue`
5. `prop` = style of object properties (object keys) - default `color: rgb(203, 20, 216)/* pink */`
6. `null` = style of null data type - default `color: #333`
7. `details-summary` = style of (object|array) data type - default `color: indigo`
8. `details-summary` = style of (object|array) description value data type - default `color: #000`

## Updates
- __Beta Version__
- This script still under develop maybe there's some mistakes need to be solved so anyone welcome to commit on this project

