import React from 'react';

type Props = {
    time: Date
}

function Clock({time}: Props) {
    let hours = time.getHours();

    return (
        <h1 id='time' className={(hours>=0 && hours<=6) ? 'night' : 'day'}>
            {time.toLocaleTimeString()}
        </h1>
    )
}

export default Clock;