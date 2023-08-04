import Image from "next/image";

const Blog = () => {
    return (
        <section className="bg-custom-white py-[50px] md:pt-[80px] md:pb-[100px]">
            <div className="wrapper">
                <h2 className={'text-custom-black font-bold text-4xl'}>Media and Insights</h2>
                <div className="mx-auto mt-5 grid w-full grid-cols-1 gap-x-2 gap-[40px] md:max-w-[70%] md:gap-[60px] lg:max-w-full lg:grid-cols-2 lg:gap-y-[70px] lg:gap-x-[25px] xl:grid-cols-3 xl:gap-[25px] xl:gap-y-5">
                    {/* Single Item */}
                    <div className="bg-card-bg-light rounded-3xl ">
                        <div className="relative h-[200px] md:h-[280px] xl:h-[234px]">
                            <Image
                                src="/assets/images/money.jpg"

                                alt="money"
                                className={'rounded-t-3xl'}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>

                        <div className=" p-5">
                            <h2 className="mb-[20px]  text-[22px] leading-[28px] text-custom-black/50 ">
                               May 9,2023
                            </h2>

                            <p className="text-custom-black text-xl leading-6 lg:min-h-[140px] xl:min-h-[168px] 2xl:min-h-[140px]">
                                The Money Markets integration will allow Prime
                                users to borrow from other user deposits,
                                thereby generating real yield for depositors and
                                a wider selection of options for borrowers.
                            </p>

                            <a
                                href="https://medium.com/prime-protocol/introducing-money-markets-on-prime-protocol-dcabf6472b93"
                                target="_blank"
                                className={'mt-2'}
                            >
                                <Image src='/assets/images/play.png' width={50} height={50}/>

                            </a>
                        </div>
                    </div>
                    {/* Single Item */}                    {/* Single Item */}
                    <div className="bg-card-bg-light rounded-3xl ">
                        <div className="relative h-[200px] md:h-[280px] xl:h-[234px]">
                            <Image
                                src="/assets/images/money.jpg"

                                alt="money"
                                className={'rounded-t-3xl'}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>

                        <div className=" p-5">
                            <h2 className="mb-[20px]  text-[22px] leading-[28px] text-custom-black/50 ">
                               May 9,2023
                            </h2>

                            <p className="text-custom-black text-xl leading-6 lg:min-h-[140px] xl:min-h-[168px] 2xl:min-h-[140px]">
                                The Money Markets integration will allow Prime
                                users to borrow from other user deposits,
                                thereby generating real yield for depositors and
                                a wider selection of options for borrowers.
                            </p>

                            <a
                                href="https://medium.com/prime-protocol/introducing-money-markets-on-prime-protocol-dcabf6472b93"
                                target="_blank"
                                className={'mt-2'}
                            >
                                <Image src='/assets/images/play.png' width={50} height={50}/>

                            </a>
                        </div>
                    </div>
                    {/* Single Item */}                    {/* Single Item */}
                    <div className="bg-card-bg-light rounded-3xl ">
                        <div className="relative h-[200px] md:h-[280px] xl:h-[234px]">
                            <Image
                                src="/assets/images/money.jpg"

                                alt="money"
                                className={'rounded-t-3xl'}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>

                        <div className=" p-5">
                            <h2 className="mb-[20px]  text-[22px] leading-[28px] text-custom-black/50 ">
                               May 9,2023
                            </h2>

                            <p className="text-custom-black text-xl leading-6 lg:min-h-[140px] xl:min-h-[168px] 2xl:min-h-[140px]">
                                The Money Markets integration will allow Prime
                                users to borrow from other user deposits,
                                thereby generating real yield for depositors and
                                a wider selection of options for borrowers.
                            </p>

                            <a
                                href="https://medium.com/prime-protocol/introducing-money-markets-on-prime-protocol-dcabf6472b93"
                                target="_blank"
                                className={'mt-2'}
                            >
                                <Image src='/assets/images/play.png' width={50} height={50}/>

                            </a>
                        </div>
                    </div>
                    {/* Single Item */}                    {/* Single Item */}
                    <div className="bg-card-bg-light rounded-3xl ">
                        <div className="relative h-[200px] md:h-[280px] xl:h-[234px]">
                            <Image
                                src="/assets/images/money.jpg"

                                alt="money"
                                className={'rounded-t-3xl'}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>

                        <div className=" p-5">
                            <h2 className="mb-[20px]  text-[22px] leading-[28px] text-custom-black/50 ">
                               May 9,2023
                            </h2>

                            <p className="text-custom-black text-xl leading-6 lg:min-h-[140px] xl:min-h-[168px] 2xl:min-h-[140px]">
                                The Money Markets integration will allow Prime
                                users to borrow from other user deposits,
                                thereby generating real yield for depositors and
                                a wider selection of options for borrowers.
                            </p>

                            <a
                                href="https://medium.com/prime-protocol/introducing-money-markets-on-prime-protocol-dcabf6472b93"
                                target="_blank"
                                className={'mt-2'}
                            >
                                <Image src='/assets/images/play.png' width={50} height={50}/>

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
