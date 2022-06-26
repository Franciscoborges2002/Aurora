import { LogoEvent } from "./LogoEvent";

export function Footer(){
    return(
        <footer className="w-full p-5 flex items-center justify-between bg-colors-gray-900 border-t-2 border-colors-gray-600 text-colors-gray-300">
            <div className="flex flex-row items-center justify-center gap-5">
                <LogoEvent />
                 <span>
                    Made in Ignite Lab by <a href="https://github.com/Franciscoborges2002" className="text-colors-green-300 hover:text-colors-green-700 transition-colors">Francisco Borges</a>.
                </span>
            </div>
            <span>
                <a href="/pep" className="text-colors-gray-300 hover:text-colors-green-300 transition-colors"> Políticas de privacidade.</a>
            </span>
        </footer>
    );
}