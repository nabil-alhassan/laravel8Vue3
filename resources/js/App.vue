<template>
	<div class="container">
		<div class="text-center" style="margin: 20px 0px 20px 0px">
			<span class="text-secondary">Laravel Vue CRUD Example</span>
		</div>

		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<div class="collapse navbar-collapse">
				<div class="navbar-nav">
					<router-link to="/" class="nav-item nav-link">Home</router-link>
					<router-link to="/add" class="nav-item nav-link"
						>Add Post</router-link
					>
				</div>
			</div>
		</nav>
		<br />
		<router-view></router-view>
	</div>
</template>

<script>
export default {};
</script>


<!-- <template>
	<div>
		<app-head />
		<router-view />
	</div>
</template>

<script>
import AppHead from "./pages/AppHead.vue";

export default {
	name: "App",
	components: {
		AppHead,
	},
	watch: {
		$route(to, from) {
			document.title = "Home";
		},
	},
};
</script>


<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	padding: 30px;

	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
</style> -->
