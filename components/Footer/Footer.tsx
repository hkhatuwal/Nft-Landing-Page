import Image from "next/image";

const Footer = () => {
    return (
        <footer className="py-[50px] md:py-[100px]">
            <div className="wrapper">
                <div className="flex flex-col gap-[30px] md:flex-row md:items-center md:justify-between md:gap-0">
                    <div className="flex h-[50px] items-center md:w-[400px] xl:h-[80px] xl:w-[740px]">
                        <input
                            className="h-full w-full border-2 border-r-0 border-custom-white bg-transparent px-5 text-center text-[16px] font-normal leading-[22px] outline-none xl:text-[22px] xl:leading-[24px]"
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Sign up for our newsletter"
                        />

                        <button className="flex h-full w-[200px] items-center justify-center border-2 border-custom-white text-[14px] uppercase leading-[20px] transition-all duration-150 hover:bg-custom-blue md:w-[260px] md:text-[16px] md:leading-[22px] xl:text-[22px] xl:leading-[28px]">
                            SUBMIT
                        </button>
                    </div>

                    <div className="relative w-[193px]">
                        <a href="#" className="relative h-[92px] w-[193px]">
                            <Image
                                src="/assets/images/logo.png"
                                alt="logo"
                                layout="fill"
                                objectFit="contain"
                            />
                        </a>

                        <p className="absolute bottom-2 right-1 text-[12px] leading-[28px]">
                            © 2023 Prime Protocol
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
