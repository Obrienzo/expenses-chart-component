

function DayData({ amount, day }) {

    return (
        <li className="text-center">
            <div className="h-24 w-full flex items-end mb-2">
                <div title={`$${amount}`} className="bg-red-500 w-full rounded-sm cursor-pointer" style={{ height: `${amount / 10 }rem` }}>
                </div>
            </div>
            <div>
                <p className="text-brown-400 text-xs sm:text-sm">{day}</p>
            </div>
        </li>
    );
}

export default DayData;