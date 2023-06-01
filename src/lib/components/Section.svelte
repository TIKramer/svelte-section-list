<script lang="ts">
	import type { SectionType } from '$lib/types/types';
	import type { SvelteComponent } from 'svelte';
	export let section: SectionType;
	export let SectionComponent: typeof SvelteComponent;
	export let handleDrop: (event: DragEvent, section: SectionType) => void;

	function allowDrop(event: { preventDefault: () => void }) {
		event.preventDefault();
	}
</script>

<div on:drop={(e) => handleDrop(e, section)} on:dragover={allowDrop}>
	<svelte:component this={SectionComponent} {section}>
		<slot />
	</svelte:component>
</div>
