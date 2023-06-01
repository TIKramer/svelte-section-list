<script lang="ts">
	import type { ItemType } from '$lib';
	export let item: ItemType;
</script>

<div class="custom-item">
	{item && item.name}
</div>

<style>
	.custom-item {
		border: 1px solid #d1d5db;
		padding: 20px;
		margin: 10px;
		cursor: move;
		background-color: #f0f8ff;
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		font-family: 'Roboto', sans-serif;
		font-size: 16px;
		color: #333;
		transition: background-color 0.3s ease;
	}

	.custom-item:hover {
		background-color: #eaf6ff;
	}
</style>
