import Image from "next/image";

const Hero = () => {
    return(
        <>
            <section className="hero bg-zinc-900 relative -z-10">
                <div className="flex justify-center items-center w-full bg-bg-dark-grey">
                <Image className="hidden lg:block" src={"/hero.png"} width={2880} height={1458} alt="hero img"/>
                <Image className="lg:hidden block h-auto w-96" src={"/hero-m.png"} width={750} height={1200} alt="hero img"/>
                </div>
                <div className="container absolute top-0 left-0 h-screen gap-6 px-12 lg:px-28 text-white flex flex-col justify-center text-center lg:text-left items-center lg:items-start flex-grow flex-wrap">
                <h4 className="text-text-grey uppercase tracking-[.5em]">new product</h4>
                <h1 className="uppercase text-4xl lg:text-6xl font-bold tracking-widest lg:w-1/2">xx99 Mark II Headphones</h1>
                <p className="text-text-grey w-4/5 lg:w-2/5">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                <button className="btn bg-primary px-8 py-4 uppercase font-bold self-center lg:self-start">
                    see product
                </button>
            </div>
            </section>
        </>
    )
}

export default Hero;