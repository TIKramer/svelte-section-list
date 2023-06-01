<script lang="ts">
	import type { ItemType } from '$lib/types/types';
	import { fly } from 'svelte/transition';
	export let item: ItemType;
	const Y_FLY_IN = 50;
</script>

<div in:fly={{ y: Y_FLY_IN }} class={'item'}>
	{item && item.name}
</div>

<style>
	.item {
		border: 1px solid black;
		padding: 10px;
		margin: 10px;
		cursor: move;
	}
</style>
