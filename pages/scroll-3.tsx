import { useEffect, useState } from "react";

// utils
import { calculateTransform, calculateOpacity, calculateTransform2x, reverseCalculateOpacity } from "../utils/calculate";

export default function ScrollThree() {

    const sectionCount = 6

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
                    className="w-full h-full absolute top-0 z-[2]"
                    style={{
                        opacity: `${reverseCalculateOpacity(screenPos, 25, 40, 0)}`,
                        transform: `translate(0px, -${calculateTransform(screenPos, 80, 90, 0)}%)`
                    }}
                >
                    <div className="w-full h-full bg-blue-200 flex justify-center items-center">
                        <h1 
                            className='text-7xl'
                            style={{ transform: `translate(-${calculateTransform(screenPos, 0, 20, 7)}%, 0px)` }}
                        >HELLO WORLD!</h1>
                    </div>
                </section>
                <section 
                    className="w-full h-[400vh] absolute top-0 z-[3]"
                    style={{ transform: `translate(0px, ${-1 * calculateTransform2x(screenPos, 25, 100, sectionCount)}%)` }}
                >
                    <div className="w-full h-full bg-green-200 flex justify-center items-center flex flex-col justify-around items-center">
                        <h1 className='text-7xl'>WELCOME</h1>
                        <h1 className='text-7xl'>TO</h1>
                        <h1 className='text-7xl'>HERE</h1>
                    </div>
                </section>
                <section 
                    className="w-full h-full absolute top-0 z-[1]"
                    style={{ visibility: `${screenPos >= 80 ? "visible" : "hidden" }` }}
                >
                    <div className="w-full h-full bg-orange-200 flex justify-center items-center flex flex-col justify-around items-center">
                        <h1 className='text-7xl'>LAST</h1>
                    </div>
                </section>
            </div>
        </div>
    )
}