Vue.component("disks", {
	data: function () {
		    return {
          disks: null,
          logedInUser: null,
		    }
	},
    template: `

    <div v-if="disks">
    <navbar></navbar>
    </br>
    <h3 class="align-left">Disks</h3>

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
    <tr v-for="(disk, index) in disks">
      <th scope="row">{{index + 1}}</th>
      <td>{{disk.name}}</td>
      <td>{{disk.type}}</td>
      <td>{{disk.organisation}}</td>
      <td><button type="button" class="btn btn-dark" v-on:click="selectDisk(disk)" onclick="location.href = '#/disk-item';">More</button></td>
      <td><button type="button" class="btn btn-dark" v-on:click="deleteDisk(disk)" onclick="location.href = '#/disks';">Delete</button></td>
    </tr>

  </tbody>
</table>

<button type="button" class="btn btn-dark"  onclick="location.href = '#/add-disk';">Add New Disk</button>
</br>
</br>
</br>
</div>


</div>
`	,
mounted(){

  this.getLogIn().then(resp => {
    this.logedInUser = resp.data;

    if (this.logedInUser.role === "SUPER_ADMIN") {
      this.getAllDisks().then(resp => (this.disks = resp.data));
    } else {
      this.getDisksFromOrg().then(resp => (this.disks = resp.data));
    }
  })


},
	methods: {
        selectDisk: function(disk){
            this.$root.$emit('sendDisk', disk);
        },
        deleteDisk: function(disk){
          var path = "http://localhost:9003/disks/delete/";
          console.log(path);
          axios.delete(path.concat(disk.name)).then(resp => {console.log(resp.data)});
          axios.get("http://localhost:9003/disks").then(resp => (this.disks = resp.data));
        },
        getLogIn: function () {
          return axios.get("http://localhost:9003/loginUser");
        },
        getAllDisks: function () {
          return axios.get("http://localhost:9003/disks");
        },
        getDisksFromOrg: function () {
          return axios.get("http://localhost:9003/disksFromOrg");
        }



        }


})