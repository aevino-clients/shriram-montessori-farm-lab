import Image from 'next/image';

const ClosingSection = () => {
	return (
		<section className="pt-0 bg-bg-theme ">
			<div className="container">
				<div className="-mx-4 flex flex-wrap">
					<div
						data-aos="fade-up-subtle"
						className="w-full md:w-1/2 lg:w-1/2 px-4 h-[200px] flex relative md:h-[300px] lg:h-[300px] xl:h-[300px] 2xl:h-[300px]"
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
