import Image from 'next/image';
import Link from 'next/link';

const Thumbs = () => {
  return (
    <div className="w-full flex flex-col items-center lg:flex-row justify-evenly gap-8 lg:gap-12 py-20 lg:py-[8rem] bg-white">
      <div className="roworcol bg-light-grey px-8 py-8 lg:px-12 lg:py-12 relative rounded-lg flex flex-col items-center text-center w-full max-w-md lg:max-w-lg">
        <Image
          className="absolute top-[-30%] left-1/2 transform -translate-x-1/2"
          width={178}
          height={172}
          src="/thumbnail-headphone.png"
          alt="thumbnail headphone"
        />
        <div className="relative z-10 flex flex-col items-center text-center">
          <h2 className="uppercase font-bold text-lg lg:text-xl mt-12 mb-4">headphones</h2>
          <Link className="uppercase font-bold text-dark-grey text-sm lg:text-base mb-2" href="/">
            shop <span className="text-primary">{'>'}</span>
          </Link>
        </div>
      </div>
      <div className="roworcol mt-16 lg:mt-0 bg-light-grey px-8 py-8 lg:px-12 lg:py-12 relative rounded-lg flex flex-col items-center text-center w-full max-w-md lg:max-w-lg">
        <Image
          className="absolute top-[-30%] left-1/2 transform -translate-x-1/2"
          width={178}
          height={154}
          src="/thumbnail-speaker.png"
          alt="thumbnail speaker"
        />
        <div className="relative z-10 flex flex-col items-center text-center">
          <h2 className="uppercase font-bold text-lg lg:text-xl mt-12 mb-4">earphones</h2>
          <Link className="uppercase font-bold text-dark-grey text-sm lg:text-base mb-2" href="/">
            shop <span className="text-primary">{'>'}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Thumbs;
