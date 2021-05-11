import './event.css';
import CalendarIcon from './calendar.png';

function Event(props) {
  return (
    <div className="event-container">
      <img src={ CalendarIcon } />
      <div className="event">{ props.text }</div>
      <a href="#" className="join-meeting-button">Join Video Call</a>
    </div>
  );
}

export default Event;