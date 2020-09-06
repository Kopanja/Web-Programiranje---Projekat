Vue.component("user-item", {
    data: function () {
      return {
        user: null
      }
    },
    template: `

<div class = "align-left">
<navbar></navbar>



<div class="naslov">
<h1 v-model = "user">{{user.firstName + ' ' + user.lastName}}</h1>
<hr class="nameline" />
<h2 v-model = "user.role"><b>{{user.role}}</b></h2>
<button type="button" class="btn btn-dark">Edit profile</button>
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
    <li class="list-group-item list-group-item-light">Organizacija 1</li>
  </ul>
</div>
</div>
  `	,
    created() {
      axios.get("http://localhost:9003/loginUser").then(resp => (this.user = resp.data));

    },
    methods: {


    }


  })