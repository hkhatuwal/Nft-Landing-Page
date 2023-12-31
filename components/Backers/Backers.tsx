import Image from "next/image";

const Backers = () => {
    return (
        <section id="backers" className="py-[50px] md:pt-[100px] md:pb-[70px]">
            <div className="wrapper">
                <div className="flex flex-col gap-[60px] lg:flex-row lg:items-center lg:gap-[100px]">
                    {/* Single Item */}
                    <div className="flex-1">
                        <div className="border-b-[6px] border-custom-blue md:border-b-[14px]">
                            <h2 className="pb-[10px] text-[32px] leading-[38px] md:text-[48px] md:leading-[54px]">
                                Backers
                            </h2>
                        </div>

                        <div className="relative mt-[40px] h-[277px] md:h-[370px] md:w-[447px] lg:mx-auto lg:mt-[70px]">
                            <Image
                                src="/assets/images/backers.png"
                                alt="backers"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                    </div>
                    {/* Single Item */}

                    {/* Single Item */}
                    <div className="flex-1">
                        <div className="border-b-[6px] border-custom-blue md:border-b-[14px]">
                            <h2 className="pb-[10px] text-[32px] leading-[38px] md:text-[48px] md:leading-[54px]">
                                Collaborators
                            </h2>
                        </div>

                        <div className="relative mt-[40px] h-[270px] md:h-[364px] md:w-[452px] lg:mx-auto lg:mt-[70px]">
                            <Image
                                src="/assets/images/collaborators.png"
                                alt="collaborators"
                                layout="fill"
                                objectFit="contain"
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
