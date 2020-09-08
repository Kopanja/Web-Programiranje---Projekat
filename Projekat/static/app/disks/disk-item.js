Vue.component("disk-item", {
    data: function () {
      return {
        disk: null,
        vm: null
      }
    },
    template: `
    <div class="pozadina align-left" v-if="disk && vm">
    <h1>{{disk.name}}</h1>
    <h2><b>{{disk.organisation}}</b></h2>
    <hr class="picline">

    <div class="container">
      <div class="row">
        <div class="col">
          <ul class="list-group list-group-horizontal-md">
            <li class="list-group-item list-group-item-secondary"><b>Tip:</b></li>
            <li class="list-group-item list-group-item-light">{{disk.type}}</li>
          </ul>
          </div>
          <div class="col">
            <ul class="list-group list-group-horizontal-md">
              <li class="list-group-item list-group-item-secondary"><b>Kapacitet:</b></li>
              <li class="list-group-item list-group-item-light">{{disk.capacity}}</li>
            </ul>
          </div>
        </div>
      </div>

      <hr class="tableline">

      <div class="container">
      <div class="row">
        <div class="col">
          <h2>Virtualna mašina</h2>
        </div>
      </div>
      <div class="row">
      <div class="table-wrapper-scroll-y my-custom-scrollbar col">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Ime</th>
            <th scope="col">Kategorija</th>
            <th scope="col">Broj jezgara</th>
            <th scope="col">RAM</th>
            <th scope="col">GPU</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{vm.name}}</td>
            <td>{{vm.catagory}}</td>
            <td>{{vm.numOfCores}}</td>
            <td>{{vm.ram}}</td>
            <td>{{vm.gpuCores}}</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
    </div>
    </div>
  `	,
    mounted() {
      this.$root.$on('sendDisk', (disk) => {
        this.disk = disk;

        this.getVMById().then(resp => {this.vm = resp.data})
      });

    },

    methods: {
      getVMById: function(){
        return axios.post("http://localhost:9003/findVMById", this.disk.vm);
      },
      editDisk: function(disk){
        this.$root.$emit('sendingDiskProfile', disk);
      }

    }


  })