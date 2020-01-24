//const Users = {template : '<users></users>'}
Vue.component("home", {
	/*
	components : {
		'users' : Users
	},
	*/
	data: function(){
		return {
			user : [],
			comp : 'vms'
		}
	},
	
	
template: `
<div>
<input type = "checkbox" v-on:change="addToCart">
<p>
	<button v-on:click = "showUsers">Users</button>
	<button v-on:click = "showDisks">Disks</button>
	<button v-on:click = "showCats">Categories</button>
	<button v-on:click = "showVMs">VMs</button>
	<button v-on:click = "showOrgs">Organisations</button>

	<component v-bind:is = comp></component>
</p>
</div>
`
,
//Da vidim da li menja
methods: {
	addTodo: function(){
		axios.get('/test')
		.then(response => console.log(response));
	},
	getUser: function(){
		axios.get("/user")
		.then(response => user = response.data);
	},
	addToCart : function (product) {
		axios
		.post('/add', this.user)
		.then(response => (toast('User ' + " added to the Shopping Cart")));
	},

	showUsers : function(){
		this.comp = 'users';
	},
	showDisks : function(){
		this.comp = 'disks';
	},
	showCats : function(){
		this.comp = 'cats';
	},
	showVMs : function(){
		this.comp = 'vms';
	},
	showOrgs : function(){
		this.comp = 'orgs';
	},
}
})
