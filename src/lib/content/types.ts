/**
 * Content models for the coffee journal.
 *
 * These types mirror the Firestore documents described in the technical
 * specification. Phase 1 uses temporary sample data shaped like these models;
 * Phase 2 will populate them from Firestore.
 *
 * Dates are ISO 8601 strings for now. When Firestore timestamps are wired in,
 * `createdAt` / `updatedAt` and the optional `*Date` fields can be normalized
 * at the data-access boundary without changing the pages.
 */

export interface ImageRef {
	/** Cloudflare Images ID. Delivery URLs are built from it, never stored. */
	id: string;
	alt: string;
}

export interface Coffee {
	id: string;
	slug: string;
	name: string;
	roaster: string;
	country: string;
	region?: string;
	farm?: string;
	variety?: string;
	processing?: string;
	altitude?: string;
	roastLevel?: string;
	roastDate?: string;
	purchaseDate: string;
	openingDate?: string;
	/** Personal rating, 1–10. */
	rating?: number;
	description: string;
	tastingNotes: string[];
	image: ImageRef;
	gallery?: ImageRef[];
	createdAt: string;
	updatedAt: string;
}

export interface Equipment {
	id: string;
	slug: string;
	name: string;
	brand?: string;
	model?: string;
	category?: string;
	description: string;
	purchaseDate?: string;
	image: ImageRef;
	gallery?: ImageRef[];
	sortOrder?: number;
	createdAt: string;
	updatedAt: string;
}

export interface ExternalLink {
	label: string;
	url: string;
}

export interface HomepageContent {
	title: string;
	subtitle: string;
	introduction: string;
	featuredCoffeeIds?: string[];
}

export interface AboutContent {
	title: string;
	introduction: string;
	content: string;
	portrait?: ImageRef;
	links?: ExternalLink[];
}
