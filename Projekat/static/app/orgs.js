Vue.component("orgs", {
	data: function(){
		return {
			orgs : []
		}
	},
    
	
template: `
<div>
Organisations:
	<table border="1">
	<tr bgcolor="lightgrey">
		<th>Name</th>
		<th>Description</th>
	</tr>
		
	<tr v-for="o in orgs">
		<td>{{o.name }}</td>
		<td>{{o.description}}</td>
      
	</tr>
</table>
</div>
`
,
//Da vidim da li menja
methods: {
	addToCart : function (product) {
		axios
		.post('/add', this.user)
		.then(response => (toast('User ' + " added to the Shopping Cart")));
	}
},
mounted (){
    axios.get("/orgs")
		.then(response => this.orgs = response.data);
}
})