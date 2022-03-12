const Footer = () => {
	return (
		<section className="bg-brand-primary">
			<div className="mx-6 py-[64px] md:mx-[100px]">
				<div className="flex flex-col md:flex-row">
					<div>
						<img className="h-12" src="/assets/prime-logo-white.svg" />
						<p className="mt-6 font-mono text-4xl font-semibold text-white uppercase">
							Prime <br /> Protocol
						</p>
						<a href="mailto:contact@primeprotocol.xyz">
							<p className="mt-6 font-mono font-semibold text-white">contact@primeprotocol.xyz</p>
						</a>
						<div className="mt-6">
							<div className="flex space-x-4">
								<a href="https://twitter.com/prime_protocol">
									<img src="/assets/icons/twitter.svg" className="transition-all duration-200 opacity-80 hover:opacity-100" alt="Twitter" />
								</a>
								<a href="https://discord.gg/KdskpZ7N3y">
									<img src="/assets/icons/discord.svg" className="transition-all duration-200 opacity-80 hover:opacity-100" alt="Discord" />
								</a>
								<a href="https://medium.com/@primeprotocol">
									<img src="/assets/icons/medium.svg" className="transition-all duration-200 opacity-80 hover:opacity-100" alt="Medium" />
								</a>
							</div>
						</div>
					</div>
					<div className="mt-12 flex w-full space-x-[50px] text-white md:mt-0 md:justify-end">
						<div>
							<h5 className="font-mono font-bold uppercase"> Developers</h5>
							<div className="mt-6 space-y-1 text-sm">
								<li className="font-mono list-none cursor-pointer hover:font-semibold">Sign Up</li>
								<li className="font-mono list-none cursor-pointer hover:font-semibold">Documentation</li>
								<li className="font-mono list-none cursor-pointer hover:font-semibold">Community Discord</li>
								<li className="font-mono list-none cursor-pointer hover:font-semibold">Newsletter</li>
							</div>
						</div>
						<div>
							<h5 className="font-mono font-bold uppercase"> Contact</h5>
							<div className="mt-6 space-y-1 text-sm ">
								<li className="font-mono list-none cursor-pointer hover:font-semibold">General Inquiries</li>
								<li className="font-mono list-none cursor-pointer hover:font-semibold">Press</li>
								<li className="font-mono list-none cursor-pointer hover:font-semibold">Sales</li>
								<li className="font-mono list-none cursor-pointer hover:font-semibold">Discord</li>
								<li className="font-mono list-none cursor-pointer hover:font-semibold">Email</li>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer;
