Vue.component("users", {
  data: function () {
    return {
      users: null,
      logedInUser: null,
    }
  },
  template: `

    <div v-if="users">
    <navbar></navbar>
    </br>
    <h3 class="align-left">Users</h3>
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
</br>
</br>
</br>
    </div>


</div>
`	,
  mounted() {

    this.getLogIn().then(resp => {
      this.logedInUser = resp.data;

      if (this.logedInUser.role === "SUPER_ADMIN") {
        this.getAllUsers().then(resp => (this.users = resp.data));
      } else {
        this.getUsersFromOrg().then(resp => (this.users = resp.data));
      }
    })



  },
  methods: {
    selectUser: function (user) {
      this.$root.$emit('sendingUser', user);
    },
    deleteUser: function (user) {
      console.log("VVVVVVVVVVVVVVVVVVVVVVVVVVVVVV");
      var path = "http://localhost:9003/users/delete/";
      console.log(path);
      axios.delete(path.concat(user.name)).then(resp => { console.log(resp.data) });
      axios.get("http://localhost:9003/users").then(resp => (this.users = resp.data));
    },
    getLogIn: function () {
      return axios.get("http://localhost:9003/loginUser");
    },
    getAllUsers: function () {
      return axios.get("http://localhost:9003/users");
    },
    getUsersFromOrg: function () {
      return axios.get("http://localhost:9003/usersFromOrg");
    }



  }


})