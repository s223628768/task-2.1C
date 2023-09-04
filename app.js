const app = Vue.createApp({
    data() {
        return {
            newTask: "",
            tasks: []
        };
    },
    methods: {
        addTask() {
            if (this.newTask.trim() !== "") {
                this.tasks.push(this.newTask);
                this.newTask = "";
            }
        },
        completeTask(index) {
            // Implement logic to mark task as completed here
        },
        deleteTask(index) {
            this.tasks.splice(index, 1);
        }
    }
});

app.mount("#app");
