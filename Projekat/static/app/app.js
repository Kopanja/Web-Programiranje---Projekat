const Login = {template: '<login></login>'}
const Vms = {template: '<vms></vms>'}
const Disks = {template: '<disks></disks>'}
const Profile = {template: '<profile></profile>'}
const VmItem = {template: '<vm-item></vm-item>'}
const AddVM = {template: '<add-vm></add-vm>'}
const Orgs = {template: '<orgs></orgs>'}
const OrgItem = {template: '<org-item></org-item>'}
const DiskItem = {template: '<disk-item></disk-item>'}
const AddOrg = {template: '<add-org></add-org>'}
const Users = {template: '<users></users>'}
const AddUser = {template: '<add-user></add-user>'}
const UserItem = {template: '<user-item></user-item>'}
const EditUser = {template: '<edit-user></edit-user>'}
const EditProfile = {template: '<edit-profile></edit-profile>'}
const EditOrg = {template: '<edit-org></edit-org>'}
const EditVM = {template: '<edit-vm></edit-vm>'}
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
		{path: '/edit-user', component: EditUser},
		{path: '/edit-profile', component: EditProfile},
		{path: '/edit-org', component: EditOrg},
		{path: '/edit-vm', component: EditVM},
		{path: '/disks', component: Disks},
		{path: '/disk-item', component: DiskItem},


	  ]
});

var app = new Vue({
	router,
	el: '#app'
});