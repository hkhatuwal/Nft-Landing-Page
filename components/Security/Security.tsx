const Security = () => {
    return (
        <section id="security" className="py-[60px] md:py-[90px]">
            <div className="wrapper">
                <div className="flex flex-col gap-[60px] md:gap-[80px] xl:flex-row xl:items-start xl:gap-[50px]">
                    {/* Single Item */}
                    <div className="flex-1">
                        <div className="xl:max-w-[280px]">
                            <div className="mb-5 xl:min-h-[108px]">
                                <h2 className="text-[30px] leading-[38px] md:text-[48px] md:leading-[54px] xl:max-w-[215px]">
                                Security & Audits
                                </h2>
                            </div>

                            <p className="xl:min-h-[140px]">
                                The Prime Protocol's security has been audited
                                by some of the top security companies in crypto.
                            </p>
                        </div>
                    </div>
                    {/* Single Item */}

                    {/* Single Item */}
                    <div className="flex-1">
                        <div className="">
                            <div className="mb-5 xl:min-h-[108px]">
                                <img
                                    className="ml-0 h-[50px] w-[160px] object-contain xl:mx-auto"
                                    src="/assets/images/veridise.png"
                                    alt="veridise"
                                />
                            </div>

                            <p className="xl:min-h-[108px]">
                                Veridise is a blockchain security company that
                                provides audits and software analysis tools for
                                all layers of the blockchain ecosystem.
                            </p>

                            <a href="#" className="mt-[25px] underline">
                                Read the report
                            </a>
                        </div>
                    </div>
                    {/* Single Item */}

                    {/* Single Item */}
                    <div className="flex-1">
                        <div className="">
                            <div className="mb-5 xl:min-h-[108px]">
                                <img
                                    className="ml-0 h-[99px] w-[163px] object-contain xl:mx-auto"
                                    src="/assets/images/ackee.png"
                                    alt="ackee"
                                />
                            </div>

                            <p className="xl:min-h-[108px]">
                                Ackee Blockchain is a team of auditors and white
                                hat hackers who perform security audits and
                                assessments.
                            </p>

                            <a href="#" className="mt-[25px] underline">
                                Read the report
                            </a>
                        </div>
                    </div>
                    {/* Single Item */}
                </div>
            </div>
        </section>
    );
};

export default Security;
