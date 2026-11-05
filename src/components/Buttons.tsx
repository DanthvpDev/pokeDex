type Props = {
    href: string;
    text: string;
};

export function MenuButton({href, text}: Props) {
    return(
        <a href={href} 
           className="border-2 border-gray-300 rounded-lg 
                      px-6 py-3
                      font-bold text-lg
                      hover:shadow-[0px_0px_20px_0px_rgba(255,212,56,0.50)] hover:bg-yellow-400 hover:text-gray-900 transition-colors
                      active:scale-95">
            {text}
        </a>
    )
}