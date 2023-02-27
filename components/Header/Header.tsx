import { useState } from "react";
import Image from "next/image";

const Header = () => {
    const [navShow, setNavShow] = useState(false);

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
                        className="relative inline-block h-[60px] w-[142px] md:h-[96px] md:w-[228px]"
                    >
                        <Image
                            src="/assets/images/logo.png"
                            alt="logo"
                            layout="fill"
                            objectFit="contain"
                        />
                    </a>

                    <ul
                        className={`${
                            navShow && "mt-[30px] !flex flex-col gap-[30px]"
                        } hidden md:gap-[40px] lg:mt-0 lg:flex lg:flex-row lg:items-center`}
                    >
                        <li>
                            <a
                                href="#backers"
                                className="text-[18px] font-bold leading-[18px]"
                            >
                                Backers
                            </a>
                        </li>

                        <li>
                            <a
                                href="#security"
                                className="text-[18px] font-bold leading-[18px]"
                            >
                                Security
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://linktr.ee/primeprotocol"
                                className="text-[18px] font-bold leading-[18px]"
                                target="_blank"
                            >
                                Community
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://docs.primeprotocol.xyz/"
                                className="text-[18px] font-bold leading-[18px]"
                                target="_blank"
                            >
                                Docs
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://app.primeprotocol.xyz/"
                                className="flex h-[43px] w-[122px] items-center justify-center border-2 border-custom-white text-[18px] font-bold leading-[18px] transition-all duration-150 hover:border-transparent hover:bg-custom-blue hover:text-custom-white"
                                target="_blank"
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
                            <Image
                                src="/assets/images/close.png"
                                alt="close"
                                layout="fill"
                            />
                        ) : (
                            <Image
                                src="/assets/images/hamburger.png"
                                alt="hamburger"
                                layout="fill"
                            />
                        )}
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
