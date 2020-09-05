Vue.component("org-item", {
    data: function () {
      return {
        org: null
      }
    },
    template: `

    <div>
      <navbar></navbar>
      <form>
        <div class="form-group row">
        <label class="col-sm-2 col-form-label">Name:</label>
        <div class="col-sm-10">
          <input type="text" readonly class="form-control-plaintext" v-model="org.name">
        </div>
        </div>
        <div class="form-group row">
        <label class="col-sm-2 col-form-label">Description:</label>
        <div class="col-sm-10">
          <input type="text" readonly class="form-control-plaintext" v-model="org.description">
        </div>
        </div>

    </form>
    </div>


  </div>
  `	,
    created() {
      this.$root.$on('sendingOrg', (org) => { this.org = org; });

    },
    methods: {


    }


  })