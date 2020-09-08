Vue.component("add-user", {
	data: function () {
		    return {
          user: {email: "", password: "", firstName: "", lastName: "", organisation: "", role: ""},
          isAddFail: false,
          orgs: null,
          isPasswordOK: true,
          isEmailOK: true,
          isAddOK: true,
          password1: '',
          password2: '',
          logedInUser: null,
		    }
	},
    template: `

    <div class="pozadina align-left" v-if="logedInUser">
    <navbar></navbar>
    <h1>Add User</h1>
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
          <input type="text" class="form-control form-control-lg" v-model="user.firstName"  placeholder ="First Name">
        </div>
        <div class="col">
        <label><b>Last Name:</b></label>
          <input type="text" class="form-control form-control-lg" v-model="user.lastName"  placeholder ="Last Name">
        </div>
        <div class="col" v-if="logedInUser.role==='ADMIN'">
        <label><b>Organisation: {{logedInUser.organisation}}</b></label>
        </div>
      </div>
    </form>

    <br>

    <form>
      <div class="form-group">
        <label for="exampleInputEmail1"><b>Email adress:</b></label>
        <input type="email" class="form-control" v-bind:class="{'is-invalid': !isEmailOK }" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="user.email"  placeholder ="Email">
        <div class="invalid-feedback">
          Email is incorrect!
        </div>
      </div>
      <div class="form-group">
        <label for="password1"><b>Enter password:</b></label>
        <input type="password" class="form-control" v-bind:class="{'is-invalid': !isPasswordOK }" id="password1" v-model="password1">
      </div>
      <div class="form-group">
        <label for="password2"><b>Re-Enter password:</b></label>
        <input type="password" class="form-control" v-bind:class="{'is-invalid': !isPasswordOK }" id="password2" v-model="password2">
        <div class="invalid-feedback">
          Passwords don't match!
        </div>
      </div>
      <div class="form-group" v-if="logedInUser.role==='SUPER_ADMIN'">
      <label for="exampleFormControlSelect1"><b>Choose ORG:</b></label>
      <select v-model="user.organisation" class="form-control" id="exampleFormControlSelect1">
        <option v-for="org in orgs">{{org.name}}</option>
      </select>
    </div>
    <div class="form-group">
      <label for="exampleFormControlSelect2"><b>Choose Role:</b></label>
      <select v-model="user.role" class="form-control" id="exampleFormControlSelect2">
        <option>ADMIN</option>
        <option>USER</option>
      </select>
    </div>
     <button type="button" v-on:click="addUser" onclick="location.href = '#/users';" class="btn btn-dark">Add User</button>

    </form>
     <div v-if = "isAddFail" class="alert alert-danger">
     <strong>Edit Failed!</strong> Something went wrong.
     </div>
    </div>
`	,

  mounted(){
    axios.get("http://localhost:9003/orgs").then(resp => (this.orgs = resp.data));
    this.logIn().then(resp => {this.logedInUser = resp.data;});
  },
	methods: {
    axiosCall: function(){
      return axios.post("http://localhost:9003/users/add", this.user);

    },
    addUser:function(){
      this.isAddOK = true;
      this.isPasswordOK = true;
      this.isEmailOK = true;

      this.isAddFail = false;

      if(!(this.validateEmail(this.user.email))){
          this.isAddOK = false;
          this.isEmailOK = false;
      }

        if(this.password1 === this.password2){
            this.user.password = this.password1;
        }else{
            this.isAddOK = false;
            this.isPasswordOK = false;
        }

      console.log(this.user);
      if(this.isAddOK){
        if(this.logedInUser.role==="ADMIN"){
          this.user.organisation = this.logedInUser.organisation;
        }
          this.axiosCall().then(response => {
              if(response.data === "OK"){

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
  logIn: function(){
    return axios.get("http://localhost:9003/loginUser");
  },

        }


})