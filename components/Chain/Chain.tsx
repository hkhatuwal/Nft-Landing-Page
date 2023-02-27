import Image from "next/image";

const Chain = () => {
    return (
        <section className="bg-custom-blue py-[50px] md:pt-[90px] md:pb-[75px]">
            <div className="wrapper">
                <div className="flex flex-col gap-[40px] lg:flex-row lg:items-center xl:gap-[80px] xl:pr-[80px]">
                    <div className="flex flex-1 flex-col gap-[50px]">
                        {/* Single Item */}
                        <div>
                            <h2 className="mb-1 text-[22px] leading-[28px] md:text-[30px] md:leading-[36px]">
                                Cross-Chain
                            </h2>

                            <p>
                                Instant liquidity on any chain. Deposit
                                anywhere, borrow anywhere. Cross-margining
                                between every deposit and borrow.
                            </p>
                        </div>
                        {/* Single Item */}

                        {/* Single Item */}
                        <div>
                            <h2 className="mb-1 text-[22px] leading-[28px] md:text-[30px] md:leading-[36px]">
                                Universal Access
                            </h2>

                            <p>
                                Originate a transaction on any supported chain
                                on Prime Protocol using gas fees from any other
                                network on the platform.
                            </p>
                        </div>
                        {/* Single Item */}

                        {/* Single Item */}
                        <div>
                            <h2 className="mb-1 text-[22px] leading-[28px] md:text-[30px] md:leading-[36px]">
                                Seamless, interoperable DeFi hub
                            </h2>

                            <p>
                                Facilitate the spread of wealth across the
                                crypto ecosystem by reducing friction and
                                fragmentation between chains.
                            </p>
                        </div>
                        {/* Single Item */}
                    </div>

                    <div className="mx-auto w-full md:w-[455px]">
                        <Image
                            src="/assets/images/chain.png"
                            alt="chain"
                            layout="responsive"
                            objectFit="contain"
                            width={455}
                            height={460}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Chain;
