Vue.component("login", {
	data: function () {
		    return {
              username: '',
              password: ''
		    }
	},
    template: `

    <div>
    <navbar></navbar>
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
        <button type="submit" @click="loginFunc" class="myButton" onclick="location.href = '#/vms';" >Submit</button>
        </form>
    </div>


</div>
`	,
	methods: {

        loginFunc: function(){
            console.log(this.username);
            //axios.post("http://localhost:9003/post", {username: this.username, password : this.password}).then(resp => {console.log(resp.data)});
            axios.get("http://localhost:9003/test").then(resp => {console.log(resp.data)});


        },


        }
})