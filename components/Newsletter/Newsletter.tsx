// import axios
import axios from 'axios';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Newsletter = () => {
	// create a state to manage email
	const [email, setEmail] = useState('');

	// on press of a button, call the subsribe api
	const handleSubmit = (e: any) => {
		console.log('submitting');
		// show the loading toast
		const laodingID = toast.loading('Subscribing. Please wait!');
		e.preventDefault();
		axios
			.post('/api/subscribe', { email })
			.then((res) => {
				console.log(res);
				console.log(res.data);

				// res.status == success
				if (res.data.status == 'success') {
					// dismiss the toast
					toast.dismiss(laodingID);
					// show the success toast
					toast.success('Subscribed successfully!');
					// clear the email
					setEmail('');
				}
			})
			.catch((err) => {
				toast.dismiss(laodingID);
				// show the success toast
				toast.success('Please try again!');

				console.log(err);
			});
	};

	return (
		<section className="my-[100px]">
			<Toaster />
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
									onChange={(e) => setEmail(e.target.value)}
									name="email"
									type="email"
									value={email}
									placeholder="vitalik@ethereum.org"
									className="w-full p-4 font-semibold border border-brand-primary text-brand-primary"
								/>
								<button
									onClick={(e) => handleSubmit(e)}
									className="px-12 py-3 mt-2 font-semibold text-white uppercase transition-all duration-200 bg-brand-primary bg-opacity-80 hover:bg-opacity-100 md:mt-0"
								>
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
