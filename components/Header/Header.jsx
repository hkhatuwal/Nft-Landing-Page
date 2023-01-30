/**
 * Header component
 * @returns {JSX}
 */

const Header = () => {
	return (
		<header className="w-full">
			<script async src="https://www.googletagmanager.com/gtag/js?id=G-NYW1ZJC3Q6"></script>
			<script>
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
				gtag('config', 'G-KGQMHPCCG7');
			</script>
			<div className="flex justify-between">
				<div className="m-auto md:m-0">
					<a href="/">
						<img src="/assets/prime-logo-white.svg" className="w-10" alt="Prime Protocol" />
					</a>
				</div>
				<div className="hidden space-x-12 font-mono text-white md:block">
					<a className="font-medium text-white transition-all duration-200 opacity-70 hover:opacity-100" href="#">
						About
					</a>
					<a className="font-medium text-white transition-all duration-200 opacity-70 hover:opacity-100" href="#roadmap">
						Roadmap
					</a>
					{/* <a className="font-medium text-white transition-all duration-200 opacity-70 hover:opacity-100" href="#">
						Whitepaper
					</a> */}
					<a className="font-medium text-white transition-all duration-200 opacity-70 hover:opacity-100" href="#USP">
						$USP
					</a>
					<a
						className="font-medium text-white transition-all duration-200 opacity-70 hover:opacity-100"
						href="https://boards.greenhouse.io/primeprotocol"
						target={'_blank'}
						rel={'noopener noreferrer'}
					>
						Careers
					</a>

					<a
						className="font-medium text-white transition-all duration-200 opacity-70 hover:opacity-100"
						href="https://twitter.com/prime_protocol"
						target={'_blank'}
						rel={'noopener noreferrer'}
					>
						Twitter
					</a>


				</div>
			</div>
		</header>
	);
};

export default Header;
