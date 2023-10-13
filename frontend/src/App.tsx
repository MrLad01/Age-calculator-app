import { useState } from 'react'
import arrow from "./assets/images/icon-arrow.svg"


function App() {

  const [ birthDay, setBirthDay ] = useState<number>(1);
  const [ birthMonth, setBirthMonth ] = useState<number>(1);
  const [ birthYear, setBirthYear ] = useState<number>(2000);

  var today = new Date();
  var year = today.getUTCFullYear();
  var month = today.getUTCMonth();
  var day = today.getUTCDay();

  var ageYear = year -  birthYear ;
  var ageMonth = month -  birthMonth ;
  var ageDay = day - birthDay;

  console.log(year, month, day );
  




  return (
    <main className = 'flex items-center justify-center bg-gray-200 w-screen h-screen'>
      
      <div className = 'h-[25rem] xs:max-sm:w-full sm:max-2xl:w-fit xs:max-sm:mx-4 bg-white p-10 grid' >

        <form 
            action = "" 
            method = "post" 
            className = 'flex flex-col' 
        >
          <div 
              className = 'flex'
              title = 'inputs'
          >

            <div 
                className = 'grid mr-2'
                title = 'birth-day' 
              >
              <label htmlFor = "birth-day"> Day </label>
              <input 
                  type = "number" 
                  name = "birth-day" 
                  id = "birth-day" 
                  className = 'border m-2 ml-0 xs:max-sm:w-24 sm:max-2xl:w-28 h-12 outline-purple indent-4 '
                  value = { birthDay }
                  onChange = { (e) => setBirthDay( parseInt(e.target.value) ) }              
              />
            </div>

            <div 
                className = 'grid mr-2'
                title = 'birth-month' 
              >
              <label htmlFor = "birth-month"> Month </label>
              <input 
                  type = "number" 
                  name = "birth-month" 
                  id = "birth-month" 
                  className = 'border m-2 ml-0 xs:max-sm:w-24 sm:max-2xl:w-28 h-12 outline-purple indent-4 '
                  value = { birthMonth }
                  onChange = { (e) => setBirthMonth( parseInt(e.target.value) )  }              
              />
            </div>

            <div 
                className = 'grid mr-2'
                title = 'birth-year' 
              >
              <label htmlFor = "birth-year"> Year </label>
              <input 
                  type = "number" 
                  name = "birth-year" 
                  id = "birth-year" 
                  className = 'border m-2 ml-0 xs:max-sm:w-24 sm:max-2xl:w-28 h-12 outline-purple indent-4  '
                  value = { birthYear }
                  onChange = { (e) => setBirthYear(parseInt(e.target.value)) }              
              />
            </div>
          </div>

          <div className = "flex justify-start items-center">
            <hr className = 'w-[26rem] border' />
            <button className = 'w-20 h-20 rounded-full bg-purple flex justify-center items-center ' >
              <img src = { arrow } />
            </button>
          </div>

        </form>

        <div className = "grid">
          <h1> { ageYear } years </h1>
          <h1> { ageMonth } months </h1>
          <h1> { ageDay } days </h1>
        </div>

      </div>

    </main>
  )
}

export default App
