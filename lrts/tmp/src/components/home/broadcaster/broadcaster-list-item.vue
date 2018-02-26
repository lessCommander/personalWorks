<template>
	<div class="broadcaster-list-item">
		<div class="media">
			<div class="media-left media-middle">
				<a href="javascript:">
					<slot name="broadcaster-list-item-img-slot"></slot>
				</a>
			</div>
			<div class="media-body">
				<h4 class="media-heading">{{brname}}</h4>
				<div>最近更新：{{brauthor}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		props:[
			'brname',
			'brauthor'
		]
	}

</script>

<style scoped>
	.broadcaster-list-item{
		padding: 10px 5px;
		color: #666;
		border-bottom: 1px solid #eee;
	}
	.media-body h4{
		color: #333;
	}
	.media-body div{
		font-size: 12px;
		color: #999;
	}
</style>