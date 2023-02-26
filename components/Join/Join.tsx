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
                            <a href="https://tr.ee/Tf2l0OVA7e" className="h-[55px] w-auto" target="_blank">
                                <img
                                    className="object-contain"
                                    src="/assets/images/twitter.png"
                                    alt="twitter"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://tr.ee/zWAFzgwy-Q" className="h-[55px] w-auto" target="_blank">
                                <img
                                    className="object-contain"
                                    src="/assets/images/discord.png"
                                    alt="discord"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://linktr.ee/primeprotocol" className="h-[55px] w-auto" target="_blank">
                                <img
                                    className="object-contain"
                                    src="/assets/images/telegram.png"
                                    alt="telegram"
                                />
                            </a>
                        </li>

                        <li>
                            <a href="https://tr.ee/0olDv32zZ2" className="h-[55px] w-auto" target="_blank">
                                <img
                                    className="object-contain"
                                    src="/assets/images/medium.png"
                                    alt="medium"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://tr.ee/jVMICCaI5k" className="h-[55px] w-auto" target="_blank">
                                <img
                                    className="object-contain"
                                    src="/assets/images/youtube.png"
                                    alt="youtube"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/company/primeprotocol/" className="h-[55px] w-auto" target="_blank">
                                <img
                                    className="object-contain"
                                    src="/assets/images/linkedin.png"
                                    alt="linkedin"
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
