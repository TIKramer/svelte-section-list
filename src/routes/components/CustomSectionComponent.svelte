<script lang="ts">
	import type { SectionType } from '$lib';
	export let section: SectionType;
</script>

<div class="custom-section">
	<h2>{section && section.title}</h2>
	<slot />
</div>

<style>
	.custom-section {
		display: inline-block;
		border: 1px solid #e2e8f0;
		padding: 20px;
		margin: 10px;
		min-width: 200px;
		min-height: 100px;
		background-color: #f7fafc;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		border-radius: 8px;
		transition: background-color 0.3s ease;
	}

	.custom-section h2 {
		font-family: 'Montserrat', sans-serif;
		font-size: 20px;
		font-weight: bold;
		color: #4a5568;
		margin-bottom: 10px;
		text-align: center;
		text-transform: uppercase;
	}

	.custom-section:hover {
		background-color: #edf2f7;
	}
</style>
