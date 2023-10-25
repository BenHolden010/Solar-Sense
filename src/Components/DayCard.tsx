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
    let snowInches = totalsnow_cm * 2.54
    let displayedHours = hour.map(hour=>{
      console.log(hour)
      return(<HourCard 
        time={hour.time} 
        conditionText={hour.condition.text} 
        conditionIcon={hour.condition.icon} 
        />)
    })
  return (
  <div className="day-card">
    <h1>{date}</h1>
    <div className="condition-ti">
      <p>{conditionText}</p>
      <img src={conditionIcon} className="img"/>
    </div>
    <p>High: {maxtemp_f}F/Low: {mintemp_f}F</p>
    <p>{daily_chance_of_rain}% Chance Of Rain</p>
    <p>{totalprecip_in} Inches Total Rain</p>
    <p>{daily_chance_of_snow}% Chance Of Snow</p>
    <p>{snowInches} Inches Total Snow</p>
    <p>{sunrise} sunrise<br/>{sunset} sunset</p>
    <div className="hours-container">{displayedHours}</div>
  </div>)
}

export { DayCard }