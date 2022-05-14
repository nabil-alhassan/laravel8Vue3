<template>
	<div class="contact-page">
		<h1>Contact Page</h1>
	</div>
</template>

<script>
export default {
	name: "Contact",
	watch: {
		$route(to, from) {
			document.title = to.meta.title || "Other Title";
		},
	},
};
</script>
