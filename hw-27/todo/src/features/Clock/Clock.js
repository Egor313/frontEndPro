import React from 'react'

export function Clock(props) {
    const [date, setDate] = React.useState(new Date());

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000)

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    return (
        <div>
            <h1>Clock on function component</h1>
            <h2>It is {date.toLocaleString()}</h2>
        </div>
    )
}