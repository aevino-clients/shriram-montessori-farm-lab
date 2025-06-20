const SectionTitle = ({
	title,
	paragraph,
	width = '570px',
	center,
	mb = '50px',
}: {
	title: string;
	paragraph: string;
	width?: string;
	center?: boolean;
	mb?: string;
}) => {
	return (
		<>
			<div
				className={`w-full ${center ? 'mx-auto text-center' : ''}`}
				style={{ maxWidth: width, marginBottom: mb }}
			>
				<h6
					data-aos={'fade-left-subtle'}
					className="mb-4 text-xl  leading-tight! text-sub-theme dark:text-white sm:text-xl md:text-[24px]"
				>
					{title}
				</h6>
				<p
					data-aos={'fade-down-subtle'}
					className="text-theme leading-relaxed! text-body-color md:text-[45px] text-3xl lg:text-4xl"
				>
					{paragraph}
				</p>
			</div>
		</>
	);
};

export default SectionTitle;
