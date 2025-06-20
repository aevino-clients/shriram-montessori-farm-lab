'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import ThemeToggler from './ThemeToggler';
import menuData from './menuData';

const Header = () => {
	// Navbar toggle
	const [navbarOpen, setNavbarOpen] = useState(false);
	const [activeTab, setActiveTab] = useState(null);
	const navbarToggleHandler = () => {
		setNavbarOpen(!navbarOpen);
	};

	// Sticky Navbar
	const [sticky, setSticky] = useState(false);
	const handleStickyNavbar = () => {
		if (window.scrollY >= 80) {
			setSticky(true);
		} else {
			setSticky(false);
		}
	};
	useEffect(() => {
		window.addEventListener('scroll', handleStickyNavbar);
	});

	// submenu handler
	const [openIndex, setOpenIndex] = useState(-1);
	const handleSubmenu = (index) => {
		if (openIndex === index) {
			setOpenIndex(-1);
		} else {
			setOpenIndex(index);
		}
	};
	const scrollToWithOffset = (id: string, offset = 80) => {
		const element = document.getElementById(id);
		if (!element) return;

		const y =
			element.getBoundingClientRect().top + window.pageYOffset - offset;

		window.scrollTo({ top: y, behavior: 'smooth' });
		setActiveTab('about');
	};
	const usePathName = usePathname();

	return (
		<>
			<header
				className={`header top-0 left-0 z-40 flex w-full h-[70px] lg:h-[auto] items-center ${
					sticky
						? 'dark:bg-gray-dark dark:shadow-sticky-dark shadow-sticky fixed z-9999 bg-white/80 backdrop-blur-xs transition'
						: 'absolute bg-transparent'
				}`}
			>
				<div className="container w-full max-w-full m-0 h-[100%] lg:h-[auto]">
					<div className="flex items-center lg:justify-center pt-2 lg:pt-0 lg:h-[140px] h-[70px] gap-4 relative">
						<a className="lg:h-[70px] lg:w-[104px] overflow-hidden relative h-[47px] w-[77px]">
							<Image
								src={'/images/logo/logo-1.avif'}
								alt="logo"
								fill
							/>
						</a>
						<span className="flex h-full items-center justify-center ">
							<b className="flex h-[40px] md:h-[70px] lg:h-[70px] xl:h-[70px] 2xl:h-[70px] items-center justify-center w-[1px] bg-gray-400 "></b>
						</span>
						<h4
							data-aos={'fade-left-subtle'}
							className="flex h-full text-gray-600 items-center justify-center md:text-[45px] text-md lg:text-4xl xl:text-3x 2xl:text-3xl"
						>
							<span className="text-sub-theme mr-2">Farm</span>{' '}
							Lab
						</h4>

						<div className="absolute center-items right-4 hidden md:display-block lg:display-block">
							<div className="flex items-center">
								<a
									href="https://www.facebook.com/profile.php?id=61576969994551"
									aria-label="social-link"
									target="_blank"
									rel="noopener noreferrer"
									className="text-dark hover:text-sub-theme dark:text-dark-dark dark:hover:text-sub-theme mr-6 duration-300"
								>
									<svg
										width="18"
										height="18"
										viewBox="0 0 22 22"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M12.1 10.4939V7.42705C12.1 6.23984 13.085 5.27741 14.3 5.27741H16.5V2.05296L13.5135 1.84452C10.9664 1.66676 8.8 3.63781 8.8 6.13287V10.4939H5.5V13.7183H8.8V20.1667H12.1V13.7183H15.4L16.5 10.4939H12.1Z"
											fill="currentColor"
										/>
									</svg>
								</a>
								<a
									href="/"
									aria-label="social-link"
									target="_blank"
									rel="noopener noreferrer"
									className="text-dark hover:text-sub-theme dark:text-dark-dark dark:hover:text-sub-theme mr-6 duration-300"
								>
									<svg
										width="18"
										height="18"
										viewBox="0 0 22 22"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M13.9831 19.25L9.82094 13.3176L4.61058 19.25H2.40625L8.843 11.9233L2.40625 2.75H8.06572L11.9884 8.34127L16.9034 2.75H19.1077L12.9697 9.73737L19.6425 19.25H13.9831ZM16.4378 17.5775H14.9538L5.56249 4.42252H7.04674L10.808 9.6899L11.4584 10.6039L16.4378 17.5775Z"
											fill="currentColor"
										/>
									</svg>
								</a>
								<a
									href="/"
									aria-label="social-link"
									target="_blank"
									rel="noopener noreferrer"
									className="text-dark hover:text-sub-theme dark:text-dark-dark dark:hover:text-sub-theme mr-6 duration-300"
								>
									<svg
										width="18"
										height="14"
										viewBox="0 0 18 14"
										className="fill-current"
									>
										<path d="M17.5058 2.07119C17.3068 1.2488 16.7099 0.609173 15.9423 0.395963C14.5778 7.26191e-08 9.0627 0 9.0627 0C9.0627 0 3.54766 7.26191e-08 2.18311 0.395963C1.41555 0.609173 0.818561 1.2488 0.619565 2.07119C0.25 3.56366 0.25 6.60953 0.25 6.60953C0.25 6.60953 0.25 9.68585 0.619565 11.1479C0.818561 11.9703 1.41555 12.6099 2.18311 12.8231C3.54766 13.2191 9.0627 13.2191 9.0627 13.2191C9.0627 13.2191 14.5778 13.2191 15.9423 12.8231C16.7099 12.6099 17.3068 11.9703 17.5058 11.1479C17.8754 9.68585 17.8754 6.60953 17.8754 6.60953C17.8754 6.60953 17.8754 3.56366 17.5058 2.07119ZM7.30016 9.44218V3.77687L11.8771 6.60953L7.30016 9.44218Z" />
									</svg>
								</a>
								<a
									href="https://linkedin.com/companu/aevino"
									aria-label="social-link"
									target="_blank"
									rel="noopener noreferrer"
									className="text-dark hover:text-sub-theme dark:text-dark-dark dark:hover:text-sub-theme duration-300"
								>
									<svg
										width="17"
										height="16"
										viewBox="0 0 17 16"
										className="fill-current"
									>
										<path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
									</svg>
								</a>
							</div>
						</div>
					</div>
					<div className="relative -mx-4 flex items-center justify-between bg-theme -my-8 lg:-my-0">
						<div className="flex w-full items-center justify-between px-4 justify-center center-items">
							<div className="">
								<button
									onClick={navbarToggleHandler}
									id="navbarToggler"
									aria-label="Mobile Menu"
									className="ring-sub-theme absolute top-1/2 right-4 block translate-y-[-50%] rounded-lg px-3 py-[6px] focus:ring-2 lg:hidden"
								>
									<span
										className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
											navbarOpen
												? 'top-[7px] rotate-45'
												: ' '
										}`}
									/>
									<span
										className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
											navbarOpen ? 'opacity-0' : ' '
										}`}
									/>
									<span
										className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
											navbarOpen
												? 'top-[-8px] -rotate-45'
												: ' '
										}`}
									/>
								</button>
								<nav
									id="navbarCollapse"
									className={`navbar border-body-color/50 dark:border-body-color/20 dark:bg-dark absolute right-0 z-30 w-[250px] rounded border-[.5px] bg-white px-6 py-4 duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
										navbarOpen
											? 'visibility top-full opacity-100'
											: 'invisible top-[120%] opacity-0'
									}`}
								>
									<ul className="block lg:flex lg:space-x-12 justify-center center-items">
										{menuData.map((menuItem, index) => (
											<li
												key={index}
												className="group relative"
											>
												{menuItem.path ? (
													<Link
														href={menuItem.path}
														className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-4 ${
															usePathName ===
															menuItem.path
																? 'text-sub-theme'
																: 'text-body-color hover:text-sub-theme dark:text-white/70 dark:hover:text-white'
														}`}
													>
														{menuItem.title}
													</Link>
												) : (
													<>
														<p
															onClick={() =>
																scrollToWithOffset(
																	'about',
																	200
																)
															}
															className={`flex py-2 cursor-pointer text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-4 ${'text-body-color hover:text-sub-theme dark:text-white/70 dark:hover:text-white'}`}
														>
															{menuItem.title}
														</p>
														{/* <div
															className={`submenu dark:bg-dark relative top-full left-0 rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
																openIndex ===
																index
																	? 'block'
																	: 'hidden'
															}`}
														>
															{menuItem.submenu.map(
																(
																	submenuItem,
																	index
																) => (
																	<Link
																		href={
																			submenuItem.path
																		}
																		key={
																			index
																		}
																		className="text-white hover:text-sub-theme block rounded-sm py-2.5 text-sm lg:px-3 dark:text-white/70 dark:hover:text-white"
																	>
																		{
																			submenuItem.title
																		}
																	</Link>
																)
															)}
														</div> */}
													</>
												)}
											</li>
										))}
									</ul>
								</nav>
							</div>
							<div className="flex items-center justify-end pr-16 lg:pr-0 absolute right-4">
								<Link
									href="/signin"
									className="text-white hidden px-7 py-3 text-base font-medium hover:opacity-70 md:block bg-sub-theme rounded-md"
								>
									Our Broucher
								</Link>

								<Link
									href="/signin"
									className="text-white ml-2 hidden px-7 py-3 text-base font-medium hover:opacity-70 md:block bg-sub-sub-theme rounded-md"
								>
									List of activities
								</Link>

								{/* <div>
                  <ThemeToggler />
                </div> */}
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
