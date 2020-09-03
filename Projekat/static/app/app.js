const Login = {template: '<login></login>'}
const Vms = {template: '<vms></vms>'}
const Profile = {template: '<profile></profile>'}
const VmItem = {template: '<vm-item></vm-item>'}
const router = new VueRouter({
	  mode: 'hash',
	  routes: [
		{ path: '/', component: Login},
		{path: '/vms', component: Vms},
		{path: '/profile', component: Profile},
		{path: '/vm-item', component: VmItem}

	  ]
});

var app = new Vue({
	router,
	el: '#app'
});