# vue3-log
log the things that you want when element is mounted

## Installation
use npm :
```
npm i vue3-log
```
then use it in your main.js with:
```js
import vue_log3 from "vue-log3"
createApp(/* ... */).use(vue_log3).mount(/* ... */)
```
## Usage
```html
<button v-log="123">Hello</button> <!--logs the number--> 
<button v-log="'hello'">Hello</button> <!--logs the string--> 
<button v-log="[1,2,3]">Hello</button> <!--logs the array--> 
<button v-log="{a:2}">Hello</button> <!--logs the object--> 
```