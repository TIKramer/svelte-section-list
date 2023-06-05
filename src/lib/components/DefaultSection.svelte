<script lang="ts">
	import type { SectionType } from '$lib/types/types';
	export let section: SectionType;
</script>

<div class="container">
	<h2>{section && section.title}</h2>
	<slot />
</div>

<style>
	.container {
		display: inline-block;
		border: 1px solid black;
		padding: 10px;
		margin: 10px;
		min-width: 200px;
		min-height: 100px;
	}
</style>
