# svelte-section-list

This is a headless Svelte npm package that provides drag-and-drop functionality for managing items and sections. It offers a flexible and customizable solution for implementing drag-and-drop interactions in your Svelte applications.

## Demo

Being headless means you have 100% control over the styles:

<div style="display: flex; justify-content: space-between;">
    <img src="https://github.com/TIKramer/svelte-section-list/blob/main/screenshots/default.gif" width="300" height="350"/> 
    <img src="https://github.com/TIKramer/svelte-section-list/blob/main/screenshots/custom.gif" width="300" height="350"/> 
</div>

## Getting started 👨‍🏫

To install the library, you can use either npm or yarn:

```shell

npm install svelte-section-list
```

or

```shell

yarn add @ svelte-section-list
```

## Import

```javascript
import { DraggableSections } from 'svelte-section-list';
```

### types

You can also import some types to help you with the data structure.

```javascript
import type { ItemType, SectionType } from 'svelte-section-list';
```

#### ItemType

The ItemType interface represents the structure of an item in the section list.

```javascript
interface ItemType {
	id: number;
	name: string;
}
```

#### SectionType

The SectionType interface represents the structure of a section in the section list.

```javascript
interface SectionType {
	title: string;
	items: ItemType[];
}
```

## Props

### items (required)

An array of ItemType objects representing the initial items within the item list to be displayed.

#### example

```javascript
const items: ItemType[] = [
	{ id: 1, name: 'Item 1' },
	{ id: 2, name: 'Item 2' },
	{ id: 3, name: 'Item 3' }
];
```

### sections (required)

An array of SectionType objects representing the sections to be displayed.

#### example

```javascript
const sections: SectionType[] = [
	{ title: 'Section 1', items: [item1, item2] },
	{ title: 'Section 2', items: [] }
];
```

### ItemComponent (optional)

An optional prop to provide a custom component used to render individual items. The component should accept an item prop of type ItemType. For example the default is:

```javascript

<script lang="ts">
    export let item: ItemType;
</script>

<div class={'item'}>
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
```

### SectionComponent (optional)

An optional prop to provide a custom component used to render individual sections. The component should accept a section prop of type SectionType. For example the default is:

```javascript

<script lang="ts">
  export let section: SectionType;
</script>

<div class="section">
  <h2>{section && section.title}</h2>
  <slot />
</div>

<style>
  .section {
    display: inline-block;
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    min-width: 200px;
    min-height: 100px;
  }
</style>

```

### ItemContainerComponent (Optional)

An optional prop to provide a custom container component for organizing and displaying items. The component should include a <slot /> element to allow the rendering of individual items. For example:

```javascript

<div class="container">
	<h2>Items</h2>
	<slot />
</div>

<style>
	.container {
		min-height: 100px;
	}
</style>

```

### SectionContainerComponent (Optional)

An optional prop to provide a custom container component for organizing and displaying sections. The component should include a <slot /> element to allow the rendering of individual sections. For example:

```javascript
<div>
	<h2>Sections</h2>
	<slot />
</div>
```

## Usage

```js
<script>
	import { DraggableSections } from 'svelte-section-list';
	import CustomItemComponent from './CustomItemComponent.svelte';
	import CustomSectionComponent from './CustomSectionComponent.svelte';
	import CustomItemContainer from './CustomItemContainer.svelte';
	import CustomSectionContainer from './CustomSectionContainer.svelte';

	const items = [
		{ id: 1, name: 'Item 1' },
		{ id: 2, name: 'Item 2' },
		{ id: 3, name: 'Item 3' }
	];

	const sections = [
		{ title: 'Section 1', items: [{ id: 4, name: 'Item 4' }, { id: 5, name: 'Item 5' }]} ,
		{ title: 'Section 2', items: [] }
	];
</script>

<DraggableSections
	{items}
	{sections}
	ItemComponent={CustomItemComponent}
	SectionComponent={CustomSectionComponent}
	ItemContainerComponent={CustomItemContainer}
	SectionContainerComponent={CustomSectionContainer}
/>

```

## Examples

## Contributions

Contributions to the svelte-section-list library are welcome! If you would like to contribute, please follow these guidelines:

-Fork the repository and clone it to your local machine.
-Install the dependencies by running npm install.
-Create a new branch for your feature or bug fix: git checkout -b my-feature.
-Make your changes and ensure that the code follows the project's coding conventions.
-Commit your changes and push them to your forked repository.
-Submit a pull request with a clear description of your changes and the problem they solve.

If it all works and looks good, I'll merge it in :)

Thank you for your interest in contributing to svelte-section-list! Your contributions are greatly appreciated.
