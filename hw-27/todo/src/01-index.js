import React from 'react';
import ReactDOM from 'react-dom/client';
import { ClockClass } from './features/clock/ClockClass';
import { Clock } from './features/clock/Clock'
import { Todo } from './features/todo'

const App = () => {
  const [showClock, setShowClock] = React.useState(true);

  return (
    <>
      <button onClick={() => setShowClock(!showClock)}>Toggle Clock</button>

      {showClock ? (
        <div>
          <Clock />
          <ClockClass />
          <Todo />
        </div>
      ) : null}
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
);