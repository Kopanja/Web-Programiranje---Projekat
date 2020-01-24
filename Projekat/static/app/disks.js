Vue.component("disks", {
	data: function(){
		return {
			disks : []
		}
	},
    
	
template: `
<div>
Disks:
	<table border="1">
	<tr bgcolor="lightgrey">
		<th>Name</th>
		<th>Type</th>
        <th>Capacity</th>
        <th>Virtual Machine</th>
	</tr>
		
	<tr v-for="d in disks">
		<td>{{d.name }}</td>
		<td>{{d.type}}</td>
        <td>{{d.capacity}}</td>
        <td>{{d.vm}}</td>
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
    axios.get("/disks")
		.then(response => this.disks = response.data);
}
})