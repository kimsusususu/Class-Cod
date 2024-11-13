import React from "react";

function Clock(props){
    return (
        <>
        <h1>안녕, 리엑트!</h1>
        <h2>헌재 시간: {new Date().toLocaleTimeString()}</h2>
        </>
    );
}

export default Clock;