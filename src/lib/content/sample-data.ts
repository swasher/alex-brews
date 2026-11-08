import type { AboutContent, Coffee, Equipment, HomepageContent } from './types';

/**
 * Temporary sample content for Phase 1. It will be replaced by Firestore reads
 * in Phase 2. Images are represented by Cloudflare Images IDs; public pages
 * currently render tasteful placeholders until real photographs are uploaded.
 */

export const coffees: Coffee[] = [
	{
		id: 'ethiopia-guji',
		slug: 'ethiopia-guji-haro-worka',
		name: 'Ethiopia Guji Haro Worka',
		roaster: 'Пепел и пар',
		country: 'Эфиопия',
		region: 'Гуджи',
		farm: 'Haro Worka',
		variety: 'Heirloom',
		processing: 'Natural',
		altitude: '1 900–2 100 м',
		roastLevel: 'Светлая',
		roastDate: '2026-10-14',
		purchaseDate: '2026-10-18',
		openingDate: '2026-10-25',
		rating: 9,
		description:
			'Первый пакет, который захотелось открыть ещё до завтрака. В чашке — плотная ягодная сладость, которая не превращается в варенье, и долгий цветочный хвост. На фильтре раскрывается постепенно: сначала черника, потом лаванда, а к остыванию — молочный шоколад. Один из тех лотов, где не хочется ничего менять в рецепте.',
		tastingNotes: ['черника', 'лаванда', 'молочный шоколад'],
		image: { id: 'sample/ethiopia-guji', alt: 'Пакет эфиопского кофе на светлом фоне' },
		gallery: [
			{ id: 'sample/ethiopia-guji-2', alt: 'Чашка фильтр-кофе на деревянной поверхности' },
			{ id: 'sample/ethiopia-guji-3', alt: 'Кофейные зёрна крупным планом' },
		],
		createdAt: '2026-10-18T09:20:00.000Z',
		updatedAt: '2026-10-26T07:45:00.000Z',
	},
	{
		id: 'kenya-nyeri',
		slug: 'kenya-nyeri-gichathaini',
		name: 'Kenya Nyeri Gichathaini',
		roaster: 'Тихий жернов',
		country: 'Кения',
		region: 'Ньери',
		farm: 'Gichathaini',
		variety: 'SL28, SL34',
		processing: 'Washed',
		altitude: '1 750 м',
		roastLevel: 'Светло-средняя',
		roastDate: '2026-09-28',
		purchaseDate: '2026-10-02',
		openingDate: '2026-10-06',
		rating: 8,
		description:
			'Кислотность, которая бьёт точно в цель: чёрная смородина и грейпфрут, но без резкости. Тело среднее, послевкусие сухое и чистое, как у хорошего чая. На эспрессо получилось слишком нервно, поэтому весь пакет ушёл в V60 — и не зря.',
		tastingNotes: ['чёрная смородина', 'грейпфрут', 'тростниковый сахар'],
		image: { id: 'sample/kenya-nyeri', alt: 'Кенийский кофе в керамической чашке' },
		createdAt: '2026-10-02T11:05:00.000Z',
		updatedAt: '2026-10-07T08:12:00.000Z',
	},
	{
		id: 'colombia-huila',
		slug: 'colombia-huila-la-esperanza',
		name: 'Colombia Huila La Esperanza',
		roaster: 'Красная ягода',
		country: 'Колумбия',
		region: 'Уила',
		farm: 'La Esperanza',
		variety: 'Caturra',
		processing: 'Honey',
		altitude: '1 680 м',
		roastLevel: 'Средняя',
		purchaseDate: '2026-09-12',
		openingDate: '2026-09-18',
		rating: 7,
		description:
			'Спокойный, предсказуемый лот для утра, когда не хочется думать о рецепте. Карамель и красное яблоко, мягкая кислотность, немного орехов в послевкусии. Хорошо работает и в аэропрессе, и в фильтре, но без вау-эффекта.',
		tastingNotes: ['карамель', 'красное яблоко', 'миндаль'],
		image: { id: 'sample/colombia-huila', alt: 'Колумбийский кофе и карточка лота' },
		createdAt: '2026-09-12T10:00:00.000Z',
		updatedAt: '2026-09-19T06:30:00.000Z',
	},
	{
		id: 'brazil-cerrado',
		slug: 'brazil-cerrado-fazenda-santa-rosa',
		name: 'Brazil Cerrado Fazenda Santa Rosa',
		roaster: 'Пепел и пар',
		country: 'Бразилия',
		region: 'Серрадо',
		farm: 'Fazenda Santa Rosa',
		processing: 'Pulped Natural',
		roastLevel: 'Средне-тёмная',
		purchaseDate: '2026-08-20',
		rating: 6,
		description:
			'Бразилия для эспрессо: шоколад, орехи, почти никакой кислотности. В чистом виде немного плоский, зато отлично держится в капучино и не теряется за молоком. Брал в основном для того, чтобы настроить помол после смены жерновов.',
		tastingNotes: ['тёмный шоколад', 'фундук', 'печенье'],
		image: { id: 'sample/brazil-cerrado', alt: 'Бразильский кофе для эспрессо' },
		createdAt: '2026-08-20T12:40:00.000Z',
		updatedAt: '2026-08-25T09:10:00.000Z',
	},
	{
		id: 'rwanda-nyamasheke',
		slug: 'rwanda-nyamasheke-gitesi',
		name: 'Rwanda Nyamasheke Gitesi',
		roaster: 'Тихий жернов',
		country: 'Руанда',
		region: 'Ньямашеке',
		processing: 'Washed',
		altitude: '1 800 м',
		purchaseDate: '2026-07-30',
		openingDate: '2026-08-04',
		rating: 8,
		description:
			'Очень чистый лот: белый чай, персик и лёгкая минеральность. На мой вкус, лучше всего раскрывается при температуре воды около 92 °C. Если залить кипятком, появляется неприятная горечь, которую легко принять за «характер».',
		tastingNotes: ['белый чай', 'персик', 'минеральность'],
		image: { id: 'sample/rwanda-nyamasheke', alt: 'Руандийский кофе на полке' },
		createdAt: '2026-07-30T14:15:00.000Z',
		updatedAt: '2026-08-05T07:00:00.000Z',
	},
];

export const equipment: Equipment[] = [
	{
		id: 'comandante-c40',
		slug: 'comandante-c40-mk4',
		name: 'Comandante C40 MK4',
		brand: 'Comandante',
		model: 'C40 MK4',
		category: 'Ручная кофемолка',
		description:
			'Основная кофемолка для фильтра и аэропресса. Ровный помол, предсказуемые щелчки, приятный вес в руке. За два года — ни одного нарекания, только иногда хочется мотор.',
		purchaseDate: '2024-11-03',
		image: { id: 'sample/comandante-c40', alt: 'Ручная кофемолка Comandante C40' },
		sortOrder: 1,
		createdAt: '2026-08-01T09:00:00.000Z',
		updatedAt: '2026-08-01T09:00:00.000Z',
	},
	{
		id: 'fellow-stagg-ekg',
		slug: 'fellow-stagg-ekg',
		name: 'Fellow Stagg EKG',
		brand: 'Fellow',
		model: 'Stagg EKG',
		category: 'Электрический чайник',
		description:
			'Точная температура и тонкий носик, которым удобно управлять потоком. Держит температуру, пока идёт пролив. Единственный минус — цена, но за четыре года использования она полностью окупилась.',
		purchaseDate: '2022-03-17',
		image: { id: 'sample/fellow-stagg', alt: 'Электрический чайник Fellow Stagg EKG' },
		sortOrder: 2,
		createdAt: '2026-08-01T09:05:00.000Z',
		updatedAt: '2026-08-01T09:05:00.000Z',
	},
	{
		id: 'hario-v60',
		slug: 'hario-v60-02',
		name: 'Hario V60 02',
		brand: 'Hario',
		model: 'V60 02',
		category: 'Воронка',
		description:
			'Керамическая воронка, с которой началось всё остальное. Прощает не всё, зато учит держать ровный поток и следить за временем. Стоит на полке как напоминание о простых решениях.',
		purchaseDate: '2021-06-10',
		image: { id: 'sample/hario-v60', alt: 'Керамическая воронка Hario V60' },
		sortOrder: 3,
		createdAt: '2026-08-01T09:10:00.000Z',
		updatedAt: '2026-08-01T09:10:00.000Z',
	},
	{
		id: 'acaia-pearl',
		slug: 'acaia-pearl',
		name: 'Acaia Pearl',
		brand: 'Acaia',
		model: 'Pearl',
		category: 'Кофейные весы',
		description:
			'Быстрый отклик и честная точность до 0,1 г. Таймер запускается автоматически, приложение почти не использую. Батареи хватает надолго, но заряжать приходится через неудобный кабель.',
		purchaseDate: '2023-01-22',
		image: { id: 'sample/acaia-pearl', alt: 'Кофейные весы Acaia Pearl' },
		sortOrder: 4,
		createdAt: '2026-08-01T09:15:00.000Z',
		updatedAt: '2026-08-01T09:15:00.000Z',
	},
];

export const homepageContent: HomepageContent = {
	title: 'Кофе, который хочется помнить',
	subtitle: 'Личный журнал о зерне, ритуале и вкусе',
	introduction:
		'Не обзоры и не рейтинги — просто пакеты, которые оказались на моей кухне, и честные заметки о том, что получилось в чашке.',
	featuredCoffeeIds: ['ethiopia-guji', 'kenya-nyeri', 'rwanda-nyamasheke'],
};

export const aboutContent: AboutContent = {
	title: 'Обо мне',
	introduction:
		'Меня зовут Алекс. Я пью кофе с тех пор, как научился включать чайник, но осознанно — последние несколько лет.',
	content:
		'Началось всё с дешёвой воронки и пакета зерна из супермаркета. Потом появились весы, нормальная кофемолка и привычка записывать параметры пролива в блокнот. Сейчас этот блокнот переехал в цифровой формат — вы читаете его прямо сейчас.\n\nМне интересен кофе как ремесло: как фермер обрабатывает ягоду, как обжарщик ищет баланс между кислотностью и сладостью, как вода и помол меняют одну и ту же чашку. И мне нравится, что в этом деле нет финальной точки — всегда есть следующий лот и следующий способ его раскрыть.\n\nЭтот сайт — не коммерческий проект и не гид для начинающих. Просто личная коллекция: что купил, что попробовал, что оставил на полке.',
	portrait: { id: 'sample/portrait', alt: 'Портрет автора с чашкой кофе' },
	links: [
		{ label: 'Почта', url: 'mailto:hello@example.com' },
		{ label: 'Instagram', url: 'https://example.com/instagram' },
	],
};
