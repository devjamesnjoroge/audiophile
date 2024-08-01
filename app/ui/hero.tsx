import Link from "next/link";


const Hero = () => {
    return(
        <>
        <section className="hero h-[70vh] md:h-[55vh] lg:h-[85vh] relative px-6 md:px-28 bg-zinc-900">
            <div className="absolute inset-0 bg-[url('/hero-m.png')] lg:bg-[url('/hero.png')] bg-contain bg-no-repeat bg-center"></div>
            <div className="absolute top-0 left-0 h-full gap-6 px-12 lg:px-28 text-white flex flex-col justify-center text-center lg:text-left items-center lg:items-start">
            <h4 className="text-text-grey uppercase tracking-[.5em]">new product</h4>
            <h1 className="uppercase text-4xl lg:text-6xl font-bold tracking-widest lg:w-1/2">xx99 Mark II Headphones</h1>
            <p className="text-text-grey w-4/5 lg:w-2/5">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
            <Link href="headphones/xx99_mark_ii" className="btn bg-primary px-8 py-4 uppercase font-bold self-center lg:self-start">
                see product
            </Link>
            </div>
        </section>
        </>

    )
}

export default Hero;