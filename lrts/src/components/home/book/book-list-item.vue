<template>
	<div class="book-list-item">
		<div class="container">
			<div class="row">
				<div class="col-xs-3">
					<slot name="book-list-item-img-slot"></slot>
				</div>
				<div class="col-xs-9">
					<div>{{bookname}}</div>
					<div>播音：{{bookauthor}}</div>
					<div>集数：{{booknum}} 播放：{{bookbroadcast}}</div>
				</div>
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
			'bookbroadcast'
		]
	}

</script>

<style scoped>
	.book-list-item{
		padding: 10px 5px;
		color: #666;
		border-top: 1px solid #eee;
	}
	.list-item-img{
		height: 61px;
		width: 61px;
		line-height: 61px;
		text-align: center;
		overflow: hidden;
	}
</style>