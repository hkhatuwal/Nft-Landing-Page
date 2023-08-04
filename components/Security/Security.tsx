import Image from "next/image";

const Security = () => {
    return (
        <section id="security" className="py-[60px] md:py-[90px]">
            <div className="wrapper">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className={'hero__card p-10  rounded-xl   flex flex-col'}>
                        <p className={' tracking-wider text-3xl md:text-5xl leading-[50px] '}>
                            Superior Security Exceptional Team Unrivaled Partners
                        </p>

                    </div>
                    <div className={'hero__card    p-10 bg-card-bg2 rounded-3xl  flex flex-col justify-start items-start'}>
                        <Image src="/assets/images/sheild.png" width={50} height={50} objectFit={"contain"}/>
                        <p className={'font-bold tracking-wider text-3xl mt-2 '}>
                            Third-Party Audited Security
                        </p>
                        <p className="text-sm tracking-wide mt-3">The Prime Protocol's security has been audited by some
                            of the top security companies in crypto.</p>
                        <div className="w-full  flex justify-center mt-4 items-center ">
                            <div className='w-1/3  relative h-10 '>

                            <Image src="/assets/images/jump_logo.png" alt="logo"
                                       layout="fill"
                                       className='absolute p-0 m-0 text-left'
                                       objectFit="contain"/>
                            </div>
                            <div className='w-1/3  relative h-10 '>

                            <Image src="/assets/images/framework_logo.png" alt="logo"
                                       layout="fill"
                                       className='absolute p-0 m-0'

                                       objectFit="contain"/>
                            </div>
                            <div className='w-1/3  relative h-10 '>

                            <Image src="/assets/images/arrington_capital_logo.png" alt="logo"
                                       layout="fill"
                                       className='absolute'
                                       objectFit="contain"/>
                            </div>
                        </div>
                    </div>
                    <div className={'hero__card   p-10 bg-card-bg2 rounded-3xl  flex flex-col justify-start items-start'}>

                        <Image src="/assets/images/partner_ship.png" width={50} height={50} objectFit={"contain"}/>
                        <p className={'font-bold tracking-wider text-3xl mt-2 '}>
                            High-Quality Partnerships
                        </p>
                        <p className="text-sm tracking-wide mt-3">We have forged strategic partnerships with industry-leading crypto projects like Axelar, Moonbeam, and Chainlink.</p>

                        <div className="w-full  flex justify-center mt-4 items-center ">

                            <div className='w-1/3  relative h-10 '>
                                <Image src="/assets/images/moonbeam.png" objectFit={'contain'} layout={"fill"}/>
                            </div>
                            <div className='w-1/3  relative h-10 '>
                                <Image src="/assets/images/axelar.png" objectFit={'contain'} layout={"fill"}/>
                            </div>
                            <div className='w-1/3  relative h-10'>
                                <Image src="/assets/images/chain_link.png" objectFit={'contain'} layout={"fill"}/>
                            </div>

                        </div>

                    </div>
                    <div className={'hero__card    p-10 bg-card-bg2 rounded-3xl  flex flex-col justify-start items-start'}>

                        <Image src="/assets/images/team.png" width={50} height={50} objectFit={"contain"}/>
                        <p className={'font-bold tracking-wider text-3xl mt-2 '}>
                            Experienced Team
                        </p>
                        <p className="text-sm tracking-wide mt-3">Our team brings a wealth of expertise from renowned companies and institutions such as Citadel, Amazon, Netflix, and Yale.</p>

                        <div className="w-full  flex justify-center mt-4 items-center ">

                            <div className='w-1/3  relative h-10 '>
                                <Image src="/assets/images/citadel.png" objectFit={'contain'} layout={"fill"}/>
                            </div>
                            <div className='w-1/3  relative h-10 '>
                                <Image src="/assets/images/yale.png" objectFit={'contain'} layout={"fill"}/>
                            </div>
                            <div className='w-1/3  relative h-10'>
                                <Image src="/assets/images/amazon.png" objectFit={'contain'} layout={"fill"}/>
                            </div>
                            <div className='w-1/3  relative h-10'>
                                <Image src="/assets/images/netflix.png" objectFit={'contain'} layout={"fill"}/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Security;
