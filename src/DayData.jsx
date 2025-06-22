import { useState } from "react";

function DayData({ amount, day, greatValue }) {
    const [ showTooltip, setShowTooltip ] = useState(false);

    return (
        <li className="text-center">
            <div className="h-24 w-full flex items-end mb-2">
                <div 
                    className={`relative w-full rounded-sm cursor-pointer ${greatValue === amount ? 'bg-blue-300' : 'bg-red-500'}`} 
                    style={{ height: `${amount / 10 }rem` }}
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                >
                    <code className={`${showTooltip ? 'block' : 'hidden'} z-10 shadow shadow-gray-900 text-xs bg-brown-950 rounded-sm text-red-100 absolute -top-6 -left-2.5 w-fit py-0.5 px-1`}>
                        ${amount}
                    </code>
                </div>
            </div>
            <div>
                <p className="text-brown-400 text-xs font-light sm:text-sm">
                    {day}
                </p>
            </div>
        </li>
    );
}

export default DayData;

