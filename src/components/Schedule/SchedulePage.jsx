import React from "react";
import "./SchedulePage.css";

const schedule = [
  {
    date: "11 April",
    events: [
      { time: "6:00 PM", description: "Problem statements are released at the website and the hackathon begins." },
      { time: "10:00 PM", description: "Participants are provided with refreshments." },
      { time: "11:00 PM", description: "Mentorship round 1 begins." },
    ],
  },
  {
    date: "12 April",
    events: [
      { time: "2:00 AM", description: "Mentorship round 2 begins." },
      { time: "5:00 AM", description: "Round 1 officially ends and the submission link is closed." },
      { time: "8:00 AM", description: "Round 1 results are announced." },
      { time: "10:00 AM", description: "Participants report to the venue given." },
      { time: "11:00 AM", description: "Round 2 starts." },
      { time: "2:00 PM", description: "Round 2 ends." },
    ],
  },
];

const SchedulePage = () => {
  return (
    <div className="schedule-container">
      <h1 className="schedule-title">SCHEDULE</h1>
      <p className="schedule-subtitle">Elevate your skills and collaborate with fellow coders!</p>
      <div className="schedule-content">
        {schedule.map((day, index) => (
          <div key={index} className="schedule-day">
            <h2 className="schedule-date">{day.date}</h2>
            <div className="schedule-events">
              {day.events.map((event, idx) => (
                <div key={idx} className="schedule-event">
                  <h3 className="event-time">{event.time}</h3>
                  <p className="event-description">{event.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchedulePage;