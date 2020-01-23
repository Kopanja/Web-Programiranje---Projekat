Vue.component("proba", {
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
//Da vidim da li menja
methods: {
	addTodo: function(){
		axios.get('/proba')
		.then(response => console.log(response));
	}
}
})