import Image from 'next/image';

import H2 from 'ui/heading/h2';
import H3 from 'ui/heading/h3';
import P from 'ui/heading/p';

export default function aboutSlide({
  title, head, img, desc, active,
}) {
  return (
    <div className={active ? 'flex flex-col max-w-5xl mx-auto transition-all' : 'opacity-0 fixed w-0 top-0 h-0 z-0'}>
      {/* <div classNam="flex"> */}
      <div className={active ? 'transition-all duration-700 left-0 h-screen fixed w-0 z-0 bg-white top-0' : ' top-0 h-screen w-screen bg-white fixed z-10'} />
      <Image src={`/images/about/${img}`} height={450} width={700} quality={100} alt={img} />
      {/* </div> */}
      <div className={active ? 'transition-all delay-500 ease-in-out duration-700 bg-white py-12 px-4 md:-ml-10 -mt-64 mb-32 z-10 relative w-64 shadow-xl' : 'opacity-0 -mt-64 mb-32 py-12'}>
        <H2>
          <span className="text-red-500 underline">
            <span className="text-gray-800">
              {title}
              ?
            </span>
          </span>
        </H2>
      </div>
      <div className="px-5 md:px-0">
        <H3 className={active ? 'transition-all delay-1000 ease-in duration-300 opacity-100' : 'opacity-0'}>{head}</H3>
        <P className={active ? 'transition-all delay-1000 ease-in duration-300 opacity-100' : 'opacity-0'}>{desc}</P>
      </div>
    </div>
  );
}
