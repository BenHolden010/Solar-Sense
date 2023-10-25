import "./HourCard.css"

type HourProps = {
  time: string;
  conditionText: string;
  conditionIcon: string;
}

export default function HourCard({time,conditionText,conditionIcon}:HourProps){
  let translatedTime = time.slice(-5)
  if(translatedTime === "00:00"){translatedTime = "12AM"}
  if(translatedTime === "01:00"){translatedTime = "1AM"}
  if(translatedTime === "02:00"){translatedTime = "2AM"}
  if(translatedTime === "03:00"){translatedTime = "3AM"}
  if(translatedTime === "04:00"){translatedTime = "4AM"}
  if(translatedTime === "05:00"){translatedTime = "5AM"}
  if(translatedTime === "06:00"){translatedTime = "6AM"}
  if(translatedTime === "07:00"){translatedTime = "7AM"}
  if(translatedTime === "08:00"){translatedTime = "8AM"}
  if(translatedTime === "09:00"){translatedTime = "9AM"}
  if(translatedTime === "10:00"){translatedTime = "10AM"}
  if(translatedTime === "11:00"){translatedTime = "11AM"}
  if(translatedTime === "12:00"){translatedTime = "12PM"}
  if(translatedTime === "13:00"){translatedTime = "1PM"}
  if(translatedTime === "14:00"){translatedTime = "2PM"}
  if(translatedTime === "15:00"){translatedTime = "3PM"}
  if(translatedTime === "16:00"){translatedTime = "4PM"}
  if(translatedTime === "17:00"){translatedTime = "5PM"}
  if(translatedTime === "18:00"){translatedTime = "6PM"}
  if(translatedTime === "19:00"){translatedTime = "7PM"}
  if(translatedTime === "20:00"){translatedTime = "8PM"}
  if(translatedTime === "21:00"){translatedTime = "9PM"}
  if(translatedTime === "22:00"){translatedTime = "10PM"}
  if(translatedTime === "23:00"){translatedTime = "11PM"}
  return (
    <div className="hour-card">
    <p>{translatedTime}</p>
    <img className="hour-img" src={conditionIcon} alt={conditionText}/>
    </div>
  )
}