import {MenuButton} from "./Buttons";

export function Header() {
    return (
        <header className="text-gray-100 bg-mist-900 rounded-b-lg
                            shadow-[0px_0px_10px_0px_rgba(255,212,56,0.30)]
                            w-full py-2 px-6
                            flex flex-row gap-12 items-center justify-around">
            <picture className="min-w-48 max-w-72 w-2/12">
                <img src="/src/assets/pokemon-logo.png" 
                     alt="Pokemon Logo" 
                     className="w-full mx-auto"
                     />
            </picture>
            <div className="w-max flex gap-5">
                <MenuButton href='/' text='Home' />
                <MenuButton href='#' text='PokeDex' />
            </div>
        </header>
    )
}