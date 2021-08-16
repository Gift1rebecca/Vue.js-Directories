new Vue({
    el: '#App',
    data: {
        title: 'Hello World!'
    },
    methods: {
        changeTitle: function(event) {
        this.title = event.target.value;
        }
    }
});