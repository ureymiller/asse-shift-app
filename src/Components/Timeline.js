function Timeline() {
    let timestamps = [];

    for(let i = 0; i <= 23; i++) {
        if(i == 9) {
            timestamps.push(`0${i}:00-${i + 1}:00`);
        } else if(i < 10) {
            timestamps.push(`0${i}:00-0${i + 1}:00`);
        } else {
            timestamps.push(`${i}:00-${i + 1}:00`);
        }
    }
    
    let timeComponents = timestamps.map(element => {
        return (
            <p className="one-hour">{element}</p>
        );
    });

    console.log(timeComponents);

    return (
        <div className="hours-container">
            {timeComponents}
        </div>
    );
}

export default Timeline;