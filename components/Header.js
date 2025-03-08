export default function Header() {
    return (
        <header className="fixed min-w-screen inset-0 flex h-16">
            <div className="header__left flex-1 flex justify-start items-center gap-4 text-center">
                <span className="uppercase text-sm font-semibold ml-8">Skinstric</span>
                <span className="header__intro text-sm font-medium">INTRO</span>
            </div>
            <div className="flex-1 flex justify-end items-center">
                <button className="bg-black text-white text-xs mr-8 py-2 px-4">ENTER CODE</button>
            </div>            
        </header>
    );
}