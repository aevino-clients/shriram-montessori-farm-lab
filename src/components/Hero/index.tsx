'use client';
import Link from 'next/link';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Hero = () => {
	const slides = [
		'/images/hero/1.jpg',
		'/images/hero/2.jpg',
		'/images/hero/3.jpg',
		'/images/hero/4.jpg',
		'/images/hero/5.jpg',
	];
	return (
		<>
			<section
				id="home"
				className="dark:bg-gray-dark relative z-10 overflow-hidden bg-white  pb-16 md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pb-[200px]"
			>
				<div className="h-[140px] md:h-[440px] lg:h-[440px] w-full relative">
					<Carousel
						showThumbs={false}
						showIndicators={false}
						showStatus={false}
						infiniteLoop
						autoPlay
						interval={2000}
						stopOnHover
						emulateTouch
						transitionTime={1000}
						swipeable
						className="h-full"
						//showArrows={false}
					>
						{slides.map((src, index) => (
							<div
								key={index}
								className="h-full w-full overflow-hidden relative"
							>
								<img
									src={src}
									alt={`Slide ${index + 1}`}
									className="h-full w-full object-cover"
								/>
								{/* <div className="absolute inset-0 bg-black/30 z-10" /> */}
							</div>
						))}
					</Carousel>
				</div>
			</section>
		</>
	);
};

export default Hero;
