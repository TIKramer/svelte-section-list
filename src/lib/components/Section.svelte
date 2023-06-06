<script lang="ts">
	import type { SectionType } from '$lib/types/types';
	import type { SvelteComponent } from 'svelte';

	export let section: SectionType;
	export let SectionComponent: typeof SvelteComponent;
	export let handleDrop: (event: DragEvent, section: SectionType) => void;

	let ref: HTMLDivElement;
	let screenPosition = {};

	function allowDrop(event: { preventDefault: () => void }) {
		event.preventDefault();
	}

	export function getScreenPosition() {
		const rect = ref.getBoundingClientRect();

		screenPosition = {
			top: rect.top + window.pageYOffset,
			left: rect.left + window.pageXOffset,
			bottom: rect.bottom + window.pageYOffset,
			right: rect.right + window.pageXOffset,
			scrollY: document.documentElement.scrollTop
		};
		return screenPosition;
	}
</script>

	<div
		class="section"
		id={`section-${section.title}`}
		bind:this={ref}
		on:drop={(e) => handleDrop(e, section)}
		on:dragover={allowDrop}
	>
		<svelte:component this={SectionComponent} {section}>
			<slot />
		</svelte:component>
	</div>
