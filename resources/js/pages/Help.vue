<template>
	<div class="help-page">
		<h1>Help Page</h1>
	</div>
</template>



<script>
export default {
	name: "Help",
	watch: {
		$route(to, from) {
			document.title = to.meta.title || "Other Title";
		},
	},
};
</script>
