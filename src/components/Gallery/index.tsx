// components/ImageGallery.tsx

'use client';

import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const images = [
	{
		src: '/images/hero/1.jpg',
		title: 'Gallery Image 1',
	},
	{
		src: '/images/hero/2.jpg',
		title: 'Gallery Image 2',
	},
	{
		src: '/images/hero/3.jpg',
		title: 'Gallery Image 3',
	},
	{
		src: '/images/hero/4.jpg',
		title: 'Gallery Image 4',
	},
	{
		src: '/images/hero/1.jpg',
		title: 'Gallery Image 1',
	},
	{
		src: '/images/hero/2.jpg',
		title: 'Gallery Image 2',
	},
	{
		src: '/images/hero/3.jpg',
		title: 'Gallery Image 3',
	},
	{
		src: '/images/hero/4.jpg',
		title: 'Gallery Image 4',
	},
	{
		src: '/images/hero/1.jpg',
		title: 'Gallery Image 1',
	},
	{
		src: '/images/hero/2.jpg',
		title: 'Gallery Image 2',
	},
	{
		src: '/images/hero/3.jpg',
		title: 'Gallery Image 3',
	},
	{
		src: '/images/hero/4.jpg',
		title: 'Gallery Image 4',
	},
	{
		src: '/images/hero/1.jpg',
		title: 'Gallery Image 1',
	},
	{
		src: '/images/hero/2.jpg',
		title: 'Gallery Image 2',
	},
	{
		src: '/images/hero/3.jpg',
		title: 'Gallery Image 3',
	},
	{
		src: '/images/hero/4.jpg',
		title: 'Gallery Image 4',
	},
	// add more...
];

const ImageGallery = () => {
	const [open, setOpen] = useState(false);
	const [index, setIndex] = useState(0);

	return (
		<section className="container mx-auto px-4">
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{images.map((img, i) => (
					<div
						key={i}
						onClick={() => {
							setIndex(i);
							setOpen(true);
						}}
					>
						<img
							src={img.src}
							alt={img.title}
							className="w-full h-60 object-cover rounded-lg cursor-pointer shadow-md hover:scale-105 transition-transform"
						/>
					</div>
				))}
			</div>

			<Lightbox
				open={open}
				close={() => setOpen(false)}
				slides={images.map((img) => ({ src: img.src }))}
				index={index}
			/>
		</section>
	);
};

export default ImageGallery;
