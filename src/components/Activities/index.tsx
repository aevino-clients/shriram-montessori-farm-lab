import SectionTitle from '../Common/SectionTitle';
import SingleActivity from './singleActivity';
import activityData from './activityData';

const Activity = () => {
	return (
		<section
			id="blog"
			className="relative z-10 overflow-hidden py-16 md:py-8 lg:py-8"
		>
			{/* Background layer covering bottom 3/4 */}
			<div className="absolute inset-x-0 bottom-0 h-[75%] bg-theme z-0" />

			{/* Main content on top */}
			<div className="container relative z-10">
				<SectionTitle
					title="Our Activities"
					paragraph="Nourishing the world from seed to table"
					center
				/>

				<div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
					{activityData.map((activity) => (
						<div key={activity.id} className="w-full h-full flex">
							<SingleActivity activity={activity} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Activity;
