Vue.component("edit-vm", {
	data: function () {
		    return {
              vm: null,
              oldOrgName: '',
              isChangeOK: true,
              isChangeSuccess: false,
              isChangeFail: false,
		    }
	},
    template: `

    <div class="pozadina align-left" v-if="vm">
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
    <div class="form-group">
        <label for="exampleFormControlSelect1">Example select</label>
        <select class="form-control" id="exampleFormControlSelect1">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>5</option>
          <option>5</option>
        </select>
      </div>
    </form>

    <div class="container">
      <div class="row">
        <div class="col">
          <ul class="list-group list-group-horizontal-md">
            <li class="list-group-item list-group-item-secondary"><b>Kategorija:</b></li>
            <li class="list-group-item list-group-item-light">category1</li>
          </ul>
          <ul class="list-group list-group-horizontal-md">
            <li class="list-group-item list-group-item-secondary"><b>Broj jezgara:</b></li>
            <li class="list-group-item list-group-item-light">4</li>
          </ul>
          </div>
          <div class="col">
            <ul class="list-group list-group-horizontal-md">
              <li class="list-group-item list-group-item-secondary"><b>RAM:</b></li>
              <li class="list-group-item list-group-item-light">32GB</li>
            </ul>
            <ul class="list-group list-group-horizontal-md">
              <li class="list-group-item list-group-item-secondary"><b>GPU jezgra:</b></li>
              <li class="list-group-item list-group-item-light">6552</li>
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
    });

  },

	methods: {
        editVM:function(){

            this.isChangeSuccess = false;
            this.isChangeFail = false;

            this.axiosCall().then(response => {
                if(response.data === "OK"){
                    this.isChangeSuccess = true
                }
                if(response.data === "Status 400"){
                    this.isChangeFail = true
                }
            })

        },
        axiosCall: function(){
            return axios.put("http://localhost:9003/edit-vm", {org: this.org, oldName: this.oldOrgName});
        }
        }


})