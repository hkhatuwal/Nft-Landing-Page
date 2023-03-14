import Image from "next/image";

const Join = () => {
    return (
        <section className="bg-custom-blue py-[50px] md:py-[120px]">
            <div className="wrapper">
                <div className="mx-auto max-w-[1095px] text-center">
                    <h2 className="mb-[25px] text-[30px] leading-[38px] md:text-[48px] md:leading-[54px]">
                        Join the Prime community
                        </h2>
                    <p>
                        We're building Prime for the entire DeFi community, and
                        we want you to help build this experience with us. Click
                        the links below to join the community and stay up to
                        date with all things Prime!
                    </p>

                    <ul className="mt-[30px] flex items-center justify-center gap-[20px] md:mt-[60px] md:gap-[30px] lg:mt-[100px]">
                        <li>
                            <a
                                href="https://tr.ee/Tf2l0OVA7e"
                                className="relative h-[40px] w-[40px] md:h-[55px] md:w-[58px]"
                                target="_blank"
                            >
                                <Image
                                    src="/assets/images/twitter.png"
                                    alt="twitter"
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://tr.ee/zWAFzgwy-Q"
                                className="relative h-[40px] w-[40px] md:h-[55px] md:w-[58px]"
                                target="_blank"
                            >
                                <Image
                                    src="/assets/images/discord.png"
                                    alt="discord"
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://linktr.ee/primeprotocol"
                                className="relative h-[40px] w-[40px] md:h-[55px] md:w-[58px]"
                                target="_blank"
                            >
                                <Image
                                    src="/assets/images/telegram.png"
                                    alt="telegram"
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://tr.ee/0olDv32zZ2"
                                className="relative h-[40px] w-[40px] md:h-[55px] md:w-[87px]"
                                target="_blank"
                            >
                                <Image
                                    src="/assets/images/medium.png"
                                    alt="medium"
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://tr.ee/jVMICCaI5k"
                                className="relative h-[40px] w-[40px] md:h-[55px] md:w-[70px]"
                                target="_blank"
                            >
                                <Image
                                    src="/assets/images/youtube.png"
                                    alt="youtube"
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/company/primeprotocol/"
                                className="relative h-[40px] w-[40px] md:h-[55px] md:w-[68px]"
                                target="_blank"
                            >
                                <Image
                                    src="/assets/images/linkedin.png"
                                    alt="linkedin"
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Join;
