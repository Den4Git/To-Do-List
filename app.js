Vue.createApp({
    data() {
        return{
            valueInput: '',
            needDolist: [],
            completeList: []
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
        },
        doCheck (index, type) {
            if(type === 'need') {
                const completeMask = this.needDoList.splice(index, 1);
                this.completeList.push(...completeMask);
            }
            else {
                const noCompleteMask = this.completeList.splice(index, 1);
                this.needDoList.push(...noCompleteMask);
            }
        },
        removeMask (index, type) {
            const toDoList = type === 'need' ? this.needDoList : this.completeList:
            toDoList.splice(index,1);
        }
    }
}).mount('#app');