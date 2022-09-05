function Hour(props) {
    let duty;
    
    switch(props.duty) {
        case "D":
            duty = "Dienst";
            break;
        case "R":
            duty = "Ruhe";
            break;
        case "U":
            duty = "Unterstützung";
            break;
        case "T":
            duty = "TOVD";
            break;
        default:
            duty = "error";
            break;
    }
    
    return(
        <div>
            <p className="one-hour">{duty}</p>
        </div>
    );
}

export default Hour;