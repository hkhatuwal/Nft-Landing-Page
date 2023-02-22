const Footer = () => {
    return (
        <footer className="py-[50px] md:py-[100px]">
            <div className="wrapper">
                <div className="flex items-center justify-between">
                    <div className="flex h-[80px] w-[740px] items-center">
                        <input
                            className="h-full w-full border-2 border-r-0 border-custom-white bg-transparent text-center text-[22px] font-normal leading-[24px] outline-none"
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Sign up for our newsletter"
                        />

                        <button className="flex h-full w-[260px] items-center justify-center border-2 border-custom-white uppercase transition-all duration-150 hover:bg-custom-blue">
                            SUBMIT
                        </button>
                    </div>

                    <div className="relative h-[92px] w-[193px]">
                        <a href="#">
                            <img
                                className="object-contain"
                                src="/assets/images/logo.png"
                                alt="logo"
                            />
                        </a>

                        <p className="absolute bottom-2 right-2 text-[12px] leading-[28px]">
                            © 2023 Prime Protocol
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
