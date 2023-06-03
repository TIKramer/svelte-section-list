<script lang="ts">
	//Can reverse direction by using a flex box container like below: Do this if u want items to appear it a differnt location.
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
		display: flex;
		flex-direction: column-reverse;
		justify-content: space-between;
		height: 50%;
	}
</style>
