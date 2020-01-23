Vue.component("home", {
	data: function(){
		return {
			msg : ''
		}
	},
template: `
<div>
<input type = "checkbox" v-on:change="addTodo">
</div>
`,
methods: {
	addTodo: function(){
		axios.get('/test')
		.then(response => console.log(response));
	}
}
})