Vue.component("navbar", {
  data: function () {
    return {
      user: null
    }
  },
  template: `

    <div>
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
        <li class="nav-item">
          <a class="nav-link" href="#/orgs">Organizations</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#/users">Users</a>
      </li>
      </ul>
      <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="#/user-item">{{user.email}}</a>
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

    console.log('AAAAAAAAAAAAAAAAA');
    console.log(this.user);
    //axios.post("http://localhost:9003/post", {username: this.username, password : this.password}).then(resp => {console.log(resp.data)});
    axios.get("http://localhost:9003/loginUser").then(resp => (this.user = resp.data));

    console.log(this.user);

  },
  methods:{
    logOut: function(){
      axios.get("http://localhost:9003/logOut");
    }
  }



  })