import Image from "next/image";
import axios from 'axios';
import {useState} from 'react';
import toast, {Toaster} from 'react-hot-toast';
import Link from "next/link";
import {footerLinks} from "../../utils/constants";

const Footer = () => {

    const [email, setEmail] = useState('');

    // on press of a button, call the subsribe api
    const handleSubmit = (e: any) => {
        console.log('submitting');
        // show the loading toast
        const laodingID = toast.loading('Subscribing. Please wait!');
        e.preventDefault();
        axios
            .post('/api/subscribe', {email})
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
        <footer className=" md:pt-[50px] ">
            <Toaster/>
            <div className="wrapper">

                <div className="flex-grow flex flex-wrap items-start md:pr-20 -mb-10 md:text-left text-center order-first">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4 text-left">
                        <h2 className="title-font font-medium text-gray-500 tracking-widest text-sm mb-3">Explore</h2>
                        <nav className="list-none mb-10">

                            {footerLinks.map((item) => (
                                <li className={"text-custom-white text-lg hover:text-gray-800"} key={item.title}>
                                    <a href={"/"}>{item.title}</a>
                                </li>
                            ))}
                        </nav>
                    </div>
                    <div className="lg:w-2/4 md:w-full w-full px-4 text-left">
                        <h2 className="title-font font-medium text-gray-500 tracking-widest text-sm mb-3">Subscription</h2>
                        <nav className="list-none mb-10">


                            <li>
                                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                            </li>
                            <li className={'flex flex-row'}>
                                <input id="message" name="message"
                                       className="w-2/4 border border-white/50 bg-black px-2 text-lg rounded "
                                       placeholder="Email"></input>
                                <button
                                    className="ml-2 bg-custom-white rounded-xl  text-custom-black px-4 py-2 text-sm font-semibold">Subscribe
                                </button>
                            </li>

                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <a
                            href="#"
                            className="relative inline-block h-[60px] w-[142px] md:h-[60px] md:w-[150px]"
                        >
                            <Image
                                src="/assets/images/logo.png"
                                alt="logo"
                                layout="fill"
                                objectFit="contain"
                            />
                        </a>
                    </div>
                </div>


            </div>

            <hr className="my-4 border-t border-gray-300"/>
            <div className={'p-3'}>
                <ul className="flex flex-row text-sm gap-5">
                    <li className={'text-custom-white/50'}>Prime Protocol 2023</li>
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                    <li>Cookie Preferences</li>
                </ul>
            </div>

        </footer>
    );
};

export default Footer;
