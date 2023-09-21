import React from 'react'

export class ClockClass extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                date: new Date()
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalId)
    }

    render() {
        return (
            <div>
                <h1>Clock on class component</h1>
                <h2>It is {this.state.date.toLocaleString()}</h2>
            </div>
        )
    }
}