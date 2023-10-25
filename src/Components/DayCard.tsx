import "./DayCard.css"
import HourCard from "./HourCard";

type DayProps = {
  date: string;
  maxtemp_f: number;
  mintemp_f: number;
  totalprecip_in: number;
  totalsnow_cm: number;
  daily_chance_of_rain: number;
  daily_chance_of_snow: number;
  conditionText: string;
  conditionIcon: string;
  sunrise: string;
  sunset: string;
  hour: Hours[];
};

type Hours = {
  time: string;
  condition: {
    text: string;
    icon: string;
  }
}

function DayCard({date, maxtemp_f, mintemp_f, totalprecip_in, totalsnow_cm, daily_chance_of_rain, 
  daily_chance_of_snow, conditionText, conditionIcon, sunrise, sunset, hour}:DayProps){
  
  let snowInches = totalsnow_cm / 2.54
  let newHours: Hours[] = [...hour];
  const shiftAndPush = (array: Hours[]) => {
      const shiftedElement = array.shift();
      if (shiftedElement) {
          array.push(shiftedElement);
      }
  };

    for (let i = 0; i < 6; i++) {
      shiftAndPush(newHours);
  }
    
  let displayedHours = newHours.map(hour=>{
    return(<HourCard 
      time={hour.time} 
      key={hour.time} 
      conditionText={hour.condition.text} 
      conditionIcon={hour.condition.icon} 
      />)
  })


  return (
  <div className="day-card">
    <div className="condition-ti">
    <h1>{date}</h1> 
      <h2>{conditionText}</h2>
      <img src={conditionIcon} className="img"/>
    <h2>High: {Math.floor(maxtemp_f)}°F<br/>Low: {Math.floor(mintemp_f)}°F</h2>
    </div>
    <h2 className="rise-set">{sunrise} ☀️↑ <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTN3cGt5YnVkcHozdjNzejVwNG5kNWRzemh2Zjc3MjNwczdqeGt0YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/loUqCMSfXHcsVb3cUZ/giphy.gif" className="giphy-img" alt="Giphy Image" />{sunset} ☀️↓</h2>
    {daily_chance_of_rain>0&&<h2>🌧️ {daily_chance_of_rain}% Chance Of Rain with a total of {totalprecip_in} Inches 🌧️</h2>}
    {daily_chance_of_snow>0&&<h2>❄️ {daily_chance_of_snow}% Chance Of Snow with a total of {snowInches} Inches ❄️</h2>}
    <div className="hours-container">{displayedHours}</div>
  </div>)
}

export { DayCard }