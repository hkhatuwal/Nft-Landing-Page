const Newsletter = () => {
	return (
		<section className="my-[100px]">
			<div className="mx-6 md:mx-[100px]">
				<div className="rounded-[36px] bg-white py-[100px] shadow-newsletter-shadow">
					<div className="flex flex-col items-center justify-center">
						<h5 className="text-3xl font-bold text-center font-inter text-brand-primary md:text-5xl">
							{' '}
							Sign up for our <br /> newsletter{' '}
						</h5>
						<div className="mt-[54px] w-full px-6 md:w-1/2 md:px-0">
							<div className="flex flex-col w-full md:flex-row">
								<input
									name="email"
									type="email"
									placeholder="vitalik@ethereum.org"
									className="w-full p-4 font-semibold border border-brand-primary text-brand-primary"
								/>
								<button className="px-12 py-3 mt-2 font-semibold text-white uppercase transition-all duration-200 bg-brand-primary bg-opacity-80 hover:bg-opacity-100 md:mt-0">
									{' '}
									Subscribe{' '}
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Newsletter;
