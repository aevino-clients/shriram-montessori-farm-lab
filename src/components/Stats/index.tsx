'use client';
import Link from 'next/link';
import Image from 'next/image';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const StatItem = ({
	end,
	suffix,
	label,
}: {
	end: number;
	suffix?: string;
	label: string;
}) => {
	const { ref, inView } = useInView({ triggerOnce: true });
	const [startCount, setStartCount] = useState(false);

	useEffect(() => {
		if (inView) setStartCount(true);
	}, [inView]);

	return (
		<div ref={ref}>
			<p className="text-2xl font-bold text-sub-theme dark:text-white">
				{startCount ? (
					<CountUp end={end} duration={2} suffix={suffix || ''} />
				) : (
					'0'
				)}
			</p>
			<p className="text-sm text-gray-600 dark:text-gray-300">{label}</p>
		</div>
	);
};

const Stats = () => {
	return (
		<section
			id="about"
			className="relative dark:bg-gray-dark bg-bg-theme overflow-hidden"
		>
			<div className="mx-auto max-w-7xl gap-16 px-6 py-20 md:flex md:items-center md:justify-between lg:px-8">
				{/* Image */}
				<div
					className="mb-10 md:mb-0 md:w-1/2"
					data-aos="fade-down-subtle"
				>
					<Image
						src="/images/hero/4.jpg"
						alt="People working on laptops"
						className="w-full rounded-xl object-cover shadow-lg"
						width={1000}
						height={1000}
					/>
				</div>

				{/* Text & Stats */}
				<div className="space-y-6 md:w-1/2">
					<p
						data-aos={'fade-left-subtle'}
						className="text-sub-theme text-sm font-semibold"
					>
						First of its kind
					</p>
					<h2 className="text-3xl font-bold text-theme sm:text-4xl dark:text-white">
						Knowledge, Fun, Adventure & A Deeper Connection to
						Nature
					</h2>
					<p className="text-lg text-gray-600 dark:text-gray-500">
						{`Our vision for FarmLab echoes the Montessori philosophy of nurturing the whole child. By providing these immersive,

hands-on experiences, we aim to ignite a lifelong connection to food and farming, fostering understanding, respect, and a deep appreciation for the vital role of farmers in our community and the delicate balance of our ecosystem. We are thrilled to offer this unique opportunity for the young explorers of Shriram Montessori to cultivate their understanding of the world in such a meaningful and engaging way.`}
					</p>

					<div className="grid grid-cols-2 gap-6 border-t border-gray-200 pt-6 dark:border-gray-700">
						<StatItem end={12} suffix="+" label="Farm Activities" />
						<StatItem
							end={250}
							suffix="+"
							label="Successful Trips"
						/>
						<StatItem
							end={10}
							suffix="+"
							label="Prominent Schools"
						/>
						<StatItem
							end={6000}
							suffix="+"
							label="Happy Students"
						/>
					</div>
				</div>
			</div>

			<div className="hidden lg:block md:block absolute bottom-0 left-0 z-10 h-[258px] w-[190px] pointer-events-none">
				<Image
					alt="plant"
					src="/images/shapes/plant.png"
					fill
					className="object-contain"
				/>
			</div>
		</section>
	);
};

export default Stats;
