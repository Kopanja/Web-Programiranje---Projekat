Vue.component("edit-user", {
	data: function () {
		    return {
              user: null,
              isChangeOK: true,
              isChangeSuccess: false,
              isChangeFail: false,
              isRoleChanged: false,
		    }
	},
    template: `

    <div class="pozadina align-left" v-if="user">
    <navbar></navbar>
    <h1>Edit User</h1>
    <h2><b>{{user.role}}</b></h2>
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
        <label><b>First Name:</b></label>
          <input type="text" class="form-control form-control-lg" v-model="user.firstName"  value ="user.firstName">
        </div>
        <div class="col">
        <label><b>Last Name:</b></label>
          <input type="text" class="form-control form-control-lg" v-model="user.lastName"  value ="user.lastName">
        </div>
      </div>
    </form>

    <br>

    <form>

    <button type="button" v-if="user.role==='USER'" v-on:click="promoteToAdmin" class="btn btn-dark">Promote user to admin</button>

    <button type="button" v-if="user.role==='ADMIN'" v-on:click="demoteToUser" class="btn btn-dark">Demote admin to user</button>

     <button type="button" v-on:click="editUser" class="btn btn-dark">Save Profile</button>

    </form>
    <div v-if = "isRoleChanged" class="alert alert-primary">
     <strong>Role is changed to {{user.role}}</strong>.
    </div>
    <div v-if = "isChangeSuccess" class="alert alert-success">
     <strong>Success!</strong> To continue <a href="#/vms" class="alert-link">click here</a>.
    </div>
     <div v-if = "isChangeFail" class="alert alert-danger">
     <strong>Edit Failed!</strong> Something went wrong.
     </div>
    </div>
`	,
mounted() {
    this.$root.$on('sendingUserProfile', (user) => {
      this.user = user;
    });

  },

	methods: {
        changePassword: function(){
            this.isChangingPassword = true;
        },

        promoteToAdmin:function(){
            this.user.role = "ADMIN";
            this.isRoleChanged = true;
        },
        demoteToUser: function(){
            this.user.role = "USER";
            this.isRoleChanged = true;
        },
        editUser:function(){

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
            return axios.put("http://localhost:9003/edit-user", this.user);
        }
        }


})