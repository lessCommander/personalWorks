<template>
	<div class="row">
		<ul class="list-unstyled list-inline">
			<li>
				<a href="#">
					<slot name="recommend1-img-slot1"></slot>
				</a>
			</li>
			<li>
				<a href="#">
					<slot name="recommend1-img-slot2"></slot>
				</a>
			</li>
			<li>
				<a href="#">
					<slot name="recommend1-img-slot3"></slot>
				</a>
			</li>
			<li>
				<a href="#">
					<slot name="recommend1-img-slot4"></slot>
				</a>
			</li>
		</ul>
	</div>
</template>

<style scoped>
	.row li{
		margin-bottom: 7px;
	}
</style>