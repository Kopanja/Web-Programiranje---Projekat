Vue.component("cats", {
	data: function(){
		return {
			cats : []
		}
	},
    

	
template: `
<div>
Categories:
	<table border="1">
	<tr bgcolor="lightgrey">
		<th>Name</th>
		<th>Number of Cores</th>
        <th>Ram</th>
        <th>GPU Cores</th>
	</tr>
		
	<tr v-for="c in cats">
		<td>{{c.name }}</td>
		<td>{{c.numOfCores}}</td>
        <td>{{c.ram}}</td>
        <td>{{c.gpuCores}}</td>
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
    axios.get("/cats")
		.then(response => this.cats = response.data);
}
})