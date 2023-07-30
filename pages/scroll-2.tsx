import { useEffect, useState } from "react"

// utils
import { calculateTransform, calculateOpacity } from "../utils/calculate";

export default function ScrollTwo() {

    const sectionCount = 4

    const [screenPos, setScreenPos] = useState<number>(0);
    const [screenHeight, setScreenHeight] = useState<number>(0);

    const onScroll = () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        const scrolled = (winScroll / height) * 100;
        setScreenPos(scrolled);
    }

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        setScreenHeight(window.innerHeight);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    return (
        <div className="box-content w-full bg-blue-200" style={{ paddingBottom: `${screenHeight * sectionCount + 2000}px` }}>
            <div className="fixed w-full h-full bg-black">
                <section 
                    className="w-full h-full absolute top-0 z-[10]"
                    style={{ transform: `translate(0px, -${calculateTransform(screenPos, 0, 33.33, 20)}%)` }}
                >
                    <div className="w-full h-full bg-blue-200 flex justify-center items-center">
                        <h1 
                            className='text-7xl'
                            style={{ transform: `translate(-${calculateTransform(screenPos, 0, 15, 0)}%, 0px)` }}
                        >HELLO WORLD!</h1>
                    </div>
                </section>
                <section 
                    className="w-full h-[200vh] absolute top-0 z-[9]"
                    style={{
                        transform: `translate(0px, -${calculateTransform(screenPos, 33.33, 100, 20)}%)`,
                        opacity: `${calculateOpacity(screenPos, 0, 33.33, 20)}`
                    }}
                >
                    <div className="w-full h-full bg-green-200 flex justify-center items-center flex flex-col justify-around items-center">
                        <h1 className='text-7xl'>WELCOME</h1>
                        <h1 className='text-7xl'>TO</h1>
                        <h1 className='text-7xl'>HERE</h1>
                    </div>
                </section>
                <section 
                    className="w-full h-full absolute top-0 z-[8]"
                    style={{ opacity: `${calculateOpacity(screenPos, 66.66, 100, 0)}` }}
                >
                    <div className="w-full h-full bg-yellow-200 flex justify-center items-center">
                        <h1 className='text-7xl'>NICE!</h1>
                    </div>
                </section>
            </div>
        </div>
    )
}