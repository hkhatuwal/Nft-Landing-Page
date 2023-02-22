const Join = () => {
    return (
        <section className="bg-custom-blue py-[50px] md:py-[120px]">
            <div className="wrapper">
                <div className="mx-auto max-w-[1095px] text-center">
                    <h2 className="mb-[25px] text-[40px] leading-[46px] md:text-[48px] md:leading-[54px]">
                        Join the Prime community
                    </h2>
                    <p>
                        We're building Prime for the entire DeFi community, and
                        we want you to help build this experience with us. Click
                        the links below to join the community and stay up to
                        date with all things Prime!
                    </p>

                    <ul className="mt-[100px] flex items-center justify-center gap-[30px]">
                        <li>
                            <a href="#" className="h-[55px] w-auto">
                                <img
                                    src="/assets/images/twitter.png"
                                    alt="twitter"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="h-[55px] w-auto">
                                <img
                                    src="/assets/images/discord.png"
                                    alt="discord"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="h-[55px] w-auto">
                                <img
                                    src="/assets/images/telegram.png"
                                    alt="telegram"
                                />
                            </a>
                        </li>

                        <li>
                            <a href="#" className="h-[55px] w-auto">
                                <img
                                    src="/assets/images/medium.png"
                                    alt="medium"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="h-[55px] w-auto">
                                <img
                                    src="/assets/images/youtube.png"
                                    alt="youtube"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="h-[55px] w-auto">
                                <img
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
