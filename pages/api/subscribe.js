import axios from 'axios';

/**
 * NEXTJS API - subscribe.js
 */

/**
 * This is a server side script that handles the subscription to the mailchimp. Since the script is server side, it can contain any secret keys and other sensitive information. However, it is recommended to keep the secret keys in a separate file and not in the code itself. // Tanishq, 2268
 *
 * More on this here: https://nextjs.org/docs/basic-features/environment-variables#exposing-environment-variables-to-the-browser
 *
 * However, this will not protect the keys if the repo is made public.
 */

const MAILCHIMP_API_KEY = '2dcfabbe16a3bde37355770f66a6e091-us14';
const mailchimpServer = 'us14';
const listId = 'e7a9f66969';
const apiBase = 'https://' + mailchimpServer + '.api.mailchimp.com/3.0';

export default async function subscribeToMailchimp(req, res) {
	const { email } = req.body;

	// subscribe to mailchimp with the above list id using axios
	const response = await axios.post(
		apiBase + '/lists/' + listId + '/members/',
		{
			email_address: email,
			status: 'subscribed',
		},
		{
			auth: {
				username: 'anystring',
				password: MAILCHIMP_API_KEY,
			},
		}
	);

	// respond back
	res.json({
		response: response.data,
		status: 'success',
		message: 'Subscribed to Mailchimp',
	});
}
