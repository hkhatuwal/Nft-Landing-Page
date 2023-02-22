const Backers = () => {
    return (
        <section className="py-[50px] md:pt-[100px] md:pb-[70px]">
            <div className="wrapper">
                <div className="flex flex-col gap-[40px] md:flex-row md:items-center md:gap-[80px]">
                    {/* Single Item */}
                    <div className="flex-1">
                        <div className="border-b-[14px] border-custom-blue">
                            <h2 className="pb-[10px] text-[40px] leading-[46px] md:text-[48px] md:leading-[54px]">
                                Backers
                            </h2>
                        </div>

                        <div className="mx-auto mt-[70px] h-[370px] w-[447px]">
                            <img
                                className="object-contain"
                                src="/assets/images/backers.png"
                                alt="backers"
                            />
                        </div>
                    </div>
                    {/* Single Item */}

                    {/* Single Item */}
                    <div className="flex-1">
                        <div className="border-b-[14px] border-custom-blue">
                            <h2 className="pb-[10px] text-[40px] leading-[46px] md:text-[48px] md:leading-[54px]">
                                Collaborators
                            </h2>
                        </div>

                        <div className="mx-auto mt-[70px] h-[364px] w-[452px]">
                            <img
                                className="object-contain"
                                src="/assets/images/collaborators.png"
                                alt="collaborators"
                            />
                        </div>
                    </div>
                    {/* Single Item */}
                </div>
            </div>
        </section>
    );
};

export default Backers;
