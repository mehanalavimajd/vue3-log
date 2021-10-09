# v-log
log the things that you want when element is mounted

## Installation
use npm :
```
npm i v-log
```
then use it in your main.js with:
```js
import v_log from "v-log"
createApp(/* ... */).use(v_log).mount(/* ... */)
```
## Usage
```html
<button v-log="123">Hello</button> <!--logs the number--> 
<button v-log="'hello'">Hello</button> <!--logs the string--> 
<button v-log="[1,2,3]">Hello</button> <!--logs the array--> 
<button v-log="{a:2}">Hello</button> <!--logs the object--> 
```