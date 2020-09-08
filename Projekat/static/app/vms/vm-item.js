Vue.component("vm-item", {
  data: function () {
    return {
      vm: null,
      disks: null
    }
  },
  template: `
<div v-if = "vm">
<navbar></navbar>
  <div class="pozadina align-left">
<div class="w3-container">
  <div v-if="vm">
    <h1>{{vm.name}}</h1>
    <hr class="nameline" />
    <h2><b>{{vm.organisation}}</b></h2>
    <button type="button" class="btn btn-dark" v-on:click="editVM(vm)" onclick="location.href = '#/edit-vm';">Edit VM</button>
    <hr class="picline">
  </div>
  </div>

  <div class="container" v-if="vm">
    <div class="row">
      <div class="col">
        <ul class="list-group list-group-horizontal-md">
          <li class="list-group-item list-group-item-secondary"><b>Kategorija:</b></li>
          <li class="list-group-item list-group-item-light">{{vm.catagory}}</li>
        </ul>
        <ul class="list-group list-group-horizontal-md">
          <li class="list-group-item list-group-item-secondary"><b>Broj jezgara:</b></li>
          <li class="list-group-item list-group-item-light">{{vm.numOfCores}}</li>
        </ul>
        </div>
        <div class="col">
          <ul class="list-group list-group-horizontal-md">
            <li class="list-group-item list-group-item-secondary"><b>RAM:</b></li>
            <li class="list-group-item list-group-item-light">{{vm.ram}}</li>
          </ul>
          <ul class="list-group list-group-horizontal-md">
            <li class="list-group-item list-group-item-secondary"><b>GPU jezgra:</b></li>
            <li class="list-group-item list-group-item-light">{{vm.gpuCores}}</li>
          </ul>
        </div>
        </div>
    </div>

  <hr class="tableline">

<div class="container">
  <div class="row">
    <div class="col">
      <h2>Disks</h2>
    </div>
  </div>
  <div class="row">
<div class="table-wrapper-scroll-y my-custom-scrollbar col">
  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">ID</th>
        <th scope="col">Tip</th>
        <th scope="col">Kapacitet</th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="vm" v-for="(disk, index) in disks">
        <th scope="row">{{index + 1}}</th>
        <td>{{disk.name}}</td>
        <td>{{disk.type}}</td>
        <td>{{disk.capacity}}</td>
      </tr>
    </tbody>
  </table>
</div>

</div>
</div>
</div>
</div>
</div>
`	,
  mounted() {
    this.$root.$on('messageFromParent', (vm) => {
      this.vm = vm;
      //this.disks = this.vm.disks
      this.getDisksById().then(resp => {this.disks = resp.data})
    });

  },

  methods: {
    getDisksById: function(){
      return axios.post("http://localhost:9003/findDisksById", this.vm.disks);
    },
    editVM: function(vm){
      this.$root.$emit('sendingVMProfile', vm);
    }

  }


})