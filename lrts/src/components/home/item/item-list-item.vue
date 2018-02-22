<template>
	<div class="item-list-item">
		<div class="media">
			<div class="media-left media-middle">
				<a href="javascript:">
					<slot name="item-list-item-img-slot"></slot>
				</a>
			</div>
			<div class="media-body">
				<h4 class="media-heading">{{bookname}}</h4>
				<div>原创：{{bookauthor}}</div>
				<div>声音：{{booknum}} 更新：{{updatetime}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		props:[
			'bookname',
			'bookauthor',
			'booknum',
			'updatetime'
		]
	}

</script>

<style scoped>
	.item-list-item{
		padding: 10px 5px;
		color: #666;
		border-bottom: 1px solid #eee;
	}
	.media-body h4{
		color: #333;
	}
	.media-body div{
		font-size: 12px;
		color: #aaa;
	}
</style>