import { useEffect, useState } from "react"
import axios from "axios"
import DayData from "./DayData";

function App() {
  const [ spendings, setSpendings ] = useState([]);
  const [ greatValue, setGreatValue ] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:3001/expenses")
      .then(response => {
        setSpendings(response.data);
        const max = Math.max(...response.data.map(item => item.amount));
        setGreatValue(max);
      })
  }, [])



  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-red-100">
      <article className="max-w-80 m-5 h-fit">
        <section className="text-neutral-50 flex justify-between items-center bg-red-500 p-5 mb-2.5 rounded-lg">
          <div>
            <p className="font-light text-sm">My balance</p>
            <p className="font-medium text-2xl">$921.48</p>
          </div>
          <svg width="65" height="35" viewBox="0 0 72 48" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#382314" cx="48" cy="24" r="24"/><circle stroke="#FFF" strokeWidth="2" cx="24" cy="24" r="23"/></g></svg>
        </section>
        <section className="bg-neutral-50 p-5 rounded-lg">
          <h1 className="mb-8 text-brown-950 font-medium text-xl sm:text-2xl">Spending - Last 7 days</h1>
          <ul className="grid grid-cols-7 gap-3.5">
            {
              spendings.map(spending =>
                <DayData
                  key={spending.id}
                  amount={spending.amount}
                  day={spending.day}
                  greatValue={greatValue}
                />
              )
            }
          </ul>
          <div className="mt-7 pt-5 flex justify-between items-end text-xs sm:text-sm font-normal text-brown-400 border-t border-t-zinc-300">
            <div>
              <p>Total this month</p>
              <h2 className="font-medium text-brown-950 text-4xl">$478.33</h2>
            </div>
            <div className="text-end">
              <p className="text-brown-950 text-sm font-bold">+2.4%</p>
              <p>from last month</p>
            </div>
          </div>
        </section>
      </article>
    </div>
  )
}

export default App
