<template>
    <div id="app">
        <div class="content">
            <div>
                <img class="banner" src="./assets/img/d_banner.jpg" alt="">
            </div>
            <div class="home-icons">
                <homeicons></homeicons>
            </div>
            <div class="home-category">
                
            </div>
        </div>
        <footer>
            
        </footer>
    </div>
</template>

<script>
    import homeicons from './components/homeicons'

    export default {
        components: {
            homeicons
        }
    }
</script>

<style>
    body, div, p, ul, li{
        margin: 0;
        padding: 0;
    }
    .banner{
        width: 100%;
    }
</style>
