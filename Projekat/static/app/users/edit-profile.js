Vue.component("edit-profile", {
	data: function () {
		    return {
              user: null,
              isChangingPassword: false,
              password1 : '',
              password2 : '',
              isChangeOK: true,
              isPasswordOK: true,
              isEmailOK: true,
              isChangeSuccess: false,
              isChangeFail: false,
		    }
	},
    template: `

    <div class="pozadina align-left" v-if="user">
    <navbar></navbar>
    <h1>Edit Profile</h1>
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
      <div class="form-group">
        <label for="exampleInputEmail1"><b>Email adress:</b></label>
        <input type="email" class="form-control" v-bind:class="{'is-invalid': !isEmailOK }" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="user.email"  value ="user.email">
        <div class="invalid-feedback">
          Email is incorrect!
        </div>
      </div>
      <div class="form-group" v-if="isChangingPassword">
        <label for="password1"><b>Enter password:</b></label>
        <input type="password" class="form-control" v-bind:class="{'is-invalid': !isPasswordOK }" id="password1" v-model="password1">
      </div>
      <div class="form-group" v-if="isChangingPassword">
        <label for="password2"><b>Re-Enter password:</b></label>
        <input type="password" class="form-control" v-bind:class="{'is-invalid': !isPasswordOK }" id="password2" v-model="password2">
        <div class="invalid-feedback">
          Passwords don't match!
        </div>
      </div>

      <button type="button" v-if="!isChangingPassword" v-on:click="changePassword" class="btn btn-dark">Change Password</button>

     <button type="button" v-on:click="editUser" class="btn btn-dark">Save Profile</button>

    </form>
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
        editUser:function(){
            this.isChangeOK = true;
            this.isPasswordOK = true;
            this.isEmailOK = true;
            this.isChangeSuccess = false;
            this.isChangeFail = false;

            if(!(this.validateEmail(this.user.email))){
                this.isChangeOK = false;
                this.isEmailOK = false;
            }
            if(this.isChangingPassword){
                if(this.password1 === this.password2){
                    this.user.password = this.password1;
                }else{
                    this.isChangeOK = false;
                    this.isPasswordOK = false;
                }
            }
            if(this.isChangeOK){
                this.axiosCall().then(response => {
                    if(response.data === "OK"){
                        this.isChangeSuccess = true
                    }
                    if(response.data === "Status 400"){
                        this.isChangeFail = true
                    }
                })
            }
        },
        validateEmail: function(email) {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        },
        axiosCall: function(){
            return axios.put("http://localhost:9003/edit-profile", this.user);
        }
        }


})