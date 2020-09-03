Vue.component("vms", {
	data: function () {
		    return {
		      vms: null
		    }
	},
    template: `

    <div>
    <navbar></navbar>
    <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Category</th>
      <th scope="col">Num Of Cores</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(vm, index) in vms">
      <th scope="row">{{index + 1}}</th>
      <td>{{vm.name}}</td>
      <td>{{vm.catagory}}</td>
      <td>{{vm.numOfCores}}</td>
      <td><button type="button" class="btn btn-dark" v-on:click="selectVm(vm)" onclick="location.href = '#/vm-item';">More</button></td>
      <td><button type="button" class="btn btn-dark" v-on:click="deleteVm(vm)">Delete</button></td>
    </tr>

  </tbody>
</table>

<button type="button" class="btn btn-dark"  onclick="location.href = '#/add-vm';">Add New VM</button>
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
        selectVm: function(vm){
            this.$root.$emit('messageFromParent', vm);
        },
        deleteVm: function(vm){
          console.log("VVVVVVVVVVVVVVVVVVVVVVVVVVVVVV");
          var path = "http://localhost:9003/vms/delete/";
          console.log(path);
          axios.delete(path.concat(vm.name)).then(resp => {console.log(resp.data)});
        }



        }


})