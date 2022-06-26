import { Link } from "phosphor-react";
import { LogoEvent } from "./LogoEvent";

export function Header (){
    return(
        <a href="/event/ignite-lab/lesson">
            <header className="w-full py-5 flex items-center justify-center bg-colors-gray-700 border-b-2 border-colors-gray-600">
                <LogoEvent />
            </header>
        </a>
    )
}