<template>
	<div>
		<div class="content">
            <div>
                <img class="banner" src="../assets/img/d_banner.jpg" alt="">
            </div>
            <div class="home-icons">
                <homeicons></homeicons>
            </div>
            <div class="home-category">
                <homecategory></homecategory>
            </div>
        </div>
        <footer class="home-footer">
            <homefooter></homefooter>
        </footer>
	</div>
</template>

<script>
    import homeicons from './home/homeicons'
    import homecategory from './home/homecategory'
    import homefooter from './homefooter'

    export default {
        components: {
            homeicons,
            homecategory,
            homefooter
        }
    }
</script>

<style>
    .content{
        min-height: 608px;
    }
    .banner{
        width: 100%;
    }
</style>