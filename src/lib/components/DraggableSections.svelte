<script lang="ts">
	import type { ItemType, SectionType } from '$lib/types/types';
	import DefaultItemContainer from './DefaultItemContainer.svelte';
	import DefaultSectionContainer from './DefaultSectionContainer.svelte';
	import DefaultItem from './DefaultItem.svelte';
	import DefaultSection from './DefaultSection.svelte';
	import Item from './Item.svelte';
	import Section from './Section.svelte';
	export let items: ItemType[];
	export let sections: SectionType[];
	export let ItemComponent = DefaultItem;
	export let SectionComponent = DefaultSection;
	export let ItemContainer = DefaultItemContainer;
	export let SectionContainer = DefaultSectionContainer;

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
</script>

<svelte:component this={SectionContainer}>
	{#each sections as section}
		<Section {SectionComponent} {section} handleDrop={drop}>
			{#each section.items as item}
				<Item {item} {ItemComponent} />
			{/each}
		</Section>
	{/each}
</svelte:component>
<div on:drop={(e) => drop(e, null)} on:dragover={allowDrop}>
	<svelte:component this={ItemContainer}>
		{#each items as item}
			<Item {item} {ItemComponent} />
		{/each}
	</svelte:component>
</div>
