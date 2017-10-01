new Vue({
    el: '#app',
    data: {
        title: 'hello',
        link: 'http://1tv.ru',
        linkTag: '<a href="http://">гугл</a>',
        coords: {
            x: 0,
            y: 0
        },
        anotherTitle: '',
        anotherX: 0
    },
    methods:{
        changeTitle(e){
            this.title = e.target.value
        },
        checkCoords(e){
            this.coords.x = e.pageX
            this.coords.y = e.pageY
        },
        handleClick(title, event){
            this.anotherTitle = title
            this.anotherX = event.pageX
        }
    }
});