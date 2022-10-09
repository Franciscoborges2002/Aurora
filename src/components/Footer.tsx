import { LogoEvent } from "./LogoEvent";

export function Footer(){
    return(
        <footer className="w-full p-5 flex items-center justify-between bg-colors-gray-900 border-t-2 border-colors-gray-600 text-colors-gray-300">
            <div className="flex flex-row items-center justify-center gap-5">
                <a href="/" className="font-bold text-colors-green-300 text-3xl">
                    AURORA
                </a>
                 <span>
                    Made in Ignite Lab by <a href="https://github.com/Franciscoborges2002" className="text-colors-green-300 hover:text-colors-green-700 transition-colors">Francisco Borges</a>.
                </span>
            </div>
            <span className="flex flex-row">
                <p className="p-1">
                    Free SVG Background by <a target="_blank" href="https://bgjar.com" className="text-colors-gray-300 hover:text-colors-green-300 transition-colors">BGJar</a>
                </p>
                <a href="/pep" className="text-colors-gray-300 hover:text-colors-green-300 transition-colors p-1"> Políticas de privacidade.</a>
            </span>
        </footer>
    );
}