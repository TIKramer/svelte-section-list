<script lang="ts">
	import type { ItemType, SectionType } from '$lib/types/types';
	import DefaultItemContainer from './DefaultItemContainer.svelte';
	import DefaultSectionContainer from './DefaultSectionContainer.svelte';
	import DefaultItem from './DefaultItem.svelte';
	import DefaultSection from './DefaultSection.svelte';
	import Item from './Item.svelte';
	import Section from './Section.svelte';
	import type { SvelteComponent } from 'svelte';
	export let items: ItemType[];
	export let sections: SectionType[];
	export let ItemComponent = DefaultItem;
	export let SectionComponent: typeof SvelteComponent = DefaultSection;
	export let ItemContainerComponent: typeof SvelteComponent = DefaultItemContainer;
	export let SectionContainerComponent: typeof SvelteComponent = DefaultSectionContainer;

	const OFFSET = 25;
	let sectionRefs: SvelteComponent[] = [];
	let itemListRef: HTMLDivElement | undefined = undefined;

	function allowDrop(event: DragEvent) {
		event.preventDefault();
	}

	function drop(event: DragEvent, section: SectionType | null) {
		event.preventDefault();
		const tempData = event.dataTransfer && event.dataTransfer.getData('text/plain');
		if (!tempData) {
			return;
		}
		const data = JSON.parse(tempData);
		const item = data.item;
		const from = data.from;

		if (section === null) {
			dropIntoItemList(item);
		} else {
			dropIntoSection(item, from, section);
		}
	}

	function dropIntoItemList(data: ItemType) {
		if (items.some((item) => item.id === data.id)) {
			return;
		}
		addItemToList(data);
	}

	function dropIntoSection(data: ItemType, from: 'section' | 'itemList', section: SectionType) {
		if (section.items.some((item) => item.id === data.id)) {
			return;
		}
		if (from === 'itemList') {
			removeItemFromList(data);
		}
		addItemToSection(data, section);
	}

	function addItemToList(item: ItemType) {
		if (items.some((i) => i.id === item.id)) {
			return;
		}

		sections = sections.map((section) => ({
			...section,
			items: section.items.filter((i) => i.id !== item.id)
		}));
		items = [...items, item];
	}

	function removeItemFromList(item: ItemType) {
		items = items.filter((i) => i.id !== item.id);
	}

	function addItemToSection(item: ItemType, section: SectionType) {
		sections = sections.map((s) => {
			if (s === section) {
				return { ...s, items: [...s.items, item] };
			} else {
				return { ...s, items: s.items.filter((i) => i.id !== item.id) };
			}
		});
	}

	export function getItemListScreenPosition() {
		const rect = itemListRef?.getBoundingClientRect();

		if (rect) {
			const screenPosition = {
				top: rect.top + window.pageYOffset,
				left: rect.left + window.pageXOffset,
				bottom: rect.bottom + window.pageYOffset,
				right: rect.right + window.pageXOffset,
				scrollY: document.documentElement.scrollTop
			};
			return screenPosition;
		}

		return null;
	}

	function isItemWithinBoundry(
		screenPosition: { top: number; left: number; bottom: number; right: number; scrollY: number },
		itemX: number,
		itemY: number
	) {
		return (
			itemX >= screenPosition.left - OFFSET &&
			itemX <= screenPosition.right + OFFSET &&
			itemY + window.scrollY >= screenPosition.top - OFFSET &&
			itemY + window.scrollY <= screenPosition.bottom + OFFSET
		);
	}

	function handleTouchEnd(event: CustomEvent) {
		const pageX = event.detail.changedTouches[0].clientX;
		const pageY = event.detail.changedTouches[0].clientY;

		const from = event.detail.from;

		sectionRefs.forEach((ref, index) => {
			if (isItemWithinBoundry(ref.getScreenPosition(), pageX, pageY)) {
				dropIntoSection(event.detail.item, from, sections[index]);
			} else {
			}
		});
		const itemListPost = getItemListScreenPosition();
		if (itemListPost && isItemWithinBoundry(itemListPost, pageX, pageY)) {
			addItemToList(event.detail.item);
		} else {
			//none
		}
	}
</script>

<svelte:component this={SectionContainerComponent}>
	{#each sections as section, sectionIdx}
		<Section {SectionComponent} {section} handleDrop={drop} bind:this={sectionRefs[sectionIdx]}>
			{#each section.items as item}
				<Item {item} {ItemComponent} on:touchend={handleTouchEnd} />
			{/each}
		</Section>
	{/each}
</svelte:component>
<div on:drop={(e) => drop(e, null)} on:dragover={allowDrop} bind:this={itemListRef}>
	<svelte:component this={ItemContainerComponent}>
		{#each items as item}
			<Item {item} {ItemComponent} on:touchend={handleTouchEnd} />
		{/each}
	</svelte:component>
</div>
