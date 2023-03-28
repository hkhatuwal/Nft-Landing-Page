import Image from "next/image";

const Hero = () => {
    return (
        <section className="hero__area min-h-[768px] pb-[60px] xl:pb-0">
            <div className="wrapper">
                <div className="flex flex-col gap-[20px] pt-[150px] md:items-start md:gap-[80px] lg:gap-[100px] xl:flex-row">
                    <div className="relative w-full md:mt-[40px] xl:w-[425px]">
                        <h1 className="mb-4 text-[30px] leading-[38px] md:text-[48px] md:leading-[54px]">
                            The First Natively Cross-chain Prime Brokerage
                        </h1>

                        <h3 className="text-[20px] leading-[24px] md:text-[25px] md:leading-[30px]">
                            Supply Liquidity & Borrow Assets
                        </h3>

                        <div className="absolute -bottom-[210px] -left-0 w-full space-y-3 bg-custom-blue p-7 md:-bottom-[210px] md:w-[520px] md:py-5 md:pl-[70px] md:pr-[30px] xl:-left-[70px]">
                            <h2 className="text-[32px] leading-[38px] md:text-[44px] md:leading-[52px]">
                                42,366
                            </h2>

                            <p className="text-[16px] leading-[22px]">
                                testnet users across 8 networks:
                            </p>

                            <div className="flex items-center justify-between">
                                <div className="relative h-[30px] w-[22px] object-contain md:h-[40px]">
                                    <Image
                                        src="/assets/images/Integrations2opt 1.png"
                                        alt="hero icon"
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto h-[540px] w-full flex-1 pt-[220px] md:pt-[160px] lg:w-[795px] xl:mr-0 xl:pt-0">
                        <Image
                            src="/assets/images/hero.png"
                            alt="hero"
                            layout="responsive"
                            objectFit="contain"
                            width={795}
                            height={540}
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
