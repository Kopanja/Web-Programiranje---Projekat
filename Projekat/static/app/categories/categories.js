Vue.component("categories", {
	data: function () {
		    return {
          categories: null,
          logedInUser: null,
		    }
	},
    template: `

    <div v-if="categories">
    <navbar></navbar>
    </br>
    <h3 class="align-left">Categories</h3>

    <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Number of Cores</th>
      <th scope="col">RAM</th>
      <th scope="col">GPU Cores</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(cat, index) in categories">
      <th scope="row">{{index + 1}}</th>
      <td>{{cat.name}}</td>
      <td>{{cat.numOfCores}}</td>
      <td>{{cat.ram}}</td>
      <td>{{cat.gpuCores}}</td>
      <td><button type="button" class="btn btn-dark" v-on:click="selectCat(cat)" onclick="location.href = '#/cat-item';">More</button></td>
      <td><button type="button" class="btn btn-dark" v-on:click="deleteCat(cat)" onclick="location.href = '#/cats';">Delete</button></td>
    </tr>

  </tbody>
</table>

<button type="button" class="btn btn-dark"  onclick="location.href = '#/add-cat';">Add New Category</button>
</br>
</br>
</br>
</div>


</div>
`	,
mounted(){

  this.getLogIn().then(resp => {
    this.logedInUser = resp.data;
    this.getAllCats().then(resp => (this.categories = resp.data));
  })


},
	methods: {
        selectCat: function(cat){
            this.$root.$emit('sendCat', cat);
        },
        deleteCat: function(cat){
          var path = "http://localhost:9003/disks/delete/";
          console.log(path);
          axios.delete(path.concat(cat.name)).then(resp => {console.log(resp.data)});
          axios.get("http://localhost:9003/cats").then(resp => (this.categories = resp.data));
        },
        getLogIn: function () {
          return axios.get("http://localhost:9003/loginUser");
        },
        getAllCats: function () {
          return axios.get("http://localhost:9003/cats");
        },




        }


})