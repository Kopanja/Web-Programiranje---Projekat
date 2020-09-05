Vue.component("add-user", {
	data: function () {
		    return {
		      user: {email: "", firstName: "", lastName: ""}
		    }
	},
    template: `

    <div>
    <navbar></navbar>
    <form>
      <div class="form-group row">
      <label class="col-sm-2 col-form-label">Email:</label>
      <div class="col-sm-10">
        <input type="text"  class="form-control" v-model="user.email">
      </div>
      </div>
      <div class="form-group row">
      <label class="col-sm-2 col-form-label">First Name:</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" v-model="user.firstName">
      </div>
      </div>
      <div class="form-group row">
      <label class="col-sm-2 col-form-label">Last Name:</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" v-model="user.lastName">
      </div>
      </div>
  </form>
  <button type="button" class="btn btn-dark" v-on:click="addUser(user)"  onclick="location.href = '#/users';">Add</button>


</div>
`	,


	methods: {
    addUser: function(user){
      axios.post("http://localhost:9003/users/add", this.user).then(resp => {console.log(resp.data)});
    }

        }


})