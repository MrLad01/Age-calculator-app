import  { useState } from 'react';
import arrow from "./assets/images/icon-arrow.svg"

function App() {
  const [birthDay, setBirthDay] = useState<string>("");
  const [birthMonth, setBirthMonth] = useState<string>("");
  const [birthYear, setBirthYear] = useState<string>("");

  const [ageDay, setAgeDay] = useState<number | null>(null);
  const [ageMonth, setAgeMonth] = useState<number | null>(null);
  const [ageYear, setAgeYear] = useState<number | null>(null);

  const [errorDay, setErrorDay] = useState("");
  const [errorMonth, setErrorMonth] = useState("");
  const [errorYear, setErrorYear] = useState("");

  const calculateAge = () => {
    // Get the current date
    const currentDate = new Date();

    // Parse input values to integers
    const day = parseInt(birthDay);
    const month = parseInt(birthMonth);
    const year = parseInt(birthYear);

    // Check if the inputs are valid
     isNaN(day) || day <= 0 || day > 31 ? setErrorDay("Invalid day") : setErrorDay("");
     isNaN(month) || month <= 0 || month > 12 ? setErrorMonth("Invalid month") : setErrorMonth("");
     year > currentDate.getFullYear() || isNaN(year) ? setErrorYear("Invalid year") : setErrorYear("");
     
      // Calculate the age
      const ageDate = new Date(
        currentDate.getTime() - new Date(year, month - 1, day).getTime()
      );

      const ageYears = ageDate.getUTCFullYear() - 1970;
      const ageMonths = ageDate.getUTCMonth();
      const ageDays = ageDate.getUTCDate() - 1;

      setAgeYear(ageYears);
      setAgeMonth(ageMonths);
      setAgeDay(ageDays);
  };

  return (
    <main className = 'flex items-center justify-center bg-gray-200 w-screen h-screen xs:max-sm:p-8'>

      <div className = 'h-[25rem] xs:max-sm:w-full  sm:max-2xl:w-fit xs:max-sm:mx-4 bg-white p-8 grid rounded-ee-[10rem] rounded-xl' >
        <div className = 'flex flex-col'>
          <div           
              className = 'flex'
              title = 'inputs'
          >
              <div   
                  className = 'grid mr-2'
                  title = 'birth-day' 
              >
                <label htmlFor="birth-day" className = "text-off-black text-xs tracking-widest opacity-70" > DAY </label>
                <input
                  type = "text"
                  name = "birth-day"
                  id = "birth-day"
                  className = 'border m-1 ml-0 xs:max-sm:w-16 sm:max-2xl:w-28 h-12 outline-purple indent-4 rounded-md xs:max-2xl:w-2/5'
                  value={birthDay}
                  onChange={(e) => setBirthDay(e.target.value)}
                />
                {errorDay && <span className="text-red-500">{errorDay}</span>}
              </div>


              <div
                  className = 'grid mr-2'
                  title = 'birth-month' 
              >
                <label htmlFor="birth-month" className = "text-off-black text-xs tracking-widest opacity-70" > MONTH </label>
                <input
                  type = "text"
                  name = "birth-month"
                  id = "birth-month"
                  className = 'border m-1 ml-0 xs:max-sm:w-16 sm:max-2xl:w-28 h-12 outline-purple indent-4 rounded-md xs:max-2xl:w-2/5'
                  value={birthMonth}
                  onChange={(e) => setBirthMonth(e.target.value)}
                />
                {errorMonth && <span className="text-red-500">{errorMonth}</span>}
              </div>


              <div
                 className = 'grid mr-2'
                 title = 'birth-year' 
              >
                <label htmlFor="birth-year" className = "text-off-black text-xs tracking-widest opacity-70" > YEAR </label>
                <input
                  type = "text"
                  name = "birth-year"
                  id = "birth-year"
                  className = 'border m-1 ml-0 xs:max-sm:w-16 sm:max-2xl:w-28 h-12 outline-purple indent-4 rounded-md'
                  value={birthYear}
                  onChange={(e) => setBirthYear(e.target.value)}
                />
                {errorYear && <span className="text-red-500">{errorYear}</span>}
            </div>
          </div>
          

          <div className = "flex justify-start items-center my-2">
            <hr className = 'w-[26rem] border xs:max-sm:w-4/5 ' />
            <button 
                className = 'w-16 h-16 rounded-full bg-purple hover:bg-off-black flex justify-center items-center outline-none '
                onClick = { calculateAge }
            >
              <img src = { arrow } className='w-1/2 h-1/2' />
            </button>
          </div>
        </div>


        <div className = "grid">
          <h1 className = 'font-extrabold text-6xl italic xs:max-sm:text-4xl'> <span className = 'text-purple'> { ageYear !== null && ageYear > 0 ? `${ageYear} ` : "--"} </span>  years </h1>
          <h1 className = 'font-extrabold text-6xl italic xs:max-sm:text-4xl my-1'> <span className = 'text-purple'> { ageMonth !== null && ageMonth > 0 ?  `${ageMonth} ` : "--" } </span>  months </h1>
          <h1 className = 'font-extrabold text-6xl italic xs:max-sm:text-4xl'> <span className = 'text-purple'> { ageDay !== null && ageDay > 0 ? `${ageDay} ` : "--" } </span>  days </h1>
        </div>
      </div>
    </main>
  );
}

export default App;
