Vue.component("navbar", {
  data: function () {
    return {
      user: null
    }
  },
  template: `

    <div v-if="user">
    <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#/vms">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item" v-if="user.role === 'SUPER_ADMIN'">
          <a class="nav-link" href="#/orgs">Organizations</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#/users">Users</a>
      </li>
      </ul>
      <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="#/profile" v-if="user">{{user.email}}</a>
      </li>
      <li class="nav-item">
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