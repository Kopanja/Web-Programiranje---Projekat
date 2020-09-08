Vue.component("edit-vm", {
  data: function () {
    return {
      vm: null,
      oldOrgName: '',
      isChangeOK: true,
      isChangeSuccess: false,
      isChangeFail: false,
      categories: null,
      selectedCatID: '',
      selectedCat: null
    }
  },
  template: `

    <div class="pozadina align-left" v-if="vm">
    <navbar></navbar>
    <h1>Edit VM</h1>
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

       <button type="submit" class="btn btn-dark">Save VM</button>

    </div>
`	,
  mounted() {
    this.$root.$on('sendingVMProfile', (vm) => {
      this.vm = vm;
      //this.oldOrgName = this.org.name;
      this.getAllCategories().then(resp => {this.categories = resp.data;})
    });

  },

  methods: {
    editVM: function () {

      this.isChangeSuccess = false;
      this.isChangeFail = false;

      this.axiosCall().then(response => {
        if (response.data === "OK") {
          this.isChangeSuccess = true
        }
        if (response.data === "Status 400") {
          this.isChangeFail = true
        }
      })

    },
    axiosCall: function () {
      return axios.put("http://localhost:9003/edit-vm", { org: this.org, oldName: this.oldOrgName });
    },
    getAllCategories: function(){
      return axios.get("http://localhost:9003/cats");
    },
    getCat: function(event){
      axios.post("http://localhost:9003/findCatById", event.target.value).then(resp => {this.selectedCat = resp.data});
    }

  }


})