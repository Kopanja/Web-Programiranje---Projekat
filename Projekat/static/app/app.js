const Home = {template: '<home></home>'}
const Proba = {template: '<proba></proba>'}
const router = new VueRouter({
	  mode: 'hash',
	  routes: [
	    { path: '/', component: Home},
	    { path: '/nesto', component: Proba }
	  ]
});

var app = new Vue({
	router,
	el: '#home'
});