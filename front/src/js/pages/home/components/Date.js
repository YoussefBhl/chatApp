import React from "react";
import { ListGroupItem, ListGroup, Grid, Row, Col } from 'react-bootstrap';


const DateCalculator = (props) => {
    const style = {
        fontSize: "12px",
        color: '#586069',
        display: 'block',
        clear: 'both',
        fontWeight: '400',
        margin: '0',
        padding: '1% 20%',
    }
    const actualTime = new Date();
    //compare the diff btw the actual time and the given date which return timestamp
    const timestamp = actualTime.getTime() - props.date.getTime();
    //calcute the year, months and day
    const diffDate = new Date(timestamp);
    const year = diffDate.getFullYear() - 1970, //unix time January 1st, 1970
        month = diffDate.getMonth(),
        day = diffDate.getDate() - 1,
        hour = diffDate.getHours() - 1,
        minute = diffDate.getMinutes(),
        seconds = diffDate.getSeconds();
    let dateMessage = "";
    if (year)
        dateMessage += year + " Year ago";
    else if (month)
        dateMessage += month + " Months ago ";
    else if (day)
        dateMessage += day + " Days ago";
    else if (hour)
        dateMessage += hour + " Hour ago";
    else if (minute)
        dateMessage += minute + " Minutes ago";
    else if (seconds)
        dateMessage += seconds + " Seconds ago";
    else
        dateMessage += "1 second ago";
    return (
            <p style={style}>
                {dateMessage}
            </p>
    );
};
export default DateCalculator;

