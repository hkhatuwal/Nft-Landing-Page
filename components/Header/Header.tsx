const Header = () => {
    return (
        <header className="absolute top-0 left-0 z-30 w-full">
            <div className="wrapper">
                <nav className="flex items-center justify-between pt-[20px]">
                    <a href="#" className="inline-block h-[96px] w-[228px]">
                        <img src="/assets/images/logo.png" alt="logo" />
                    </a>

                    <ul className="flex items-center gap-[40px]">
                        <li>
                            <a
                                href="#"
                                className="text-[18px] font-bold leading-[18px]"
                            >
                                Backers
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="text-[18px] font-bold leading-[18px]"
                            >
                                Security
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="text-[18px] font-bold leading-[18px]"
                            >
                                Community
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="text-[18px] font-bold leading-[18px]"
                            >
                                Docs
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="flex h-[43px] w-[122px] items-center justify-center border-2 border-custom-white text-[18px] font-bold leading-[18px] transition-all duration-150 hover:border-transparent hover:bg-custom-blue hover:text-custom-white"
                            >
                                App
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
