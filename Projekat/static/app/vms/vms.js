Vue.component("vms", {
	data: function () {
		    return {
          vms: null,
          logedInUser: null,
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
      <th scope="col">Organisation</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(vm, index) in vms">
      <th scope="row">{{index + 1}}</th>
      <td>{{vm.name}}</td>
      <td>{{vm.catagory}}</td>
      <td>{{vm.organisation}}</td>
      <td><button type="button" class="btn btn-dark" v-on:click="selectVm(vm)" onclick="location.href = '#/vm-item';">More</button></td>
      <td><button type="button" class="btn btn-dark" v-on:click="deleteVm(vm)" onclick="location.href = '#/vms';">Delete</button></td>
    </tr>

  </tbody>
</table>

<button type="button" class="btn btn-dark"  onclick="location.href = '#/add-vm';">Add New VM</button>
    </div>


</div>
`	,
mounted(){

  this.getLogIn().then(resp => {
    this.logedInUser = resp.data;

    if (this.logedInUser.role === "SUPER_ADMIN") {
      this.getAllVms().then(resp => (this.vms = resp.data));
    } else {
      this.getVmsFromOrg().then(resp => (this.vms = resp.data));
    }
  })


},
	methods: {
        selectVm: function(vm){
            this.$root.$emit('messageFromParent', vm);
        },
        deleteVm: function(vm){
          var path = "http://localhost:9003/vms/delete/";
          console.log(path);
          axios.delete(path.concat(vm.name)).then(resp => {console.log(resp.data)});
          axios.get("http://localhost:9003/vms").then(resp => (this.vms = resp.data));
        },
        getLogIn: function () {
          return axios.get("http://localhost:9003/loginUser");
        },
        getAllVms: function () {
          return axios.get("http://localhost:9003/vms");
        },
        getVmsFromOrg: function () {
          return axios.get("http://localhost:9003/vmsFromOrg");
        }



        }


})