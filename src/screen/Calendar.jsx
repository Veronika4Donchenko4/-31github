// Calendar.js

import React, { useState } from 'react';
import styles from './Calendar.module.css';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Simple Calendar</h1>
      <input
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
        className={styles.input}
      />
    </div>
  );
};

export default Calendar;

