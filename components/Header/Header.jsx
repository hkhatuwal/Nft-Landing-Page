/**
 * Header component
 * @returns {JSX}
 */

const Header = () => {
	return (
		<header className="w-full">
			<div className="flex justify-between">
				<div className="m-auto md:m-0">
					<a href="/">
						<img src="/assets/prime-logo-white.svg" className="w-12" alt="Prime Protocol" />
					</a>
				</div>
				<div className="hidden space-x-12 font-mono text-white md:block">
					<a className="font-medium text-white transition-all duration-200 opacity-70 hover:opacity-100" href="#">
						About
					</a>
					<a className="font-medium text-white transition-all duration-200 opacity-70 hover:opacity-100" href="#roadmap">
						Roadmap
					</a>
					<a className="font-medium text-white transition-all duration-200 opacity-70 hover:opacity-100" href="#">
						Whitepaper
					</a>
					<a className="font-medium text-white transition-all duration-200 opacity-70 hover:opacity-100" href="#PUSD">
						$PUSD
					</a>
					<a
						className="font-medium text-white transition-all duration-200 opacity-70 hover:opacity-100"
						href="https://angel.co/company/prime-protocol/jobs"
						target={'_blank'}
						rel={'noopener noreferrer'}
					>
						Careers
					</a>
				</div>
			</div>
		</header>
	);
};

export default Header;
