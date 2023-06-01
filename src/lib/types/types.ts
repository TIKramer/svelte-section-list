export interface ItemType {
	id: number;
	name: string;
}

export interface SectionType {
	title: string;
	items: ItemType[];
}
