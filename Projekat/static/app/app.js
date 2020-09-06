const Login = {template: '<login></login>'}
const Vms = {template: '<vms></vms>'}
const Profile = {template: '<profile></profile>'}
const VmItem = {template: '<vm-item></vm-item>'}
const AddVM = {template: '<add-vm></add-vm>'}
const Orgs = {template: '<orgs></orgs>'}
const OrgItem = {template: '<org-item></org-item>'}
const AddOrg = {template: '<add-org></add-org>'}
const Users = {template: '<users></users>'}
const AddUser = {template: '<add-user></add-user>'}
const UserItem = {template: '<user-item></user-item>'}
const router = new VueRouter({
	  mode: 'hash',
	  routes: [
		{ path: '/', component: Login},
		{path: '/vms', component: Vms},
		{path: '/profile', component: Profile},
		{path: '/vm-item', component: VmItem},
		{path: '/add-vm', component: AddVM},
		{path: '/orgs', component: Orgs},
		{path: '/org-item', component: OrgItem},
		{path: '/add-org', component: AddOrg},
		{path: '/users', component: Users},
		{path: '/add-user', component: AddUser},
		{path: '/user-item', component: UserItem},


	  ]
});

var app = new Vue({
	router,
	el: '#app'
});