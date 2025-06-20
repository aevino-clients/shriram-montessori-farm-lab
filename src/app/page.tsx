import AboutSectionOne from '@/components/About/AboutSectionOne';
import AboutSectionTwo from '@/components/About/AboutSectionTwo';
import Blog from '@/components/Blog';
import Brands from '@/components/Brands';
import ScrollUp from '@/components/Common/ScrollUp';
import Contact from '@/components/Contact';
import Features from '@/components/Features';
import Hero from '@/components/Hero';
import Pricing from '@/components/Pricing';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';
import Video from '@/components/Video';
import { Metadata } from 'next';
import AnimatedSection from '@/components/animatedSection';
import Activity from '@/components/Activities';
import ClosingSection from '@/components/ClosingSection';
export const metadata: Metadata = {
	title: 'Shriram Montessori | Farm Lab',
	description:
		'We aim to ignite a lifelong connection to food and farming, fostering understanding, respect, and a deep appreciation for the vital role of farmers in our community',
	// other metadata
};

export default function Home() {
	return (
		<>
			<ScrollUp />

			<Hero />

			<Activity />

			<Stats />

			<Testimonials />

			<Blog />

			<ClosingSection />
		</>
	);
}
