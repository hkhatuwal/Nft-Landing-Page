const Blog = () => {
    return (
        <section className="bg-custom-white py-[50px] md:pt-[80px] md:pb-[100px]">
            <div className="wrapper">
                <div className="grid grid-cols-1 gap-[25px] lg:grid-cols-3">
                    {/* Single Item */}
                    <div>
                        <div className="h-[234px]">
                            <img src="/assets/images/money.jpg" alt="money" />
                        </div>

                        <div className="mt-[30px]">
                            <h2 className="mb-[20px] min-h-[84px] text-[22px] font-bold leading-[28px] text-custom-black">
                                Introducing Money Markets on Prime Protocol
                            </h2>

                            <p className="text-custom-black lg:min-h-[196px] xl:min-h-[140px]">
                                The Money Markets integration will allow Prime
                                users to borrow from other user deposits,
                                thereby generating real yield for depositors and
                                a wider selection of options for borrowers.
                            </p>

                            <a
                                href="#"
                                className="mt-[50px] flex h-[47px] w-[200px] items-center justify-center bg-custom-blue text-[18px] font-light uppercase leading-[28px] text-custom-white"
                            >
                                READ MORE
                            </a>
                        </div>
                    </div>
                    {/* Single Item */}

                    {/* Single Item */}
                    <div>
                        <div className="h-[234px]">
                            <img
                                src="/assets/images/polkadot.jpg"
                                alt="polkadot"
                            />
                        </div>

                        <div className="mt-[30px]">
                            <h2 className="mb-[20px] min-h-[84px] text-[22px] font-bold leading-[28px] text-custom-black">
                                Prime Protocol at Polkadot Decoded 2022
                            </h2>

                            <p className="text-custom-black lg:min-h-[196px] xl:min-h-[140px]">
                                Prime's founder Colton Conley discusses the
                                current state of the decentralized finance and
                                how Prime will push the boundary forward for
                                DeFi.
                            </p>

                            <a
                                href="#"
                                className="mt-[50px] flex h-[47px] w-[200px] items-center justify-center bg-custom-blue text-[18px] font-light uppercase leading-[28px] text-custom-white"
                            >
                                WATCH VIDEO
                            </a>
                        </div>
                    </div>
                    {/* Single Item */}

                    {/* Single Item */}
                    <div>
                        <div className="h-[234px]">
                            <img
                                src="/assets/images/universal.jpg"
                                alt="universal"
                            />
                        </div>

                        <div className="mt-[30px]">
                            <h2 className="mb-[20px] min-h-[84px] text-[22px] font-bold leading-[28px] text-custom-black">
                                Introducing Universal Access on Prime Protocol:
                                Originate a transaction on any chain!
                            </h2>

                            <p className="text-custom-black lg:min-h-[196px] xl:min-h-[140px]">
                                Universal Access is our way of solidifying Prime
                                as the fastest solution for borrowing
                                cross-chain!
                            </p>

                            <a
                                href="#"
                                className="mt-[50px] flex h-[47px] w-[200px] items-center justify-center bg-custom-blue text-[18px] font-light uppercase leading-[28px] text-custom-white"
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
