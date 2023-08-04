import Image from "next/image";
import {useEffect, useState} from "react";

const Hero = () => {

    const headingFirstArray = ["Arbitrum","Etherium"]
    const headingSecondArray = ["Moonbeam","Polygon"]
    var currentIndex=0
    const [index, setIndex] = useState(currentIndex)

    function toggle() {
        console.log(index)

        if (currentIndex == 0) {
            currentIndex=1
            setIndex(1)
        } else {
            currentIndex=0
            setIndex(0)
        }
        setTimeout(()=>toggle(), 1000)
    }

    useEffect(function () {
        toggle()
    },[])

    return (
        <section className="hero__area min-h-[768px] pb-[10px] xl:pb-0 bg-custom-black">
            <div className="wrapper">
                <div className="flex flex-col gap-[20px] pt-[150px] ">
                    <div className="relative w-full ">
                        <h1 className="mb-2 font-semibold text-[40px] leading-[38px] md:text-[48px] md:leading-[54px] overflow-hidden relative">
                            Deposit on <span
                            className={`text-custom-blue  transition-all  absolute slideUp`} >{headingFirstArray[index]}</span>
                        </h1>
                        <h1 className="mb-2 font-semibold text-[40px] leading-[38px] md:text-[48px] md:leading-[54px] overflow-hidden relative">
                            Borrow on <span  className={`text-custom-blue  transition-all  absolute slideUp`} >{headingSecondArray[index]}</span>

                        </h1>

                        <a
                            href="https://app.primeprotocol.xyz/"
                            className="mt-5 flex h-[40px] w-[122px] items-center justify-center font-semibold  text-[15px] rounded-xl leading-[18px] transition-all duration-150 bg-custom-blue hover:border-transparent hover:bg-custom-blue/75 hover:text-custom-white"
                            target="_blank"
                        >
                            Launch App
                        </a>

                    </div>

                    <div className="hero__cards flex-col gap-5 mt-5 flex md:flex-row md:gap-20">

                        <div className={'hero__card p-8 bg-card-bg rounded-xl flex-1 flex flex-col'}>
                            <p className={'font-semibold tracking-wider '}>
                                <span className={'font-bold'}>PRIME </span> is the first natively cross-chain prime
                                brokerage.
                            </p>
                            <p className="text-sm tracking-wide mt-3">Backed by the best</p>
                            <div className='flex flex-row mt-3 justify-between   h-10'>
                                <div className="w-24  relative">
                                    <Image src="/assets/images/jump_logo.png" alt="logo"
                                           layout="fill"
                                           className='absolute p-0 m-0 text-left'
                                           objectFit="contain"/>
                                </div>
                                <div className="w-80 relative">
                                    <Image src="/assets/images/framework_logo.png" alt="logo"
                                           layout="fill"
                                           className='absolute p-0 m-0'

                                           objectFit="contain"/>
                                </div>
                                <div className="w-[100px] relative">
                                    <Image src="/assets/images/arrington_capital_logo.png" alt="logo"
                                           layout="fill"
                                           className='absolute'
                                           objectFit="contain"/>
                                </div>
                            </div>
                        </div>
                        <div className={'hero__card p-8 bg-card-bg rounded-xl flex-1 flex flex-col'}>
                                <span className='font-semibold tracking-wider text-2xl'>$10,674,007.1</span>
                                <p className='text-sm text-white/75 mt-2'>of liquidity is locked in Prime across 6
                                    networks</p>
                                <div className='flex flex-row flex-wrap mt-3 justify-between gap-y-4  '>
                                    <div className="w-1/2 md:w-1/3  relative h-7 ">
                                        <Image src="/assets/images/arbitrum.png" alt="logo"
                                               layout="fill"
                                               className='absolute p-0 m-0 text-left'
                                               objectFit="cover"/>
                                    </div>
                                    <div className="w-1/2 md:w-1/3  relative h-7 ">

                                        <Image src="/assets/images/binance.png" alt="logo"
                                               layout="fill"
                                               className='absolute p-0 m-0'

                                               objectFit="scale-down"/>
                                    </div>
                                    <div className="w-1/2 md:w-1/3  relative h-7 ">


                                        <Image src="/assets/images/eth.png" alt="logo"
                                               layout="fill"
                                               className='absolute'
                                               objectFit="cover"/>
                                    </div>
                                    <div className="w-1/2 md:w-1/3  relative h-7 ">
                                        <Image src="/assets/images/moonbeam.png" alt="logo"
                                               layout="fill"
                                               className='absolute'
                                               objectFit="cover"/>
                                    </div>
                                    <div className="w-1/2 md:w-1/3  relative h-7 ">
                                        <Image src="/assets/images/ava.png" alt="logo"
                                               layout="fill"
                                               className='absolute'
                                               objectFit="scale-down"/>
                                    </div>
                                    <div className="w-1/2 md:w-1/3  relative h-7 ">
                                        <Image src="/assets/images/polygon_logo.png" alt="logo"
                                               layout="fill"
                                               className='absolute'
                                               objectFit="scale-down"/>
                                    </div>
                                </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
