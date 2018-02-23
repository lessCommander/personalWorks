<template>
	<div class="a-page">
		<activePageItem
			v-for="(item, index) in getActiveData"
			:key="index"
			:a-item-title="item.title"
			:a-item-time="item.time"
			:a-item-content="item.content"
			></activePageItem>
		<activePagination></activePagination>
	</div>
</template>

<script>
	import activePageItem from './activePageItem.vue'
	import activePagination from './activePagination.vue'
	import {mapGetters} from 'vuex'

	export default{
		components:{
			activePageItem,
			activePagination
		},
		computed: mapGetters([
			'getActiveData'
		])
	}
</script>

<style scoped>
	.a-page{
		background-color: #eee;
	}
</style>