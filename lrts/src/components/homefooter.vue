<template>
	<div class="homefooter">
		<div class="homefooter-search">
			<div class="form-group">
				<div class="input-group">
					<input class="homefooter-search-input form-control" type="text" placeholder="搜索书籍/节目/主播">
					<div class="input-group-btn">
						<div class="btn btn-warning">
							搜索
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="tc">
			<div class="row">
				<div class="col-xs-3">官方博客</div>
				<div class="col-xs-3">主播服务</div>
				<div class="col-xs-3">电脑版官网</div>
				<div class="col-xs-3">App下载</div>
			</div>
		</div>
		<div class="tcend">
			&copy; 懒人听书 粤ICP备13061962号-6
		</div>
	</div>
</template>

<style scoped>
	.homefooter > .homefooter-search{
		padding: 20px 5px 0 5px;
	}
	.homefooter-search-input, .homefooter-search .input-group-btn{
		color: #eee;
		background-color: #2c2c2c;
		border: none;
		outline: none;
	}
	.homefooter > .tc, .homefooter > .tcend{
		color: #b3b3b3;
		text-align: center;
		margin: 8px 25px;
		font-size: 12px;
	}
	.homefooter > .tc > .row > .col-xs-3{
		border-right: 1px solid #b3b3b3;
	}
	.btn-warning, .btn-warning:hover{
		background-color: #2c2c2c;
		border-color: #2c2c2c;
	}
</style>