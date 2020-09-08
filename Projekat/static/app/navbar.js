Vue.component("navbar", {
  data: function () {
    return {
      user: null
    }
  },
  template: `

    <div v-if="user">
    <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#/vms">VMs <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="#/disks">Disks<span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item active" v-if="user.role === 'SUPER_ADMIN'">
          <a class="nav-link" href="#/orgs">Organizations</a>
        </li>
        <li class="nav-item active">
        <a class="nav-link" href="#/users">Users</a>
      </li>
      </ul>
      <ul class="navbar-nav navbar-right">
      <li class="nav-item active">
        <a class="nav-link" href="#/profile" v-if="user">{{user.email}}</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#/" @click = "logOut">Logout</a>
      </li>
      </ul>
    </div>
  </nav>

</div>
`	,
  mounted() {

    this.logIn().then(resp => {this.user = resp.data;});


  },
  methods:{
    logOut: function(){
      axios.get("http://localhost:9003/logOut");
    },
    logIn: function(){
      return axios.get("http://localhost:9003/loginUser");
    }
  }



  })