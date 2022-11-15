import HeroVideoMP4 from '../../assets/Aimm dribbble full.mp4';
import HeroVideoWebm from '../../assets/Aimm dribbble ful_vp9.webm';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline/index';

export default function HeroSection() {
  return (
    <div
      id="herosection"
      className="relative overflow-hidden bg-white lg:bg-opacity-100 bg-opacity-30 pb-4 lg:min-h-[calc(100vh-5.8rem)] "
    >
      <div className="mx-auto lg:max-w-7xl">
        <div className="relative z-10 rounded-lg shadow-lg md:shadow-none md:rounded-none bg-white lg:bg-opacity-100 bg-opacity-50 px-3 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-20 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 p-10">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Turing Ideas to Reality</span>
              </h1>
              <p className="text-base text-gray-500 sm:mx-auto mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                We specialize in fast yet stunning <b className="text-gray-600 underline underline-offset-2">websites</b>,{' '}
                <b className="text-gray-600 underline underline-offset-2">custom softwares</b> and optimized{' '}
                <b className="text-gray-600 underline underline-offset-2">mobile apps</b> with seamless user experience for your
                customers
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#contact"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-zinc-900 px-8 py-3 text-base font-medium text-white hover:bg-zinc-700 md:py-4 md:px-10 md:text-lg"
                  >
                    Consult us for free
                    <ArrowTopRightOnSquareIcon className="h-6 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="absolute lg:inset-y-0 lg:right-0 lg:w-1/2 inset-0 lg:inset-x-auto lg:z-0 z-[-1]">
        <video
          className="h-full w-full object-fill lg:h-full lg:w-full"
          loop={true}
          autoPlay={true}
          muted={true}
          playsInline={true}
        >
          <source src={HeroVideoWebm} type={'video/webm'} />
          <source src={HeroVideoMP4} type={'video/mp4'} />
        </video>
      </div>
    </div>
  );
}
