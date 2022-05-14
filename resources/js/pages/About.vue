<template>
	<div class="about-page">
		<h1>About Page</h1>
		<p>{{ PageDec }}</p>
	</div>
</template>



<script>
export default {
	name: "About",
	data: function () {
		return {
			PageName: "About us",
			PageDec: "this is about us page",
		};
	},
	watch: {
		$route(to, from) {
			document.title = to.meta.title || "Other Title";
		},
	},
};
</script>
