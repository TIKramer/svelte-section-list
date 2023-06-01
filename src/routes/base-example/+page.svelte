<script lang="ts">
	import { DraggableSections } from '$lib';
	import type { ItemType } from '$lib';

	let items: ItemType[] = [
		{ id: 1, name: 'Wash sink' },
		{ id: 2, name: 'Brush teeth' },
		{ id: 3, name: 'Flush toilet' }
	];

	let sections = [
		{ title: 'Todo', items: [] },
		{ title: 'Done', items: [] }
	];
</script>

<div class="container">
	<DraggableSections {items} bind:sections />
</div>

<style>
	.container {
		width: 50%;
		height: 50%;
	}
</style>
