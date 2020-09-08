Vue.component("user-item", {
    data: function () {
      return {
        user: null,
        logedInUser: null
      }
    },
    template: `

<div class = "align-left" v-if="user">
<navbar></navbar>



<div class="naslov" v-if="logedInUser">
<h1>{{user.firstName + ' ' + user.lastName}}</h1>
<hr class="nameline" />
<h2><b>{{user.role}}</b></h2>
<button type="button" v-if="logedInUser.role!=='USER'" class="btn btn-dark" v-on:click="editUser(user)" onclick="location.href = '#/edit-user';">Edit profile</button>
</div>

  <img class="img-thumbnail" src="app/users/img/profile_default.jpg" alt="profilepicture">

  <hr class="picline">

<div class="tabela">
  <ul class="list-group list-group-horizontal-md">
    <li class="list-group-item list-group-item-secondary">Email</li>
    <li class="list-group-item list-group-item-light">{{user.email}}</li>
  </ul>
  <ul class="list-group list-group-horizontal-md">
    <li class="list-group-item list-group-item-secondary">Password</li>
    <li class="list-group-item list-group-item-light">persida123</li>
  </ul>
  <ul class="list-group list-group-horizontal-md">
    <li class="list-group-item list-group-item-secondary">Organization</li>
    <li class="list-group-item list-group-item-light">{{user.organisation}}</li>
  </ul>
</div>
</div>
  `	,
    mounted() {
      this.$root.$on('sendingUser', (user) => {
        this.user = user;
      });
      this.logIn().then(resp => {this.logedInUser = resp.data;});

    },
    methods: {
      getLogedInUser: function(){
        return axios.get("http://localhost:9003/loginUser");
      },
      editUser: function(user){
        this.$root.$emit('sendingUserProfile', user);
      },
      logIn: function(){
        return axios.get("http://localhost:9003/loginUser");
      },

    }


  })