<script lang="ts">
	import { DraggableSections } from '$lib';
	import type { ItemType } from '$lib';

	let items: ItemType[] = [
		{ id: 1, name: 'Item 1' },
		{ id: 2, name: 'Item 2' },
		{ id: 3, name: 'Item 3' },
		{ id: 4, name: 'Item 4' },
		{ id: 5, name: 'Item 5' }
	];

	let sections = [
		{ title: 'Food I like', items: [] },
		{ title: 'Food I hate', items: [] }
	];
</script>

<DraggableSections {items} bind:sections />
