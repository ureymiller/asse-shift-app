import Hour from './Hour';

function Day(props) {
    let weekDay = props.weekDay;
    let shift = props.shift;
    let day;
    
    const hours = shift.map(element => {
        return (
            <Hour duty={element} /> 
        );
    });

    switch(weekDay) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        default:
            day = "Weekday Error";
            break;
    }

    return (
        <div className="hours-container">
            <h2 className="week-day">{day}</h2>
            {hours}
        </div>
    );
}
//add later to container: <p>{shift}</p>
export default Day;