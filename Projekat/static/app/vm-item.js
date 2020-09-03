Vue.component("vm-item", {
  data: function () {
    return {
      vm: null
    }
  },
  template: `

  <div>
    <navbar></navbar>
    <form>
      <div class="form-group row">
      <label class="col-sm-2 col-form-label">Name:</label>
      <div class="col-sm-10">
        <input type="text" readonly class="form-control-plaintext" v-model="vm.name">
      </div>
      </div>
      <div class="form-group row">
      <label class="col-sm-2 col-form-label">Catagory:</label>
      <div class="col-sm-10">
        <input type="text" readonly class="form-control-plaintext" v-model="vm.catagory">
      </div>
      </div>
      <div class="form-group row">
      <label class="col-sm-2 col-form-label">Number of cores: </label>
      <div class="col-sm-10">
        <input type="text" readonly class="form-control-plaintext" v-model="vm.numOfCores">
      </div>
      </div>
  </form>
  </div>


</div>
`	,
  created() {
    this.$root.$on('messageFromParent', (vm) => { this.vm = vm; });

  },
  methods: {


  }


})