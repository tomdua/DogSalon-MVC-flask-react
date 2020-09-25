import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";


class DogSalon extends Component {
  constructor() {
    super();
    this.state = {
      currentTime: new Date(),
    };
  }

  handle = (date) => {
    this.setState({
      selectedDate: date,
    },
    )
  }

  render() {
    return (
      <div>
         <h1>Time Pick</h1>
         <DatePicker
            selected={this.state.currentTime}
            onChange={this.handle}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={30}
            minTime={setHours(setMinutes(new Date(), 0), 10)}
            maxTime={setHours(setMinutes(new Date(), 0), 18)}
            excludeTimes={[
               setHours(setMinutes(new Date(), 30), 13),
             ]} 
            dateFormat="MMMM d, yyyy h:mm aa"
            timeCaption="time"
            minDate={moment().toDate()}
          >
          </DatePicker>
          <button type="submit" className="btn-primary btn-block">Sign in</button>
      </div>
    );
  }
}

export default DogSalon;