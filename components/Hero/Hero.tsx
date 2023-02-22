const Hero = () => {
    return (
        <section className="hero__area min-h-[768px] pb-[60px] xl:pb-0">
            <div className="wrapper">
                <div className="flex flex-col gap-[40px] pt-[150px] md:items-start md:gap-[80px] xl:flex-row">
                    <div className="relative w-full md:mt-[60px] xl:w-[425px]">
                        <h1 className="mb-4 text-[30px] leading-[38px] md:text-[48px] md:leading-[54px]">
                            The First Natively Cross-chain Prime Brokerage
                        </h1>

                        <h3 className="text-[20px] leading-[24px] md:text-[25px] md:leading-[30px]">
                            Supply Liquidity & Borrow Assets
                        </h3>

                        <div className="absolute -bottom-[230px] -left-0 w-full space-y-3 bg-custom-blue p-8 md:-bottom-[210px] md:w-[520px] md:py-5 md:pl-[70px] md:pr-[30px] xl:-left-[70px]">
                            <h2 className="text-[32px] leading-[38px] md:text-[44px] md:leading-[52px]">
                                $ 51,674,007.01
                            </h2>

                            <p className="text-[16px] leading-[22px]">
                                of liquidity is locked in Prime across 7
                                networks:
                            </p>

                            <div className="flex items-center justify-between">
                                <img
                                    className="h-[25px] w-auto object-contain md:h-[45px]"
                                    src="/assets/images/hero-icon-1.svg"
                                    alt="hero icon"
                                />
                                <img
                                    className="h-[25px] w-auto object-contain md:h-[45px]"
                                    src="/assets/images/hero-icon-2.svg"
                                    alt="hero icon"
                                />
                                <img
                                    className="h-[25px] w-auto object-contain md:h-[45px]"
                                    src="/assets/images/hero-icon-3.svg"
                                    alt="hero icon"
                                />
                                <img
                                    className="h-[30px] w-auto object-contain md:h-[45px]"
                                    src="/assets/images/hero-icon-4.svg"
                                    alt="hero icon"
                                />
                                <img
                                    className="h-[30px] w-auto object-contain md:h-[45px]"
                                    src="/assets/images/hero-icon-5.svg"
                                    alt="hero icon"
                                />
                                <img
                                    className="h-[25px] w-auto object-contain md:h-[45px]"
                                    src="/assets/images/hero-icon-6.svg"
                                    alt="hero icon"
                                />
                                <img
                                    className="h-[25px] w-auto object-contain md:h-[45px]"
                                    src="/assets/images/hero-icon-7.svg"
                                    alt="hero icon"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto flex-1 pt-[220px] md:pt-[160px] xl:mr-0 xl:pt-0">
                        <img src="/assets/images/hero.png" alt="hero" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
