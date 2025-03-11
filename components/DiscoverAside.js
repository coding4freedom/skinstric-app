import Image from 'next/image';

export default function Discover ({ icon, position = "left" }) {
    return (
        <aside className={`fixed ${position === "left" ? "-left-50" : "-right-50"}`}>
            <div className="square-left">
                <div className="square__content translate-2">
                    <button className='flex items-center w-[180px] cursor-pointer gap-4 text-sm'>
                        <Image src={icon} width={40} height={40} alt="navigation icon" /> 
                        DISCOVER A.I.
                    </button>
                </div>
            </div>
        </aside>
    );
}