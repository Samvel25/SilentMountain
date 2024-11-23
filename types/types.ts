// types.ts
export interface ImageFormat {
	ext: string;
	url: string;
	hash: string;
	mime: string;
	name: string;
	path: string | null;
	size: number;
	width: number;
	height: number;
	sizeInBytes: number;
}

export interface Image {
	id: number;
	documentId: string;
	name: string;
	formats: {
		large: ImageFormat;
		small: ImageFormat;
		medium: ImageFormat;
		thumbnail: ImageFormat;
	};
	url: string;
}

export interface Blog {
	id: number;
	documentId: string;
	title: string;
	slug: string;
	description: { type: string; children: { text: string }[] }[];
	image: Image[];
	imagePoint: Image;
	videoUrl: string;
	useIframe: boolean;
	points: { id: number; point: string }[];
	quote: string;
	author: string;
	mainContent: {
		intro: { type: string; children: { text: string }[] }[];
		conclusion: { type: string; children: { text: string }[] }[];
	};
	tags: { id: number; tags: string }[];
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	locale: string | null;
	localizations: any[];
}
