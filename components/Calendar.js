import React, { useEffect, useState } from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';

const localizer = momentLocalizer(moment);

const DisaCalendar = () => {
  const [events, setEvents] = useState([]);
  const [isAgendaView, setIsAgendaView] = useState(false);

  useEffect(() => {
    fetch('/api/events')
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(error => console.error('Error fetching events:', error));
  }, [])

  const formattedEvents = events.map(event => ({
    ...event,
    start: new Date(event.start),
    end: new Date(event.end),
  }));

  const handleViewChange = view => {
    setIsAgendaView(view === 'agenda'); // Update the state based on the view
  };

  return (
    <section id="calendar" className="py-5">
      <div className="container">
        <h1 className="text-center mb-4">Event Calendar</h1>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="card">
              <div className="card-body">
                <Calendar
                  localizer={localizer}
                  events={formattedEvents}
                  startAccessor="start"
                  endAccessor="end"
                  views={['month', 'agenda']}
                  defaultView="month"
                  style={{ height: 500 }}
                  eventPropGetter={(event) => ({
                    style: {
                      backgroundColor: event.resource
                    }
                  })}
                  onView={handleViewChange} // Call the handleViewChange function
                  className={isAgendaView ? 'text-light' : ''} // Add the 'text-light' class conditionally
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DisaCalendar;
