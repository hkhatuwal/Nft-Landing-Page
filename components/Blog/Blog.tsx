import Image from "next/image";

const Blog = () => {
    return (
        <section className="bg-custom-white py-[50px] md:pt-[80px] md:pb-[100px]">
            <div className="wrapper">
                <div className="mx-auto grid w-full grid-cols-1 gap-[40px] md:max-w-[70%] md:gap-[60px] lg:max-w-full lg:grid-cols-2 lg:gap-y-[70px] lg:gap-x-[25px] xl:grid-cols-3 xl:gap-[25px] xl:gap-y-0">
                    {/* Single Item */}
                    <div>
                        <div className="relative h-[200px] md:h-[280px] xl:h-[234px]">
                            <Image
                                src="/assets/images/money.jpg"
                                alt="money"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>

                        <div className="mt-[30px]">
                            <h2 className="mb-[20px] text-[22px] font-bold leading-[28px] text-custom-black md:min-h-max lg:min-h-[84px]">
                                Introducing Money Markets on Prime Protocol
                            </h2>

                            <p className="text-custom-black lg:min-h-[140px] xl:min-h-[168px] 2xl:min-h-[140px]">
                                The Money Markets integration will allow Prime
                                users to borrow from other user deposits,
                                thereby generating real yield for depositors and
                                a wider selection of options for borrowers.
                            </p>

                            <a
                                href="https://medium.com/prime-protocol/introducing-money-markets-on-prime-protocol-dcabf6472b93"
                                className="mt-[30px] flex h-[47px] w-[200px] items-center justify-center bg-custom-blue text-[18px] font-light uppercase leading-[28px] text-custom-white lg:mt-[50px]"
                                target="_blank"
                            >
                                READ MORE
                            </a>
                        </div>
                    </div>
                    {/* Single Item */}

                    {/* Single Item */}
                    <div>
                        <div className="relative h-[200px] md:h-[280px] xl:h-[234px]">
                            <Image
                                src="/assets/images/polkadot.jpg"
                                alt="polkadot"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>

                        <div className="mt-[30px]">
                            <h2 className="mb-[20px] text-[22px] font-bold leading-[28px] text-custom-black md:min-h-max lg:min-h-[84px]">
                                Prime Protocol at Polkadot Decoded 2022
                            </h2>

                            <p className="text-custom-black lg:min-h-[140px] xl:min-h-[168px] 2xl:min-h-[140px]">
                                Prime's founder Colton Conley discusses the
                                current state of the decentralized finance and
                                how Prime will push the boundary forward for
                                DeFi.
                            </p>

                            <a
                                href="https://www.youtube.com/watch?v=JV3Ukd_fo5s"
                                className="mt-[30px] flex h-[47px] w-[200px] items-center justify-center bg-custom-blue text-[18px] font-light uppercase leading-[28px] text-custom-white lg:mt-[50px]"
                                target="_blank"
                            >
                                WATCH VIDEO
                            </a>
                        </div>
                    </div>
                    {/* Single Item */}

                    {/* Single Item */}
                    <div>
                        <div className="relative h-[200px] md:h-[280px] xl:h-[234px]">
                            <Image
                                src="/assets/images/universal.jpg"
                                alt="universal"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>

                        <div className="mt-[30px]">
                            <h2 className="mb-[20px] text-[22px] font-bold leading-[28px] text-custom-black md:min-h-max lg:min-h-[84px]">
                                Introducing Universal Access on Prime Protocol:
                                Originate a transaction on any chain!
                            </h2>

                            <p className="text-custom-black lg:min-h-[140px] xl:min-h-[168px] 2xl:min-h-[140px]">
                                Universal Access is our way of solidifying Prime
                                as the fastest solution for borrowing
                                cross-chain!
                            </p>

                            <a
                                href="https://medium.com/prime-protocol/introducing-universal-access-on-prime-protocol-originate-a-transaction-on-any-chain-f73137d3ab7c"
                                className="mt-[30px] flex h-[47px] w-[200px] items-center justify-center bg-custom-blue text-[18px] font-light uppercase leading-[28px] text-custom-white lg:mt-[50px]"
                                target="_blank"
                            >
                                READ MORE
                            </a>
                        </div>
                    </div>
                    {/* Single Item */}
                </div>
            </div>
        </section>
    );
};

export default Blog;
