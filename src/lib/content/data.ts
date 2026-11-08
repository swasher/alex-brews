import { aboutContent, coffees, equipment, homepageContent } from './sample-data';
import type { AboutContent, Coffee, Equipment, HomepageContent } from './types';

/**
 * Data access for public pages.
 *
 * Pages only import from this module, never from `sample-data` directly. In
 * Phase 2 these functions switch to Firestore REST reads while keeping the same
 * return types.
 */

export function getAllCoffees(): Coffee[] {
	return [...coffees].sort((a, b) => b.purchaseDate.localeCompare(a.purchaseDate));
}

export function getCoffeeBySlug(slug: string): Coffee | undefined {
	return coffees.find((coffee) => coffee.slug === slug);
}

export function getFeaturedCoffees(): Coffee[] {
	const ids = homepageContent.featuredCoffeeIds ?? [];
	return ids
		.map((id) => coffees.find((coffee) => coffee.id === id))
		.filter((coffee): coffee is Coffee => Boolean(coffee));
}

export function getAllEquipment(): Equipment[] {
	return [...equipment].sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0));
}

export function getEquipmentBySlug(slug: string): Equipment | undefined {
	return equipment.find((item) => item.slug === slug);
}

export function getHomepageContent(): HomepageContent {
	return homepageContent;
}

export function getAboutContent(): AboutContent {
	return aboutContent;
}
