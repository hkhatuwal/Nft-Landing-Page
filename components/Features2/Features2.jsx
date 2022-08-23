const Features2 = (props) => {
	return (
		<section id="USP" className="mt-6 py-2 text-center md:mt-20 md:py-[100px]">
			<h4 className="font-semibold font-inter text-7xl text-brand-primary"> $USP </h4>
			<p className="m-auto mt-6 font-mono text-brand-primary md:w-1/3">
				One decentralized stablecoin <br /> for every DeFi ecosystem.
			</p>
			<br />
			<p className="mt-20 text-2xl font-bold font-inter text-brand-primary opacity-20"> How It Works </p>
			<div className="mx-6 mt-[44px] md:mx-[100px]">
				<div className="flex flex-col">
					<div className="flex flex-col space-y-12 md:flex-row md:space-y-0">
						<div className="w-full">
							<img src="/assets/icons/overcollaterized.svg" className="w-12 m-auto transition-all duration-150 hover:scale-110" />
							<p className="m-auto mt-[20px] max-w-[424px] font-mono text-brand-primary">
								USP is an overcollateralized stablecoin, stabilized by Prime's monetary policy
							</p>
						</div>
						<div className="w-full">
							<img src="/assets/icons/borrow-USP.svg" className="w-16 m-auto transition-all duration-150 hover:scale-110" />
							<p className="m-auto mt-[20px] max-w-[424px] font-mono text-brand-primary">Borrow USP at low rates with zero deposit fees</p>
						</div>
					</div>
					<div className="mt-[60px] flex flex-col space-y-12 md:flex-row md:space-y-0">
						<div className="w-full">
							<img src="/assets/icons/liquidiations.svg" className="w-12 m-auto transition-all duration-150 hover:scale-110" />
							<p className="m-auto mt-[20px] max-w-[424px] font-mono text-brand-primary">
								Participate in liquidations and arbitrage opportunity to help stabilize USP
							</p>
						</div>
						<div className="w-full">
							<img src="/assets/icons/11-x.png" className="w-12 m-auto transition-all duration-150 hover:scale-110" />
							<p className="m-auto mt-[20px] max-w-[424px] font-mono text-brand-primary">Leverage your portfolio up to 11x</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features2;
