<template>
    <div id="app">
        <router-view></router-view>
        <myside
            v-show="sideShow"
            :style="{height: getSideHeight + 'px'}"
        ></myside>
    </div>
</template>

<script>
    import myside from './components/aside.vue'
    import {mapActions, mapGetters} from 'vuex'
    // import jsonBook from "@/data/book.json"
    // var jsonBook = require('./data/book.json');

    export default{
        name: 'App',
        components:{
            myside
        },
        watch:{
            $route(oTo){
                let sPath = oTo.path,
                    o = {
                        iIndex: 0,
                        getPath: '../static/book.json'
                    },
                    o2 = {
                        iIndex: 0,
                        getPath: '../static/active.json'
                    };
                
                if(sPath == '/book'){
                    o.iIndex = 1;
                }else if(sPath.indexOf('/book') > -1){
                    o.iIndex = sPath.slice(sPath.length - 1);
                    o.getPath = '../static/book.json';
                }else if(sPath == '/active'){
                    o2.iIndex = 2;
                }else if(sPath.indexOf('/active') > -1){
                    o2.iIndex = sPath.slice(sPath.length - 1);
                    o2.getPath = '../static/active.json'
                }
                if(o.iIndex){
                    this.loadBookData(o);
                }
                if(o2.iIndex){
                    this.loadActiveData(o2);
                }
            }
        },
        methods:mapActions([
            'loadBookData',
            'loadActiveData'
        ]),
        computed:mapGetters([
            'sideShow',
            'getSideHeight'
        ])
    }
</script>

<style>
    body, div, p, ul, li{
        margin: 0;
        padding: 0;
        overflow-x: hidden;
    }
    a, a:visited, a:link{
        color: #666;
        text-decoration: none;
    }
    .home-footer{
        position: relative;
        left: 0;
        top: 0;
        background-color: #616161;
    }
</style>
