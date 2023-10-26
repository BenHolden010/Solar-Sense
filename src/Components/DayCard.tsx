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
  
  date = date.slice(5);
  if(`${date[0]}${date[1]}`==='10'){date = `Oct ${date.slice(-2)}`}
  if(`${date[0]}${date[1]}`==='11'){date = `Nov ${date.slice(-2)}`}
  if(`${date[0]}${date[1]}`==='12'){date = `Dec ${date.slice(-2)}`}
  if(`${date[0]}${date[1]}`==='01'){date = `Jan ${date.slice(-2)}`}
  if(`${date[0]}${date[1]}`==='02'){date = `Feb ${date.slice(-2)}`}
  if(`${date[0]}${date[1]}`==='03'){date = `Mar ${date.slice(-2)}`}
  if(`${date[0]}${date[1]}`==='04'){date = `Apr ${date.slice(-2)}`}
  if(`${date[0]}${date[1]}`==='05'){date = `May ${date.slice(-2)}`}
  if(`${date[0]}${date[1]}`==='06'){date = `Jun ${date.slice(-2)}`}
  if(`${date[0]}${date[1]}`==='07'){date = `Jul ${date.slice(-2)}`}
  if(`${date[0]}${date[1]}`==='08'){date = `Aug ${date.slice(-2)}`}
  if(`${date[0]}${date[1]}`==='09'){date = `Sep ${date.slice(-2)}`}

  let snowInches = totalsnow_cm / 2.54
  let roundedSnow = Math.round(snowInches * 100) / 100
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
    <h1 className="date">{date}</h1> 
    <div>
      <img className="condition-text" src={conditionIcon} alt={`${conditionText}`} />
      <h2 className="condition-text">{conditionText}</h2>
    </div>
    <h2 className="high-low">High: {Math.floor(maxtemp_f)}°F<br/>Low: {Math.floor(mintemp_f)}°F</h2>
    </div>
    <h2 className="rise-set">{sunrise} ☀️↑ <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTN3cGt5YnVkcHozdjNzejVwNG5kNWRzemh2Zjc3MjNwczdqeGt0YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/loUqCMSfXHcsVb3cUZ/giphy.gif" className="giphy-img" alt="smiling sun" />{sunset} ☀️↓</h2>
    {daily_chance_of_rain>0&&<h2>🌧️ {daily_chance_of_rain}% Chance Of Rain with a total of {totalprecip_in} Inches 🌧️</h2>}
    {daily_chance_of_snow>0&&<h2>❄️ {daily_chance_of_snow}% Chance Of Snow with a total of {roundedSnow} Inches ❄️</h2>}
    <div className="hours-container">{displayedHours}</div>
  </div>)
}

export { DayCard }