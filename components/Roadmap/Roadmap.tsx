import { NextPage } from 'next';

type RoadmapCellType = {
	srno: string;
	title: string;
	description: string;
};

const RoadmapCell: NextPage<RoadmapCellType> = ({ srno, title, description }) => {
	return (
		<div className="h-full transition-all duration-200 border-2 group border-brand-primary hover:bg-brand-primary hover:shadow-newsletter-shadow">
			<div className="space-y-2 py-[50px] px-9">
				<p className="font-bold transition-all duration-200 text-brand-primary group-hover:text-white"> {srno}</p>
				<p className="font-bold transition-all duration-200 font-inter text-brand-primary group-hover:text-white"> {title} </p>
				<p className="font-mono transition-all duration-200 text-brand-primary group-hover:text-white">{description}</p>
			</div>
		</div>
	);
};

const Roadmap: NextPage = () => {
	return (
		<section id="roadmap" className="pb-[100px]">
			<div className="border-b-[100px] border-l-brand-primary border-r-brand-primary border-b-white bg-brand-primary pb-20 font-inter md:border-l-[100px] md:border-r-[100px] lg:h-[700px]">
				<h3 className="text-xl font-bold text-center text-white uppercase font-inter"> Roadmap </h3>
				<div id="roadmap-table" className="mt-[100px] rounded-xl border-none bg-white py-[90px] px-5 shadow-blue-100 outline-none md:px-0 md:shadow-lg">
					<div className="md:mx-[100px]">
						<div className="flex flex-col space-y-[20px] md:flex-row md:space-y-0 md:space-x-[20px]">
							<div className="w-full">
								<RoadmapCell
									srno="01"
									title="Development & Testnet Launch"
									description="Single chain deployment to testnet. Smart contract audits."
								/>
							</div>
							<div className="w-full">
								<RoadmapCell
									srno="02"
									title="Mainnet Launch"
									description="Support for a wide variety of ERC20 tokens, ibTokens, and LP tokens."
								/>
							</div>
						</div>
						<div className="mt-[20px] flex flex-col space-y-[20px] md:flex-row md:space-y-0 md:space-x-[20px]">
							<div className="w-full">
								<RoadmapCell
									srno="03"
									title="Cross Chain Capability - EVM Chains"
									description="Enabling cross margining between the most popular EVM L1 and L2 chains."
								/>
							</div>
							<div className="w-full">
								<RoadmapCell
									srno="04"
									title="Cross Chain Capability - non-EVM Chains"
									description="We want to support every degen in every ecosystem. If there's yield, we will help you capture it."
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Roadmap;
