Vue.component("add-vm", {
	data: function () {
		    return {
		      vm: {name: "", catagory: "",organisation: "", numOfCores: "", ram: "", gpuCores: ""},
          isChangeOK: true,
          isChangeSuccess: false,
          isChangeFail: false,
          categories: null,
          selectedCatID: '',
          selectedCat: null,
          orgs: null,
        }
      },
      template: `

        <div class="pozadina align-left" v-if="vm">
        <navbar></navbar>
        <h1>Add VM</h1>
        <hr class="picline">

        <form>
          <div class="form-row">
            <div class="col">
              <input type="text" class="form-control form-control-lg" v-model="vm.name" value="vm.name">
            </div>
          </div>
        </form>

        <br>

        <form>
        <div class="form-group" v-if="categories">
            <label for="exampleFormControlSelect1">Select Category</label>
            <select v-model="selectedCatID" @change="getCat($event)" class="form-control" id="exampleFormControlSelect1">
              <option v-for="cat in categories">{{cat.name}}</option>
            </select>
          </div>
        </form>

        <div class="container" v-if="selectedCat">
          <div class="row">
            <div class="col">
              <ul class="list-group list-group-horizontal-md">
                <li class="list-group-item list-group-item-secondary"><b>Kategorija:</b></li>
                <li class="list-group-item list-group-item-light">{{selectedCat.name}}</li>
              </ul>
              <ul class="list-group list-group-horizontal-md">
                <li class="list-group-item list-group-item-secondary"><b>Broj jezgara:</b></li>
                <li class="list-group-item list-group-item-light">{{selectedCat.numOfCores}}</li>
              </ul>
              </div>
              <div class="col">
                <ul class="list-group list-group-horizontal-md">
                  <li class="list-group-item list-group-item-secondary"><b>RAM:</b></li>
                  <li class="list-group-item list-group-item-light">{{selectedCat.ram}}</li>
                </ul>
                <ul class="list-group list-group-horizontal-md">
                  <li class="list-group-item list-group-item-secondary"><b>GPU jezgra:</b></li>
                  <li class="list-group-item list-group-item-light">{{selectedCat.gpuCores}}</li>
                </ul>
              </div>
              </div>
          </div>
          <form>
          <div class="form-group">
          <label for="exampleFormControlSelect1"><b>Choose ORG:</b></label>
          <select v-model="vm.organisation" class="form-control" id="exampleFormControlSelect1">
            <option v-for="org in orgs">{{org.name}}</option>
          </select>
        </div>
        </form>
           <button type="button" @click="addVM" onclick="location.href = '#/vms';" class="btn btn-dark">Add VM</button>

        </div>
    `	,
      mounted() {
        this.getAllCategories().then(resp => {this.categories = resp.data;})
        axios.get("http://localhost:9003/orgs").then(resp => (this.orgs = resp.data));

      },

      methods: {
        addVM: function () {

          this.vm.catagory = this.selectedCat.name;
          this.vm.numOfCores = this.selectedCat.numOfCores;
          this.vm.ram = this.selectedCat.ram;
          this.vm.gpuCores = this.selectedCat.gpuCores;

          this.axiosCall().then(response => {
            if (response.data === "OK") {
              router.push('/vms');
            }
            if (response.data === "Status 400") {
              this.isChangeFail = true
            }
          })

        },
        axiosCall: function(){
          return axios.post("http://localhost:9003/vms/add", this.vm);

        },
        getAllCategories: function(){
          return axios.get("http://localhost:9003/cats");
        },
        getCat: function(event){
          axios.post("http://localhost:9003/findCatById", event.target.value).then(resp => {this.selectedCat = resp.data});
        },


      }

})