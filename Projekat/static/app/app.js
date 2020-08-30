const Login = {template: '<login></login>'}
const Vms = {template: '<vms></vms>'}
const router = new VueRouter({
	  mode: 'hash',
	  routes: [
		{ path: '/', component: Login},
		{path: '/vms', component: Vms},

	  ]
});

var app = new Vue({
	router,
	el: '#app'
});