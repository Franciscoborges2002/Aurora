import { MainDraw } from "../assets/SVG/MainDraw";
import { Footer } from "../components/Footer";

export function Aurora() {
    return(
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat">
            <div className="w-full max-w-[1100px] flex items-center justify-between mx-auto">
                <div>
                    <h1 className="font-bold text-colors-green-300 text-9xl">
                        Aurora
                    </h1>
                    <span className="text-colors-gray-200">
                        Aurora where you can host your online event.
                    </span>
                </div>
                <div >
                    <MainDraw />
                </div>
            </div>
            <div>
                <span className="text-3xl pl-10">Alguns eventos já hospedados:</span>
                <div className="flex flex-row justify-center gap-10 p-10">
                    <a href="/event/ignite-lab/subscribe" className="border border-colors-gray-600 rounded w-full h-100  bg-igniteLabWallpaper hover:border-colors-green-500 transition-colors flex items-center justify-center ">
                        <span className="font-bold text-2xl text-colors-blue-500">Ignite Lab</span>
                    </a>
                    <a href="#" className="border border-colors-gray-600 rounded w-full h-100  bg-igniteLabWallpaper hover:border-colors-green-500 transition-colors flex items-center justify-center ">
                        <span className="font-bold text-2xl text-colors-red-500">Red Run Code</span>
                    </a>
                    <a href="#" className="border border-colors-gray-600 rounded w-full h-100  bg-igniteLabWallpaper hover:border-colors-green-500 transition-colors flex items-center justify-center ">
                        <span className="font-bold text-2xl text-colors-orange-500">Phoenix CSS</span>
                    </a>
                </div>
                <span className="flex items-center justify-center text-2xl">
                    Total de projetos: <strong className="text-colors-green-300"> 15</strong>
                </span>
            </div>
        </div>
    );
}