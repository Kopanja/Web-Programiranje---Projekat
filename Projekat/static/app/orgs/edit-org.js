Vue.component("edit-org", {
	data: function () {
		    return {
              org: null,
              oldOrgName: '',
              isChangeOK: true,
              isChangeSuccess: false,
              isChangeFail: false,
		    }
	},
    template: `

<div class="pozadina align-left" v-if="org">
<navbar></navbar>
<h1>Edit Organization</h1>
<hr class="picline">

<form>
  <div class="form-group">
    <label for="exampleFormControlFile1"><b>Upload photo:</b></label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1">
  </div>
</form>

<br>

<form>
  <div class="form-row">
    <div class="col">
      <input type="text" class="form-control form-control-lg" v-model = "org.name" value="org.name">
    </div>
  </div>
</form>

<br>

<form>
  <div class="form-group">
    <label for="exampleFormControlTextarea1"><b>Description:</b></label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
 </div>

 <button type="button" v-on:click="editOrg" class="btn btn-dark">Save Organization</button>
</form>

</div>
`	,
mounted() {
    this.$root.$on('sendingOrgProfile', (org) => {
      this.org = org;
      this.oldOrgName = this.org.name;
    });

  },

	methods: {
        editOrg:function(){

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
            return axios.put("http://localhost:9003/edit-org", {org: this.org, oldName: this.oldOrgName});
        }
        }


})