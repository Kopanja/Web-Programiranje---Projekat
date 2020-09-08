Vue.component("orgs", {
	data: function () {
		    return {
          orgs: null,
          logedInUser: null
		    }
	},
    template: `

    <div v-if="logedInUser">
    <navbar></navbar>
    </br>
    <h3 class="align-left">Organisations</h3>
    <table class="table"  v-if="orgs">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>

    </tr>
  </thead>
  <tbody>
    <tr v-for="(org, index) in orgs">
      <th scope="row">{{index + 1}}</th>
      <td>{{org.name}}</td>
      <td>{{org.description}}</td>
      <td><button type="button" class="btn btn-dark" v-on:click="selectOrg(org)" onclick="location.href = '#/org-item';">More</button></td>

    </tr>

  </tbody>
</table>

<button type="button" class="btn btn-dark"  onclick="location.href = '#/add-org';">Add New ORG</button>
</br>
</br>
</br>
    </div>


</div>
`	,
mounted(){

    axios.get("http://localhost:9003/orgs").then(resp => (this.orgs = resp.data));
    this.logIn().then(resp => {this.logedInUser = resp.data;});



},
	methods: {
        selectOrg: function(org){
            this.$root.$emit('sendingOrg', org);
        },
        logIn: function(){
          return axios.get("http://localhost:9003/loginUser");
        }




        }


})