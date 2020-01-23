Vue.component("home", {
	data: function(){
		return {
			user : [{"email":"email","password":"sifra","name":"Marko","role":"USER"},{"email":"email","password":"sifra","name":"Marko","role":"USER"},{"email":"mejl","password":"sifra","name":"Nikola"}]
		}
	},
	
	
template: `
<div>
<input type = "checkbox" v-on:change="addToCart">
<p>
	<a href="#/nesto">Pregled sadržaja korpe</a>
</p>
</div>
`,
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
	}
}
})