import { MainDraw } from "../assets/SVG/MainDraw";
import { Footer } from "../components/Footer";

export function Aurora() {
    return(
        <div className="min-h-screen bg-mainPage bg-cover bg-no-repeat bg-opacity-0">
            <div className="flex items-end justify-end p-5">
                <button
                    className="p-5 bg-colors-green-300 uppercase py-4 rounded font-bold text-sm hover:bg-colors-green-500 transition-colors disabled:opacity-50"
                    type="submit">
                        Host my event
                    </button>
            </div>
            <div className="w-full h-[490px] flex items-center justify-center mx-auto">
                <div>
                    <h1 className="font-bold text-colors-green-300 text-9xl">
                        Aurora
                    </h1>
                    <span className="text-colors-gray-200">
                        where you can host your online event.
                    </span>
                </div>
                <div >
                    
                </div>
            </div>
            <div>
                <span className="text-3xl pl-10">Events already hosted:</span>
                <div className="flex flex-row justify-center gap-[200px] p-10">
                    <a href="/event/ignite-lab/subscribe" className="border border-colors-gray-600 rounded w-full lg:h-[50px] lg:bg-colors 2xl:h-[200px] 3xl:h-[500px] 4xl:h-[500px] bg-igniteLabWallpaper bg-cover bg-center lg:bg-colors-gray-700 hover:border-colors-blue-500 transition-colors flex place-items-end justify-end pr-3">
                        <span className="font-bold text-2xl text-colors-blue-500">Ignite Lab</span>
                    </a>
                    <a href="#" className="border border-colors-gray-600 rounded w-full 2xl:h-[200px] 3xl:h-[500px] 4xl:h-[500px] bg-igniteLabWallpaper bg-cover bg-center hover:border-colors-red-500 transition-colors flex place-items-end justify-end pr-3">
                        <span className="font-bold text-2xl text-colors-red-500">Red Run Code</span>
                    </a>
                    <a href="#" className="border border-colors-gray-600 rounded w-full 2xl:h-[200px] 3xl:h-[500px] 4xl:h-[500px] bg-igniteLabWallpaper bg-cover bg-center hover:border-colors-orange-500 transition-colors flex place-items-end justify-end pr-3">
                        <span className="font-bold text-2xl text-colors-orange-500">Phoenix CSS</span>
                    </a>
                </div>
                <span className="flex items-center justify-center text-2xl p-7">
                    Total of projects:<strong className="text-colors-green-300"> 15</strong>
                </span>
            </div>
            <Footer />
        </div>
    );
}