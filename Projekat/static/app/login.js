Vue.component("login", {
	data: function () {
		    return {
              username: '',
              password: '',
              user: null,
              bol: false
		    }
	},
    template: `

    <div>
    <div class="login">
        <p>Log In</p>
    </div>
    <div class="info">
        <form class="loginpage">
        <label class="padding" for="username">Username:</label>
        <input class="padding" type="text" name="username" v-model="username" value="">
        <br>
        <label class="padding" for="password">Password:</label>
        <input class="padding" type="password" name="password" v-model="password" value="">
        <br>
        <button type = "button" @click="loginFunc" class="myButton">Submit</button>
        </form>
        <div v-if = "bol" class="alert alert-success">
        <strong>Success!</strong> You should <a href="#/vms" class="alert-link">read this message</a>.
        </div>
    </div>


</div>
`	,


methods: {

    loginFunc: function(){
            //console.log(this.username);
            console.log('AAAAAAAAAAAAAAAAA');
            console.log(this.user);
            this.func().then(response => {
                this.user = response.data;
                if(response.data === "OK"){
                    this.bol = true
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