const dateFormatter = new Intl.DateTimeFormat('ru-RU', {
	day: 'numeric',
	month: 'long',
	year: 'numeric',
	timeZone: 'Europe/Riga',
});

const monthFormatter = new Intl.DateTimeFormat('ru-RU', {
	month: 'long',
	year: 'numeric',
	timeZone: 'Europe/Riga',
});

export function formatDate(value: string | undefined): string | undefined {
	if (!value) return undefined;
	const date = new Date(value);
	if (Number.isNaN(date.getTime())) return undefined;
	return dateFormatter.format(date);
}

export function formatMonth(value: string | undefined): string | undefined {
	if (!value) return undefined;
	const date = new Date(value);
	if (Number.isNaN(date.getTime())) return undefined;
	return monthFormatter.format(date);
}

/** Joins non-empty parts with a separator. */
export function joinMeta(parts: Array<string | undefined>, separator = ' · '): string {
	return parts.filter(Boolean).join(separator);
}
