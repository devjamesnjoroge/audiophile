import Image from "next/image";
import Link from "next/link";

const SpeakerPromo = () => {
    return(
        <div className="p-8 lg:px-28 bg-white">
        <div className="h-auto lg:h-[85vh] bg-primary relative w-full rounded-lg">
            <div className="absolute lg:left-[-15%] top-0 h-[85vh] overflow-hidden">
            <Image src='/pattern-circles.svg' width={944} height={944} alt='pattern-circles svg' />
            </div>
            <div className="flex flex-col lg:flex-row flex-wrap justify-between items-center px-8 md:px-28 lg:px-24 py-[5rem] pt-8 lg:pt-24 h-full gap-12">
            <div className="flex-1 flex justify-center items-center h-auto lg:h-full w-full lg:w-auto max-w-xs lg:max-w-none px-16">
                <Image className="h-auto lg:h-full w-full lg:w-auto object-contain" src='/speaker.png' width={944} height={944} alt="speaker" />
            </div>
            <div className="flex-1 flex flex-col justify-center lg:justify-start items-center lg:items-start h-auto lg:h-full md:gap-8 ms-0 lg:ms-[6rem] text-center lg:text-left">
                <h2 className="text-3xl lg:text-6xl font-bold text-white uppercase">Zx9 speaker</h2>
                <p className="text-light-grey mt-8 mb-4 md:mt-0 md:mb-0">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                <Link className="bg-secondary text-white font-bold px-8 py-3 text-sm uppercase" href=''>
                see product
                </Link>
            </div>
            </div>
        </div>
        <div className="pt-24">
            <div className="cardpromo h-[50vh] w-full bg-[url('/speaker-seven.png')] bg-cover bg-center rounded-lg ps-24 pt-28">
            <h2 className="mb-8 text-4xl uppercase font-bold text-secondary">zx7 Speaker</h2>
            <Link className="bg-grey text-secondary border-secondary border-2 font-bold px-8 py-3 text-sm uppercase" href=''>
                see product
            </Link>
            </div>
        </div>
        <div className="pt-24 flex flex-col lg:flex-row gap-12">
            <Image 
                className="w-full lg:w-1/2 rounded-lg" 
                src='/earbuds.png' 
                alt='earbuds' 
                height={540} 
                width={320} 
            />
            <div className="cardpromo w-full lg:w-1/2 bg-medium-grey rounded-lg lg:pl-24 lg:py-24 py-12 justify-center p-6">
                <h2 className="mb-8 text-4xl uppercase font-bold text-secondary">Yx1 earphones</h2>
                <Link 
                    className="inline-block flex-start bg-medium-grey text-secondary border-secondary border-2 font-bold px-8 py-3 text-sm uppercase" 
                    href=''
                >
                    see product
                </Link>
            </div>
        </div>
        <div className="info flex flex-col lg:flex-row gap-12 items-center lg:items-center py-24">
            <div className="rows flex-1 lg:pr-12 flex flex-col justify-center">
                <h2 className="text-[2rem] lg:text-[3rem] font-bold text-secondary mb-4 text-center lg:text-left uppercase">
                    Bringing you the <span className="text-primary">best</span> audio gear
                </h2>
                <p className=" leading-relaxed text-center lg:text-left text-dark-grey">
                    Located at the heart of New York, Audiophile is the premier store for high-end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                </p>
            </div>
            <div className="rows flex-1 flex justify-center lg:justify-end">
                <Image src='/best-gear.png' width={540} height={588} alt='best gear' className="w-full rounded-lg h-auto object-cover"/>
            </div>
        </div>


        </div>
    )
}

export default SpeakerPromo;  