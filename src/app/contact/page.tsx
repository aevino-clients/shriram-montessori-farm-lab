import Breadcrumb from '@/components/Common/Breadcrumb';
import Contact from '@/components/Contact';

import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Aevino | Contact Us',
	description: 'This is Contact Page for Aevino',
	// other metadata
};

const ContactPage = () => {
	return (
		<>
			<Breadcrumb
				pageName="Contact Us"
				description="Shriram Montessori - House of Children is a leading school in Hyderabad, imparting education based on the globally-acclaimed Montessori method of education"
			/>

			<Contact />
		</>
	);
};

export default ContactPage;
