import { useEffect, useState } from 'react';



export default function Home() {

  const sectionCount : number = 5;

  const [screenHeight, setScreenHeight] = useState<number>(0);
  const [scrollTopFull, setScrollTopFull] = useState<number>(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;
    setScrollTopFull(scrolled);
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    setScreenHeight(window.innerHeight);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const calculateTransform = (screenScrollPosition : number, page : number, sectionCount : number) => {
    const pageDivision = 100 / (sectionCount - 1);
    const pos = (pageDivision * page) - pageDivision;
    const endScale = (pageDivision * page) - 8;
    return screenScrollPosition < pos ? 0 : screenScrollPosition > endScale ? 100 : (screenScrollPosition - pos) * (100 / (pageDivision - 8));
  }

  const calculateOpacity = (screenScrollPosition : number, page : number, sectionCount : number) => {
    const pageDivision = 100 / (sectionCount - 1);
    const pos = (pageDivision * (page - 1)) - pageDivision;
    const endScale = (pageDivision * (page - 1)) - 8;
    return (screenScrollPosition < pos ? 0 : screenScrollPosition > endScale ? 100 : (screenScrollPosition - pos) * (100 / (pageDivision - 8))) / 100;
  }

  return (
    <div className="w-full" style={{ minHeight: `${(screenHeight * sectionCount) + 300}px` }}>
      <div className='fixed w-full h-full bg-black'>
        <section
          className="w-full h-screen relative z-[10] absolute top-0"
          style={{ transform: `translate(0px, -${calculateTransform(scrollTopFull, 1, sectionCount)}%)` }}
        >
          <div className="w-full h-full bg-blue-200 flex justify-center items-center">
          <h1 className='text-7xl'>HELLO WORLD!</h1>
          </div>
        </section>
        <section 
          className="w-full h-screen z-[9] absolute top-0"
          style={{ 
            transform: `translate(0px, -${calculateTransform(scrollTopFull, 2, sectionCount)}%)`,
            opacity: `${calculateOpacity(scrollTopFull, 2, sectionCount)}`
          }}
        >
          <div className="w-full h-full bg-green-200 flex justify-center items-center">
            <h1 className='text-7xl'>WELCOME</h1>
          </div>
        </section>
        <section 
          className="w-full h-screen z-[8] absolute top-0"
          style={{ 
            transform: `translate(-${calculateTransform(scrollTopFull, 3, sectionCount)}%, 0px)`,
            opacity: `${calculateOpacity(scrollTopFull, 3, sectionCount)}`
          }}
        >
          <div className="w-full h-full bg-yellow-200 flex justify-center items-center">
            <h1 className='text-7xl'>GG</h1>
          </div>
        </section>
        <section 
          className="w-full h-screen z-[7] absolute top-0"
          style={{ 
            transform: `translate(-${calculateTransform(scrollTopFull, 4, sectionCount)}%, 0px)`,
            opacity: `${calculateOpacity(scrollTopFull, 4, sectionCount)}`
          }}
        >
          <div className="w-full h-full bg-orange-200 flex justify-center items-center">
            <h1 className='text-7xl'>LAST</h1>
          </div>
        </section>
        <section
          className='w-full h-screen z-[6] absolute top-0'
          style={{ 
            opacity: `${calculateOpacity(scrollTopFull, 5, sectionCount)}`
          }}
        >
          <div className='w-full h-full bg-red-200 flex justify-center items-center'>
            <h1 className='text-7xl'>YOO</h1>
          </div>
        </section>
      </div>
    </div>
  )
}
