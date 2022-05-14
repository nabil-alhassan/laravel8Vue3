<template>
	<div class="blog-page">
		<h1>Blog Page</h1>
	</div>
</template>



<script>
export default {
	name: "Blog",
	watch: {
		$route(to, from) {
			document.title = to.meta.title || "Other Title";
		},
	},
};
</script>
