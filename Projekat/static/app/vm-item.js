Vue.component("vm-item", {
	data: function () {
		    return {
		      vm: null
		    }
	},
    template: `

    <div>
    <navbar></navbar>
    {{vm}}
    </div>


</div>
`	,
created(){
    this.$root.$on('messageFromParent', (vm)=> {this.vm = vm;});

},
	methods: {


        }


})