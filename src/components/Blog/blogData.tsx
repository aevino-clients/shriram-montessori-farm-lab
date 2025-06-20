import { Blog } from '@/types/blog';

const blogData: Blog[] = [
	{
		id: 1,
		title: 'Farm fresh goodness for the alle good',
		paragraph:
			'Agriculture and farming are essential industries that involve',
		image: '/images/blog/1.webp',
		author: {
			name: 'Samuyl Joshi',
			image: '/images/blog/author-01.png',
			designation: 'Admin',
		},
		tags: ['farming'],
		publishDate: '14th March,2025',
	},
	{
		id: 2,
		title: 'From farm to table an agriculture',
		paragraph:
			'Agriculture and farming are essential industries that involve',
		image: '/images/blog/2.avif',
		author: {
			name: 'Musharof Chy',
			image: '/images/blog/author-02.png',
			designation: 'Teacher',
		},
		tags: ['aqua'],
		publishDate: '11th Jan,2025',
	},
	{
		id: 3,
		title: 'Discover potential of agriculture',
		paragraph:
			'Agriculture and farming are essential industries that involve',
		image: '/images/blog/3.jpg',
		author: {
			name: 'Lethium Deo',
			image: '/images/blog/author-03.png',
			designation: 'Student',
		},
		tags: ['horticulture'],
		publishDate: '23rd June,2025',
	},
];
export default blogData;
