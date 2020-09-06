Vue.component("login", {
	data: function () {
		    return {
              username: '',
              password: '',
              user: null,
              isLoginSuccess: false,
              isLoginFail: false,
              usrNameEmpty: false,
              passWordEmpty: false
		    }
	},
    template: `

    <div>
    <div class="login">
        <p>Log In</p>
    </div>
    <div class="info">
        <form class="loginpage">
        <div class="row justify-content-center">
        <label class="padding" for="username">Username:</label>
        <div class="col-2">
        <input  v-bind:class="{'form-control is-invalid': usrNameEmpty }"  type="text" name="username" v-model="username" value="">
        <div class="invalid-feedback">
          Please enter username.
        </div>
        </div>
        </div>
        <br>
        <div class="row justify-content-center">
        <label class="padding" for="password">Password:</label>
        <div class="col-2">
        <input v-bind:class="{'form-control is-invalid': passWordEmpty }" type="password" name="password" v-model="password" value="">
        <div class="invalid-feedback">
          Please enter password.
        </div>
        </div>
        </div>
        <br>

        <button type = "button" @click="loginFunc" class="myButton">Submit</button>
        </form>
        <div v-if = "isLoginSuccess" class="alert alert-success">
        <strong>Success!</strong> To continue <a href="#/vms" class="alert-link">click here</a>.
        </div>
        <div v-if = "isLoginFail" class="alert alert-danger">
        <strong>Login Failed!</strong> Username or Password is incorect.
        </div>
    </div>


</div>
`	,


methods: {

    loginFunc: function(){
            //console.log(this.username);
            this.usrNameEmpty = false;
            this.passWordEmpty = false;
            this.isLoginSuccess = false;
            this.isLoginFail = false;

            var isOk = true;

            if(this.username === ''){
                this.usrNameEmpty = true;
                isOk = false;
            }
            if(this.password === ''){
                this.passWordEmpty = true;
                isOk = false;
            }
            console.log(this.passWordEmpty);
            console.log(this.usrNameEmpty);
            if(!isOk){
                return;
            }
            this.func().then(response => {
                this.user = response.data;
                if(response.data === "OK"){
                    this.isLoginSuccess = true
                }
                if(response.data === "Status 400"){
                    this.isLoginFail = true
                }

            });
            //axios.get("http://localhost:9003/loginUser").then(resp => {this.user = resp.data; this.bol = true});
            console.log(this.user);
            //this.router.push('vms');
            console.log('BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB');

        },
    func: function(){
        return axios.post("http://localhost:9003/login", {username: this.username, password : this.password});
    }

        }


})