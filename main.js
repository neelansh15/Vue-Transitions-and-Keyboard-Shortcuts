
new Vue({
    el: "#app",
    data:{
        tab: 1,
    },
    mounted(){
        //Arrow function is important here. Without it, 'this' would mean the Window instead of the Vue instance
        Mousetrap.bind('1', () => {
            this.tab = 1
        })
        Mousetrap.bind('2', () => {
            this.tab = 2
        })
        Mousetrap.bind('3', () => {
            this.tab = 3
        })
    }
})

