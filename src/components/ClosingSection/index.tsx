import Image from 'next/image';

const ClosingSection = () => {
	return (
		<section className="pt-0 bg-bg-theme ">
			<div className="container">
				<div className="-mx-4 flex flex-wrap">
					<div
						data-aos="fade-up-subtle"
						className="w-full md:w-1/2 lg:w-1/2 px-4 h-[300px] flex relative"
					>
						<Image
							alt="farm"
							fill
							className="object-contain"
							src="/images/shapes/footer.png"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ClosingSection;
