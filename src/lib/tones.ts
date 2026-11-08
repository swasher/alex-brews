/** Visual tones used by placeholder imagery until real photographs exist. */
export const tones = ['amber', 'olive', 'plum', 'slate', 'sand'] as const;

export type Tone = (typeof tones)[number];

export function toneAt(index: number): Tone {
	return tones[index % tones.length] ?? 'amber';
}
