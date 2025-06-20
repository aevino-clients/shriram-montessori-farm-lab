'use client';
import { useState } from 'react';
import { Testimonial } from '@/types/testimonial';
import SectionTitle from '../Common/SectionTitle';
import SingleTestimonial from './SingleTestimonial';
import Image from 'next/image';
import clsx from 'clsx'; // optional, for class toggling

const testimonialData: Testimonial[] = [
	{
		id: 1,
		name: 'Ankit Sharma',
		designation: 'CEO, TechFlow Solutions',
		content: 'https://www.youtube.com/watch?v=K105xluiB8s',
		image: 'student',
		star: 5,
	},
	{
		id: 2,
		name: 'Rajesh Kumar',
		designation: 'CTO, Manufacturing Plus Industries',
		content: 'https://www.youtube.com/watch?v=K105xluiB8s',
		image: 'teacher',
		star: 5,
	},
	{
		id: 3,
		name: 'Mark Richard',
		designation: 'Founder & CEO, CloudSync Pro',
		content: 'https://www.youtube.com/watch?v=K105xluiB8s',
		image: 'student',
		star: 5,
	},
	{
		id: 4,
		name: 'Ankit Sharma',
		designation: 'CEO, TechFlow Solutions',
		content: 'https://www.youtube.com/watch?v=K105xluiB8s',
		image: 'teacher',
		star: 5,
	},
	{
		id: 5,
		name: 'Rajesh Kumar',
		designation: 'CTO, Manufacturing Plus Industries',
		content: 'https://www.youtube.com/watch?v=K105xluiB8s',
		image: 'student',
		star: 5,
	},
	{
		id: 6,
		name: 'Mark Richard',
		designation: 'Founder & CEO, CloudSync Pro',
		content: 'https://www.youtube.com/watch?v=K105xluiB8s',
		image: 'teacher',
		star: 5,
	},
];

const Testimonials = () => {
	const [activeTab, setActiveTab] = useState<'student' | 'teacher'>(
		'student'
	);

	const filteredData = testimonialData.filter((t) => t.image === activeTab);

	return (
		<section className="relative z-10 py-16 md:py-20 lg:py-28">
			<div className="container">
				<SectionTitle
					title="Stories from Our Students and Teachers"
					paragraph="Hear how our programs have transformed learning and inspired growth."
					center
				/>

				{/* Tab Buttons */}
				<div className="mb-10 flex justify-center space-x-4">
					<button
						onClick={() => setActiveTab('student')}
						className={clsx(
							'cursor-pointer rounded-full px-6 py-2 text-sm font-semibold border transition-all',
							activeTab === 'student'
								? 'bg-sub-theme text-white border-sub-theme'
								: 'bg-white text-black dark:bg-dark dark:text-white border-gray-300'
						)}
					>
						Students
					</button>
					<button
						onClick={() => setActiveTab('teacher')}
						className={clsx(
							'cursor-pointer rounded-full px-6 py-2 text-sm font-semibold border transition-all',
							activeTab === 'teacher'
								? 'bg-sub-theme text-white border-sub-theme'
								: 'bg-white text-black dark:bg-dark dark:text-white border-gray-300'
						)}
					>
						Teachers
					</button>
				</div>

				{/* Testimonial Grid */}
				<div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3 items-stretch">
					{filteredData.map((testimonial) => (
						<div
							key={testimonial.id}
							className="w-full h-full flex"
						>
							<SingleTestimonial testimonial={testimonial} />
						</div>
					))}
				</div>
			</div>

			{/* Decorative Fly Image */}
			<span
				style={{
					position: 'absolute',
					right: '120px',
					top: '120px',
					zIndex: 1,
					width: 182,
					height: 167,
				}}
				className="animate-fly"
			>
				<Image
					src={'/images/shapes/fly.png'}
					alt={'fly'}
					fill
					className="object-cover"
				/>
			</span>
		</section>
	);
};

export default Testimonials;
