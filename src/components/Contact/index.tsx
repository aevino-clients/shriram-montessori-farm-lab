'use client';
import { ToastContainer, toast } from 'react-toastify';
const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
	event.preventDefault();

	// Access the form element
	const myForm = event.currentTarget;

	// Extract form data
	const formData = new FormData(myForm);

	// Convert FormData to a plain object suitable for URLSearchParams
	const formObject: Record<string, string> = {};
	formData.forEach((value, key) => {
		formObject[key] = value.toString(); // ensures compatibility with files, etc.
	});

	// Send POST request with form-encoded body
	fetch('/__forms.html', {
		method: 'POST',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: new URLSearchParams(formObject).toString(),
	})
		.then(() =>
			toast.success('Thank You,We will get back to you shortly!', {
				autoClose: 1000,
			})
		)
		.catch((error) => toast.error(error));
};

const Contact = () => {
	return (
		<section
			id="contact"
			className="overflow-hidden py-16 md:py-20 lg:py-28"
		>
			<div className="container">
				<div className="-mx-4 flex flex-wrap">
					<div className="m-auto w-full px-4 lg:w-7/12 xl:w-8/12">
						<div
							className="shadow-three dark:bg-gray-dark mb-12 rounded-xs bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
							data-wow-delay=".15s
              "
						>
							<h2 className="mb-3 flex-row text-3xl font-bold text-black sm:text-3xl lg:text-2xl xl:text-3xl dark:text-white">
								Let’s talk!
							</h2>
							<br />
							<form name="contact" onSubmit={handleSubmit}>
								<div className="-mx-4 flex flex-wrap">
									<div className="w-full px-4 md:w-1/2">
										<div className="mb-8">
											<label
												htmlFor="name"
												className="text-dark mb-3 block text-sm font-medium dark:text-white"
											>
												Name
											</label>
											<input
												type="text"
												name="name"
												placeholder="Enter your name"
												className="border-stroke text-body-color focus:border-sub-theme dark:text-body-color-dark dark:shadow-two dark:focus:border-sub-theme w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
											/>
										</div>
									</div>
									<div className="w-full px-4 md:w-1/2">
										<div className="mb-8">
											<label
												htmlFor="email"
												className="text-dark mb-3 block text-sm font-medium dark:text-white"
											>
												Email
											</label>
											<input
												type="email"
												name="email"
												placeholder="Enter your email"
												className="border-stroke text-body-color focus:border-sub-theme dark:text-body-color-dark dark:shadow-two dark:focus:border-sub-theme w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
											/>
										</div>
									</div>
									<div className="w-full px-4 md:w-1/2">
										<div className="mb-8">
											<label
												htmlFor="phone"
												className="text-dark mb-3 block text-sm font-medium dark:text-white"
											>
												Contact Number
											</label>
											<input
												type="tel"
												pattern="[789][0-9]{9}"
												name="mobile"
												placeholder="Enter your mobile number"
												className="border-stroke text-body-color focus:border-sub-theme dark:text-body-color-dark dark:shadow-two dark:focus:border-sub-theme w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
											/>
										</div>
									</div>

									<div className="w-full px-4">
										<button
											className="bg-sub-theme shadow-submit hover:bg-sub-theme/90 dark:shadow-submit-dark rounded-full px-9 py-4 text-base font-medium text-white duration-300"
											type="submit"
										>
											Enquire Now
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
					{/* <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div> */}
				</div>
			</div>
			<ToastContainer />
		</section>
	);
};

export default Contact;
