Vue.createApp({
    data() {
        return{
            valueInput: '',
            needDolist: []
        };
    },
    methods: {
        handlyInput (event) {
            this.valueInput = event.target.value;
        },
        addTask() {
            if(this.valueInput === '') { return };
            this.needDolist.push({
                title: this.valueInput,
                id: Math.random()
            });
            this.valueInput = '';
        }
    }
}).mount('#app');
