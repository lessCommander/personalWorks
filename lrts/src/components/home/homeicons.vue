<template>
	<div class="homeicons">
		<div class="contanier">
			<div class="row">
				<div class="col-xs-3">
					<router-link to="/book">
						<div>
							<img src="../../assets/img/home_bookcity.png" alt="">
						</div>
						<div class="homeicon-wrap-name">书城</div>
					</router-link>
				</div>
				<div class="col-xs-3">
					<router-link to="/item">
						<div>
							<img src="../../assets/img/home_item.png" alt="">
						</div>
						<div class="homeicon-wrap-name">节目</div>
					</router-link>
				</div>
				<div class="col-xs-3">
					<router-link to="/broadcaster">
						<div>
							<img src="../../assets/img/home_anchor.png" alt="">
						</div>
						<div class="homeicon-wrap-name">主播</div>
					</router-link>
				</div>
				<div class="col-xs-3">
					<router-link to="">
						<div>
							<img src="../../assets/img/home_active.png" alt="">
						</div>
						<div class="homeicon-wrap-name">活动</div>
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style scoped>
	.homeicons{
		padding: 20px 7px;
		background-color: #fff;
		text-align: center;
	}
	.homeicon-wrap-name{
		margin-top: 7px;
		color: #666;
	}
</style>