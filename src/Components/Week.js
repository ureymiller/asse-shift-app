import Day from './Day';
import Timeline from './Timeline';
import data from '../Data/data';
import '../Style/Week.css';

function Week() {
    let today = new Date();
    let refereceDay = new Date(2022, 7, 23, 0, 0);
    let daysPassed = Math.floor((today - refereceDay)/(1000 * 60 * 60 * 24));
    let todaysShift = daysPassed % 8;

    const days = [];

    for(let i = 0; i < 5; i++) {
        days.push(
            <Day key={i} shift={data[(todaysShift + i) % 8]} weekDay={(today.getDay() + i) % 7}/>
        );
    }
    
    return (
        <div className="days-container">
            <Timeline />
            {days}
            <Timeline />
        </div>
    );
}

export default Week;