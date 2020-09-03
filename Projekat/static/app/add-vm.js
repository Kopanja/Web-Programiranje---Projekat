Vue.component("add-vm", {
	data: function () {
		    return {
		      vm: {name: "", catagory: "", numOfCores: ""}
		    }
	},
    template: `

    <div>
    <navbar></navbar>
    <form>
      <div class="form-group row">
      <label class="col-sm-2 col-form-label">Name:</label>
      <div class="col-sm-10">
        <input type="text"  class="form-control" v-model="vm.name">
      </div>
      </div>
      <div class="form-group row">
      <label class="col-sm-2 col-form-label">Catagory:</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" v-model="vm.catagory">
      </div>
      </div>
      <div class="form-group row">
      <label class="col-sm-2 col-form-label">Number of cores: </label>
      <div class="col-sm-10">
        <input type="text"  class="form-control" v-model="vm.numOfCores">
      </div>
      </div>
  </form>
  <button type="button" class="btn btn-dark" v-on:click="addVm(vm)">Add</button>
  <button type="button" class="btn btn-dark"  onclick="location.href = '#/vms';">Return</button>

</div>
`	,


	methods: {
    addVm: function(vm){
      axios.post("http://localhost:9003/vms/add", this.vm).then(resp => {console.log(resp.data)});
    }

        }


})