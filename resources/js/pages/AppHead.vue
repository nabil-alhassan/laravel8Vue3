<template>
	<div class="header">
		<div class="container">
			<div class="logo">Vue JS</div>
			<ul class="text-right">
				<router-link to="http://localhost:8000/" tag="li" exact="">
					<a>Home</a>
				</router-link>
				<router-link to="/blog" tag="li" exact="">
					<a>Blog</a>
				</router-link>
				<router-link to="/about" tag="li" exact="">
					<a>About</a>
				</router-link>
				<router-link to="/help" tag="li" replace>
					<a>Help</a>
				</router-link>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: "AppHead",
};
</script>

<style lang="scss" scoped>
.header {
	background: #333;
	color: #fff;

	.container {
		display: grid;
		grid-template-columns: auto 1fr;
		grid-gap: 10px;

		.logo {
			font-size: 24px;
			padding: 16px;
			width: 200px;
		}

		ul {
			width: calc(100% - 200px);
			margin: 0;
			padding: 20px;
			display: inline-block;

			a {
				color: #fff;
				text-decoration: none;
				margin: 0 20px;
			}
		}
	}
}
</style>
