

type DayProps = {
  date: string;
};

function DayCard({date}:DayProps){
  console.log(date)
  return (<div className="day-card">
    <p>Date: {date}</p>
    {/* <p>Date: {date}</p> */}
    </div>)
}

export { DayCard }