// App.js

import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';

import Calendar from 'react-calendar';
import {Badge, Button, Card} from "react-bootstrap";
import './App.css';

function App() {
  const [date, setDate] = useState(new Date());

  return <div className={'d-flex justify-content-center'}>
    <div className='app'>
      <h1 className='text-center'>React Calendar</h1>
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} />
      </div>
      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
    </div>

  </div>
}

export default App;

