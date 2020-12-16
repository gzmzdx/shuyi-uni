// import Vue from 'vue'
// import App from './App'
import uView from "uview-ui"
// import store from "./store"

// import "./tools"

// import Tabs from "./components/tabs"
// import share from 'pages/Bdetail/share.vue'
// import Sbook from 'pages/sousuo/Sbook.vue'
// import Sping from 'pages/sousuo/Sping.vue'

// Vue.config.productionTip = false
// Vue.use(uView)
// App.mpType = 'app'
// Vue.use(Tabs)
// Vue.component("share",share)
// Vue.component("Sbook",Sbook)
// Vue.component("Sping",Sping)
// const app = new Vue({
// 	store,
//     ...App
// })
// app.$mount()

import Vue from 'vue'
import App from './App'
import share from 'pages/Bdetail/share.vue'
import fenlei from 'pages/jianshu/fenlei.vue'
import Sbook from 'pages/sousuo/Sbook.vue'
import Sping from 'pages/sousuo/Sping.vue'
import Gzhu from 'pages/sousuo/Gzhu.vue'
import Hyou from 'pages/sousuo/Hyou.vue'
import mylib from 'pages/my/mylib.vue'
import join from 'pages/my/join.vue'
import jianj from 'pages/my/jianj.vue'
import tushu from 'pages/my/tushu.vue'
import chengy from 'pages/my/chengy.vue'

Vue.config.productionTip = false

App.mpType = 'app'

Vue.component("share",share)
Vue.component("Sbook",Sbook)
Vue.component("Sping",Sping)
Vue.component("Gzhu",Gzhu)
Vue.component("Hyou",Hyou)
Vue.component("fenlei",fenlei)
Vue.component("mylib",mylib)
Vue.component("join",join)
Vue.component("jianj",jianj)
Vue.component("tushu",tushu)
Vue.component("chengy",chengy)

Vue.use(uView)

const app = new Vue({
    ...App
}) 
app.$mount()
