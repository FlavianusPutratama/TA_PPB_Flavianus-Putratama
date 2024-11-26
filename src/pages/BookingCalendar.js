import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Impor kalender styling
import './BookingCalendar.css'; // Impor file CSS yang baru saja dibuat
import { useNavigate } from 'react-router-dom';

function BookingCalendar({ setSelectedDate }) {
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();

  const handleProceed = () => {
    setSelectedDate(date); // Simpan tanggal yang dipilih
    navigate('/checkout'); // Arahkan ke halaman Checkout
  };

  return (
    <div className="booking-calendar">
      <h2>Select a Booking Date</h2>
      <Calendar
        value={date}
        onChange={setDate}
        minDate={new Date()} // Tidak bisa memilih tanggal sebelum hari ini
      />
      <button className="btn-proceed" onClick={handleProceed}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default BookingCalendar;
