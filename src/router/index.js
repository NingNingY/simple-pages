import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import About from '../components/About'
import Filter from '../components/Filter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
    	 path: '/home',
	     name: 'Home',
	     component: Home
    }, {
    	 path: '/about',
	     name: 'About',
	     component: About
    }, {
       path: '/filter',
       name: 'Filter',
       component: Filter
    }
  ]
})
