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
            <Link className="bg-secondary text-white font-bold px-8 py-3 text-sm uppercase" href=''>
                see product
            </Link>
            </div>
        </div>
        </div>
    )
}

export default SpeakerPromo;