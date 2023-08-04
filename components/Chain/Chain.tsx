import Image from "next/image";

const Chain = () => {
    return (
        <section className="  md:pb-[75px]">
            <div className="wrapper">
                <div className=" bg-custom-blue  p-10 rounded-2xl flex flex-row gap-[40px] lg:flex-row lg:items-center xl:gap-[80px] xl:pr-[80px]">
                    <div className="flex flex-1 flex-col gap-5 md:flex-row md:gap-[50px]">
                        {/* Single Item */}
                        <div>
                            <Image
                                src="/assets/images/chain.gif"
                                alt="chain"
                                layout="responsive"
                                objectFit="contain"
                                width={250}
                                height={250}
                            />
                            <h2 className="mb-1 font-semibold mt-5 text-[22px] leading-[28px] md:text-[30px] md:leading-[36px]">
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
                            <Image
                                src="/assets/images/graph.gif"
                                alt="chain"
                                layout="responsive"
                                objectFit="contain"
                                width={250}
                                height={250}
                            />
                            <h2 className="mb-1 mt-3 font-semibold text-[22px] leading-[28px] md:text-[30px] md:leading-[36px]">
                               One Line of Credit
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
                            <Image
                                src="/assets/images/uni_access.gif"
                                alt="chain"
                                layout="responsive"
                                objectFit="contain"
                                width={300}
                                height={300}
                            />
                            <h2 className="mb-1 mt-3 text-[22px] leading-[28px] md:text-[30px] md:leading-[36px]">
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


                </div>
            </div>
        </section>
    );
};

export default Chain;
