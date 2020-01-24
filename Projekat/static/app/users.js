Vue.component("users", {
	data: function(){
		return {
			users : []
		}
	},
	
	
template: `
<div>
Users:
	<table border="1">
	<tr bgcolor="lightgrey">
		<th>Ime</th>
		<th>Prezime</th>
        <th>Email</th>
        <th>Role</th>
        <th>Organisation</th>
	</tr>
		
	<tr v-for="u in users">
		<td>{{u.firstName }}</td>
		<td>{{u.lastName}}</td>
        <td>{{u.email}}</td>
        <td>{{u.role}}</td>
        <td>{{u.organisation}}</td>
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
    axios.get("/users")
		.then(response => this.users = response.data);
}
})