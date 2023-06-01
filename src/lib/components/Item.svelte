<script lang="ts">
	import type { ItemType } from '$lib/types/types';
	import type { SvelteComponent } from 'svelte';

	export let item: ItemType;
	export let ItemComponent: typeof SvelteComponent;
	function dragstart(event: DragEvent) {
		if (event.dataTransfer) {
			const itemElement = event.target as HTMLElement;
			const from = itemElement.closest('.section') ? 'section' : 'itemList';

			event.dataTransfer.setData('text/plain', JSON.stringify({ item, from }));
		}
	}
</script>

<div draggable="true" on:dragstart={dragstart}>
	<svelte:component this={ItemComponent} {item} />
</div>
