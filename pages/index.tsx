import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header/Header';
import GridCell from '../components/GridCell/GridCell';
import Roadmap from '../components/Roadmap/Roadmap';
import Features2 from '../components/Features2/Features2';
import Newsletter from '../components/Newsletter/Newsletter';
import Footer from '../components/Footer/Footer';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title> Prime Protocol – Cross Chain Prime Brokerage </title>
			</Head>
			<section className="min-h-screen bg-brand-primary py-20 px-5 md:px-[100px]">
				<div>
					<Header />
				</div>
				<section className="">
					<div className="mt-[130px]">
						<h1 className="text-4xl font-bold text-center text-white font-inter md:text-5xl">
							Introducing <br /> Prime Protocol
						</h1>
						<p className="m-auto mt-6 font-mono text-sm text-center text-white md:w-1/2 md:text-base">
							We're building the first natively cross chain prime brokerage. We believe the future is multi-chain, and DeFi needs new financial
							primitives to increase capital efficiency.
						</p>
					</div>
				</section>
				<section id="features" className="mt-[130px]">
					<div className="flex w-full flex-col space-y-[20px] md:flex-row md:space-y-[0px] md:space-x-[20px]">
						<div className="w-full">
							<GridCell
								iconURL="/assets/icons/borrow.svg"
								title={'One Account For Every Token '}
								description="Borrow against your whole portfolio. Loans are collateralized by all deposited assets, giving borrowers the benefits of a diversified portfolio."
							/>
						</div>
						<div className="w-full">
							<GridCell
								iconURL="/assets/icons/cross-margin.svg"
								title="Cross Chain Margining "
								description="Receive liquidity on any chain - regardless of where collateral is locked."
							/>
						</div>
						<div className="w-full">
							<GridCell
								iconURL="/assets/icons/universal-monetary-policy.svg"
								title="Universal Monetary Policy"
								description="One competitive interest rate for every loan."
							/>
						</div>
					</div>
				</section>
			</section>
			<Roadmap />
			<Features2 />
			<Newsletter />
			<Footer />
		</>
	);
};

export default Home;
