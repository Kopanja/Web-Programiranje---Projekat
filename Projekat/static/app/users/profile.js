Vue.component("profile", {
    data: function () {
      return {
        user: null
      }
    },
    template: `

<div class = "align-left" v-if="user">
<navbar></navbar>



<div class="naslov">
<h1>{{user.firstName + ' ' + user.lastName}}</h1>
<hr class="nameline" />
<h2><b>{{user.role}}</b></h2>
<button type="button" class="btn btn-dark" v-on:click="editUser(user)" onclick="location.href = '#/edit-profile';">Edit profile</button>
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
      this.getLogedInUser().then(response => {this.user = response.data})

    },
    methods: {
      getLogedInUser: function(){
        return axios.get("http://localhost:9003/loginUser");
      },
      editUser: function(user){
        this.$root.$emit('sendingUserProfile', user);
      }

    }


  })