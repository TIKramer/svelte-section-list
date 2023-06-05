<script>
	import { DraggableSections } from '$lib';
	import CustomItemComponent from '../components/CustomItemComponent.svelte';
	import CustomSectionComponent from '../components/CustomSectionComponent.svelte';
	import CustomItemContainer from '../components/CustomItemContainer.svelte';
	import CustomSectionContainer from '../components/CustomSectionContainer.svelte';

	let items = [
		{ id: 1, name: 'Custom Item 1' },
		{ id: 2, name: 'Custom Item 2' },
		{ id: 3, name: 'Custom Item 3' },
		{ id: 4, name: 'Custom Item 6' },
		{ id: 7, name: 'Custom Item 7' }
	];

	let sections = [
		{
			title: 'Custom Section 1',
			items: [
				{ id: 4, name: 'Custom Item 4' },
				{ id: 5, name: 'Custom Item 5' }
			]
		},
		{ title: 'Custom Section 2', items: [] }
	];
</script>

<DraggableSections
	{items}
	bind:sections
	ItemComponent={CustomItemComponent}
	SectionComponent={CustomSectionComponent}
	ItemContainerComponent={CustomItemContainer}
	SectionContainerComponent={CustomSectionContainer}
/>
