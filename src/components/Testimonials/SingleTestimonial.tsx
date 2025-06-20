'use client';
import { Testimonial } from '@/types/testimonial';
import Image from 'next/image';
import ReactPlayer from 'react-player/youtube';
const starIcon = (
	<svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
		<path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
	</svg>
);

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
	const { star, name, image, content, designation } = testimonial;

	let ratingIcons = [];
	for (let index = 0; index < star; index++) {
		ratingIcons.push(
			<span key={index} className="text-yellow">
				{starIcon}
			</span>
		);
	}

	return (
		<div
			data-aos="fade-up-subtle"
			className="flex flex-col h-full rounded-lg overflow-hidden shadow-one hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark bg-white duration-300"
		>
			<div className=" rounded-xs bg-white  duration-300 ">
				<div className="border-body-color/10 text-body-color  border-b pb-4 text-base leading-relaxed dark:border-white/10 dark:text-white">
					<ReactPlayer url={content} />
				</div>
				<div className="flex items-center">
					<div className="w-full lg:px-5 xl:px-8 p-0">
						<h3 className="text-dark mb-1 text-lg font-semibold lg:text-base xl:text-lg dark:text-white">
							{name}
						</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleTestimonial;
