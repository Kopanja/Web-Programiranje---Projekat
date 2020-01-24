Vue.component("vms", {
	data: function(){
		return {
			vms : []
		}
	},
	
template: `
<div>
Virtual Machines:
	<table border="1">
	<tr bgcolor="lightgrey">
		<th>Name</th>
		<th>Catagory</th>
        <th>Number of Cores</th>
        <th>Ram</th>
        <th>GPU Cores</th>
	</tr>
		
	<tr v-for="vm in vms">
		<td>{{vm.name }}</td>
		<td>{{vm.catagory}}</td>
        <td>{{vm.numOfCores}}</td>
        <td>{{vm.ram}}</td>
        <td>{{vm.gpuCores}}</td>
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
    axios.get("/vms")
		.then(response => this.vms = response.data);
}
})