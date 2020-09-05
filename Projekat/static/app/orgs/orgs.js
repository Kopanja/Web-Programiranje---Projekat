Vue.component("orgs", {
	data: function () {
		    return {
		      orgs: null
		    }
	},
    template: `

    <div>
    <navbar></navbar>
    <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(org, index) in orgs">
      <th scope="row">{{index + 1}}</th>
      <td>{{org.name}}</td>
      <td>{{org.catagory}}</td>
      <td>{{org.numOfCores}}</td>
      <td><button type="button" class="btn btn-dark" v-on:click="selectOrg(org)" onclick="location.href = '#/org-item';">More</button></td>
      <td><button type="button" class="btn btn-dark" v-on:click="deleteOrg(org)" onclick="location.href = '#/orgs';">Delete</button></td>
    </tr>

  </tbody>
</table>

<button type="button" class="btn btn-dark"  onclick="location.href = '#/add-org';">Add New ORG</button>
    </div>


</div>
`	,
mounted(){

    console.log('AAAAAAAAAAAAAAAAA');
    console.log(this.orgs);
    //axios.post("http://localhost:9003/post", {username: this.username, password : this.password}).then(resp => {console.log(resp.data)});
    axios.get("http://localhost:9003/orgs").then(resp => (this.orgs = resp.data));
    console.log(this.orgs);


},
	methods: {
        selectOrg: function(org){
            this.$root.$emit('sendingOrg', org);
        },
        deleteOrg: function(org){
          console.log("VVVVVVVVVVVVVVVVVVVVVVVVVVVVVV");
          var path = "http://localhost:9003/orgs/delete/";
          console.log(path);
          axios.delete(path.concat(org.name)).then(resp => {console.log(resp.data)});
          axios.get("http://localhost:9003/orgs").then(resp => (this.orgs = resp.data));
        }



        }


})