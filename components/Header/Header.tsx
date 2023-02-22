import { useState } from "react";

const Header = () => {
    const [navShow, setNavShow] = useState(false);

    console.log(navShow);

    return (
        <header
            className={`${
                navShow && "show-mobile-nav"
            }  absolute top-0 left-0 z-30 w-full`}
        >
            <div className="wrapper">
                <nav className="relative flex flex-col pt-[20px] lg:flex-row lg:items-center lg:justify-between">
                    <a
                        href="#"
                        className="inline-block h-[60px] w-fit md:h-[96px] md:w-[228px]"
                    >
                        <img
                            className="object-contain"
                            src="/assets/images/logo.png"
                            alt="logo"
                        />
                    </a>

                    <ul
                        className={`${
                            navShow && "mt-[30px] !flex flex-col gap-[30px]"
                        } hidden md:gap-[40px] lg:mt-0 lg:flex lg:flex-row lg:items-center`}
                    >
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

                    <button
                        onClick={() => setNavShow((prev) => !prev)}
                        className="absolute top-[37px] right-0 h-[25px] w-[25px] border-0 bg-transparent md:top-[53px] md:h-[30px] md:w-[30px] lg:hidden"
                    >
                        {navShow ? (
                            <img src="/assets/images/close.png" alt="close" />
                        ) : (
                            <img
                                src="/assets/images/hamburger.png"
                                alt="hamburger"
                            />
                        )}
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
