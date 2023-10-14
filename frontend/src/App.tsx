import React, { useState } from 'react';

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
    if (
      isNaN(day) ||
      isNaN(month) ||
      isNaN(year) ||
      day <= 0 ||
      day > 31 ||
      month <= 0 ||
      month > 12 ||
      year > currentDate.getFullYear()
    ) {
      setErrorDay("Invalid day");
      setErrorMonth("Invalid month");
      setErrorYear("Invalid year");
    } else {
      setErrorDay("");
      setErrorMonth("");
      setErrorYear("");

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
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="birth-day">Day</label>
        <input
          type="text"
          name="birth-day"
          id="birth-day"
          value={birthDay}
          onChange={(e) => setBirthDay(e.target.value)}
        />
        {errorDay && <span className="text-red-500">{errorDay}</span>}
      </div>

      <div>
        <label htmlFor="birth-month">Month</label>
        <input
          type="text"
          name="birth-month"
          id="birth-month"
          value={birthMonth}
          onChange={(e) => setBirthMonth(e.target.value)}
        />
        {errorMonth && <span className="text-red-500">{errorMonth}</span>}
      </div>

      <div>
        <label htmlFor="birth-year">Year</label>
        <input
          type="text"
          name="birth-year"
          id="birth-year"
          value={birthYear}
          onChange={(e) => setBirthYear(e.target.value)}
        />
        {errorYear && <span className="text-red-500">{errorYear}</span>}
      </div>

      <button onClick={calculateAge}>Calculate Age</button>

      <div>
        <p>
          Age:{" "}
          {ageYear !== null ? `${ageYear} years, ` : "--"}{" "}
          {ageMonth !== null ? `${ageMonth} months, ` : "--"}{" "}
          {ageDay !== null ? `${ageDay} days` : "--"}
        </p>
      </div>
    </div>
  );
}

export default App;
