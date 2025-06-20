import { Activity } from '@/types/activity';
import Image from 'next/image';
import Link from 'next/link';

const SingleActivity = ({ activity }: { activity: Activity }) => {
	const { title, image, paragraph } = activity;
	return (
		<div
			data-aos="fade-up-subtle"
			className="flex flex-col h-full rounded-lg overflow-hidden shadow-one hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark bg-white duration-300"
		>
			<Link
				href="/blog-details"
				className="relative block aspect-video w-full"
			>
				<Image src={image} alt="image" fill className="object-cover" />
			</Link>
			<div className="flex flex-col flex-grow p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
				<h3>
					<Link
						href="/blog-details"
						className="hover:text-sub-theme dark:hover:text-sub-theme mb-4 block text-xl font-bold text-black sm:text-2xl dark:text-white"
					>
						{title}
					</Link>
				</h3>
				<p className="text-body-color mb-4 text-base font-medium dark:border-white/10">
					{paragraph}
				</p>
				{/* Spacer pushes content to bottom if needed */}
				<div className="mt-auto" />
			</div>
		</div>
	);
};

export default SingleActivity;
