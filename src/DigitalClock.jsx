import React, { useEffect, useState } from "react";

function DigitalClock(){

    const[time, setTime] = useState(new Date());


    useEffect(() => {

        const intervalId = setInterval(() => {
            setTime(new Date());
        },1000);

        return() => {
            clearInterval(intervalId);
            console.log("cleard");
        }
        
    },[])


    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem =  hours >=12 ? "PM" : "AM";


        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
    }
    
    function padZero(number){
        return (number < 10 ? "0" : "") + number;
    }

    return(
        <>
        <div className="digitalclock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
        </>
    );
}

export default DigitalClock