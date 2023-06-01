<script>
	import { DraggableSections } from '$lib';
	import CustomItemComponent from '../components/CustomItemComponent.svelte';
	import CustomSectionComponent from '../components/CustomSectionComponent.svelte';
	import CustomItemContainer from '../components/CustomItemContainer.svelte';
	import CustomSectionContainer from '../components/CustomSectionContainer.svelte';

	const items = [
		{ id: 1, name: 'Custom Item 1' },
		{ id: 2, name: 'Custom Item 2' },
		{ id: 3, name: 'Custom Item 3' }
	];

	const sections = [
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
	{sections}
	ItemComponent={CustomItemComponent}
	SectionComponent={CustomSectionComponent}
	ItemContainer={CustomItemContainer}
	SectionContainer={CustomSectionContainer}
/>
