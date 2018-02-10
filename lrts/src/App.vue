<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default{
        watch:{
            $route(oTo){
                let sPath = oTo.path,
                    o = {
                        iIndex: "0",
                        getPath: '../src/data/book.json'
                    };
                
                if(sPath == '/book'){
                    o.iIndex = 1;
                }else if(sPath.indexOf('/book') > -1){
                    o.iIndex = sPath.slice(sPath.length - 1);
                    o.getPath = '../../../src/data/book.json'
                }
                if(o.iIndex){
                    this.loadBookData(o);
                }
            }
        },
        methods:mapActions([
            'loadBookData'
        ])
    }
</script>

<style>
    body, div, p, ul, li{
        margin: 0;
        padding: 0;
        overflow-x: hidden;
    }
    a, a:active{
        text-decoration: none;
    }
    .home-footer{
        /*position: absolute;*/
        position: relative;
        left: 0;
        top: 0;
        background-color: #616161;
    }
</style>
