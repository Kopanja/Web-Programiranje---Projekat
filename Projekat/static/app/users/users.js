Vue.component("users", {
	data: function () {
		    return {
		      users: null
		    }
	},
    template: `

    <div>
    <navbar></navbar>
    <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Email</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(user, index) in users">
      <th scope="row">{{index + 1}}</th>
      <td>{{user.email}}</td>
      <td>{{user.firstName}}</td>
      <td>{{user.lastName}}</td>
      <td><button type="button" class="btn btn-dark" v-on:click="selectUser(user)" onclick="location.href = '#/user-item';">More</button></td>
      <td><button type="button" class="btn btn-dark" v-on:click="deleteUser(user)" onclick="location.href = '#/users';">Delete</button></td>
    </tr>

  </tbody>
</table>

<button type="button" class="btn btn-dark"  onclick="location.href = '#/add-user';">Add New USER</button>
    </div>


</div>
`	,
mounted(){

    axios.get("http://localhost:9003/users").then(resp => (this.users = resp.data));


},
	methods: {
        selectOrg: function(user){
            this.$root.$emit('sendingUser', user);
        },
        deleteOrg: function(user){
          console.log("VVVVVVVVVVVVVVVVVVVVVVVVVVVVVV");
          var path = "http://localhost:9003/users/delete/";
          console.log(path);
          axios.delete(path.concat(user.name)).then(resp => {console.log(resp.data)});
          axios.get("http://localhost:9003/users").then(resp => (this.users = resp.data));
        }



        }


})