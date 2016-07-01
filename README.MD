### Vue emoji filter

### [DEMO](https://agileago.github.io/vue-emoji/demo/)

### Use

First you should add emoji resource to your directory . and define a path to get it.

#### ES6

```
import Vue from 'vue'
import VueEmoji from 'vue-emoji'

Vue.use(VueEmoji, { path: '../emoji/' })
```

### browser

```
<script src="vue.js"></script>
<script src="vue-emoji.js"></script>
Vue.use(VueEmoji, { path: '../emoji/' })
```

then in html

```html
<div>{{{ msg | emoji }}}</div>
```