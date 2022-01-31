Vue.createApp({
    data() {
        return{
            valueInput: '',
            needDoList: []
        };
    },
    methods: {
        handlyInput(event) {
            this.valueInput = event.target.value;
        },
        AddTask() {
            if(this.valueInput === '') { return };
            this.needDoList.push({
                title: this.valueInput,
                id: Math.random()
            });
            this.valueInput = '';
        }
    }
}).mount('#app');