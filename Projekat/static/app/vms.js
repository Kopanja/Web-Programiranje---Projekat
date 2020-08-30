Vue.component("vms", {
	data: function () {
		    return {
		      vms: null
		    }
	},
    template: `

    <div>
    <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Category</th>
      <th scope="col">Num Of Cores</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="vm in vms">
      <th scope="row">1</th>
      <td>{{vm.name}}</td>
      <td>{{vm.catagory}}</td>
      <td>{{vm.numOfCores}}</td>
    </tr>

  </tbody>
</table>

{{vms}}
    </div>


</div>
`	,
mounted(){

    console.log('AAAAAAAAAAAAAAAAA');
    console.log(this.vms);
    //axios.post("http://localhost:9003/post", {username: this.username, password : this.password}).then(resp => {console.log(resp.data)});
    axios.get("http://localhost:9003/vms").then(resp => (this.vms = resp.data));
    console.log(this.vms);


},
	methods: {


        }


})