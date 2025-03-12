import Image from 'next/image';

export default function Discover ({ icon, position = "left", side = "translate-2" }) {
    return (
      <aside
        className={`fixed ${position === "left" ? "-left-50" : "-right-50"}`}
      >
        <div className="square-left">
          <div
            className={`square__content ${
              side === "translate-2"
                ? "translate-x-0 -translate-y-18"
                : "-translate-x-[135px] translate-y-15"
            }`}
          >            
            {position === "left" ? (
              <button className="flex items-center w-[180px] cursor-pointer gap-4 text-sm">
                <Image
                  src={icon}
                  width={40}
                  height={40}
                  alt="navigation icon"
                />
                DISCOVER A.I.
              </button>
            ) : (
              <button className="flex items-center w-[180px] cursor-pointer gap-4 text-sm mr-2">
                TAKE TEST
                <Image
                  src={icon}
                  width={40}
                  height={40}
                  alt="navigation icon"
                />                
              </button>
            )}
          </div>
        </div>
      </aside>
    );
}