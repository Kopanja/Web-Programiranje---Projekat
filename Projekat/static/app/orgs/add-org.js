Vue.component("add-org", {
	data: function () {
		    return {
		      org: {name: "", description: ""}
		    }
	},
    template: `

    <div>
    <navbar></navbar>
    <form>
      <div class="form-group row">
      <label class="col-sm-2 col-form-label">Name:</label>
      <div class="col-sm-10">
        <input type="text"  class="form-control" v-model="org.name">
      </div>
      </div>
      <div class="form-group row">
      <label class="col-sm-2 col-form-label">Description:</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" v-model="org.description">
      </div>
      </div>
  </form>
  <button type="button" class="btn btn-dark" v-on:click="addOrg(org)"  onclick="location.href = '#/orgs';">Add</button>


</div>
`	,


	methods: {
    addOrg: function(org){
      axios.post("http://localhost:9003/orgs/add", this.org).then(resp => {console.log(resp.data)});
    }

        }


})