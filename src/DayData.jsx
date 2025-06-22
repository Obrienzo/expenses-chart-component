

function DayData({ amount, day, greatValue }) {

    return (
        <li className="text-center">
            <div className="h-24 w-full flex items-end mb-2">
                <div title={`$ ${amount}`} className={` w-full rounded-sm cursor-pointer ${greatValue === amount ? 'bg-blue-300' : 'bg-red-500'}`} style={{ height: `${amount / 10 }rem` }}>
                </div>
            </div>
            <div>
                <p className="text-brown-400 text-xs font-light sm:text-sm">{day}</p>
            </div>
        </li>
    );
}

export default DayData;


// Next Learn how to use DOM manipulation in React to display the amount of each instead of using the title attribute..
