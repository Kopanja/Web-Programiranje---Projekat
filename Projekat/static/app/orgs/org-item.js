Vue.component("org-item", {
    data: function () {
      return {
        org: null,
        user: null,
      }
    },
    template: `

<div class = "align-left" v-if="org">
<navbar></navbar>




    <div class="naslov" v-if="user">
      <h1>{{org.name}}</h1>
      <hr class="nameline" />
      <h2><b>{{org.description}}</b></h2>
      <button type="button" class="btn btn-dark" v-if="user.role!=='USER'" v-on:click="editOrg(org)" onclick="location.href = '#/edit-org';">Edit organization</button>
    </div>

    <img class="img-thumbnail" src="app/orgs/img/default_img.jpg" alt="profilepicture">



  <hr class="picline">

<div class="container">
  <div class="row">
    <div class="col">
      <h2>Korisnici</h2>
    </div>
    <div class="col">
      <h2>Resursi</h2>
    </div>
  </div>
  <div class="row">
<div class="table-wrapper-scroll-y my-custom-scrollbar col">
  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">User</th>
        <th scope="col">Email</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(user, index) in org.users">
        <th scope="row">{{index + 1}}</th>
        <td>{{user.firstName + ' ' + user.lastName}}</td>
        <td>{{user.email}}</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="table-wrapper-scroll-y my-custom-scrollbar col">
  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Type</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(vm, index) in org.vms">
        <th scope="row">{{index + 1}}</th>
        <td>{{vm.name}}</td>
        <td>{{vm.catagory}}</td>
      </tr>

    </tbody>
  </table>
</div>
</div>
</div>
</div>
  `	,
    created() {
      this.$root.$on('sendingOrg', (org) => { this.org = org; });
      this.logIn().then(resp => {this.user = resp.data;});


    },
    methods: {
      editOrg: function(org){
        this.$root.$emit('sendingOrgProfile', org);
      },
      logIn: function(){
        return axios.get("http://localhost:9003/loginUser");
      },

    }


  })