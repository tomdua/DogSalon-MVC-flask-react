import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import {addOrder} from "./DogSalonFunctions"

class DogSalon extends Component {
  constructor() {
    super();
    this.state = {
      currentTime: new Date(),
      username:""
    };
  }
  componentDidMount () {
    this.setState({
            username: localStorage.getItem('username')
         })
  }
  
  handle = (date) => {
    this.setState({
      selectedDate: date,
      time:date
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
          <button type="submit" onClick={() => addOrder(this.state.username,this.state.time)}className="btn-primary btn-block">Pick order</button>
      </div>
    );
  }
}

export default DogSalon;