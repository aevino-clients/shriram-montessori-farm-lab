import Breadcrumb from '@/components/Common/Breadcrumb';
import ImageGallery from '@/components/Gallery';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Shriram Montessori | Gallery',
	description: 'GALLERY',
	// other metadata
};

const Gallery = () => {
	return (
		<>
			<Breadcrumb
				pageName="Gallery"
				description="As a true Montessori school, we see several of our students reaping the benefits of the Montessori method with every new day. "
			/>

			<section className="pt-[20px] pb-[120px]">
				<div className="container">
					<ImageGallery />
				</div>
			</section>
		</>
	);
};

export default Gallery;
