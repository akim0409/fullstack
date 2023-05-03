import Datetime from 'react-datetime';
import moment from 'moment';
import "react-datetime/css/react-datetime.css";
import './date-field.css';

var yesterday = moment().subtract(1, "day");
function valid(current) {
  return current.isAfter(yesterday);
}

// https://www.npmjs.com/package/react-datetime#customize-the-input-appearance
const DateField = (props) => {
  const { date, setDate } = props;

  return <Datetime
    value={date}
    onChange={(moment) => setDate(moment.toDate())}
    input={false}
    isValidDate={valid} 
    renderDay={(props, currentDate, selectedDate) => {
        return <td {...props}>{currentDate.date()}</td>;
    }}

    renderMonth={(props, currentMonth, currentYear, selectedDate) => {
      const letterMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      return <td {...props}>{letterMonths[currentMonth]}</td>;
  }}
    renderYear={(props, year, selectedDate) => {
      return <td {...props}>{year}</td>;
    }}
  />
};

export default DateField;