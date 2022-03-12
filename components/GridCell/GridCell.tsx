import type { NextPage } from 'next';

type Props = {
	iconURL: string;
	title: string;
	description: string;
};

// function that takes three string parameters and returns JSX
const GridCell: NextPage<Props> = ({ iconURL, title, description }) => (
	<div className="group h-full border border-white px-[36px] py-[50px] transition-all duration-200 hover:shadow-2xl">
		<img src={iconURL} className="w-12" />
		<h5 className="pt-4 font-bold text-white transition-all duration-200 font-inter">{title}</h5>
		<p className="pt-4 font-mono text-sm text-white transition-all duration-200">{description}</p>
	</div>
);

export default GridCell;
