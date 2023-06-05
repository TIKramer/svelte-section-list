<script lang="ts">
	import type { ItemType } from '$lib/types/types';
	import { SvelteComponent, createEventDispatcher } from 'svelte';

	export let item: ItemType;
	export let ItemComponent: typeof SvelteComponent;

	const dispatch = createEventDispatcher();

	let itemX = 0;
	let itemY = 0;

	function dragstart(event: DragEvent) {
		if (event.dataTransfer) {
			const itemElement = event.target as HTMLElement;
			const from = itemElement.closest('.section') ? 'section' : 'itemList';
			event.dataTransfer.setData('text/plain', JSON.stringify({ item, from }));
		}
	}

	function touchstart(event: TouchEvent) {
		const touch = event.touches[0];
		itemX = touch.clientX;
		itemY = touch.clientY;
	}

	function touchmove(event: TouchEvent) {
		let touchLocation = event.targetTouches[0];
		let pageX = Math.floor(touchLocation.pageX) + 'px';
		let pageY = Math.floor(touchLocation.pageY) + 'px';
		const target = event.target as HTMLElement | null;
		if (target) {
			target.style.position = 'absolute';
			target.style.left = pageX;
			target.style.top = pageY;
		}
	}

	function touchend(event: TouchEvent) {
		const target = event.target as HTMLElement | null;
		let from = undefined;
		from = target && target.closest('.section') ? 'section' : 'itemList';

		dispatch('touchend', {
			target: event.target,
			changedTouches: event.changedTouches,
			from,
			item
		});
		if (target) {
			target.style.position = 'relative';
			target.style.left = '0';
			target.style.top = '0';
		}
	}
</script>

{#key item}
	<div
		draggable="true"
		on:dragstart={dragstart}
		on:touchstart|passive={touchstart}
		on:touchend|passive={touchend}
		on:touchmove|passive={touchmove}
		class="item"
	>
		<svelte:component this={ItemComponent} {item} />
	</div>
{/key}

<style>
	.item {
		touch-action: none;
	}
</style>
