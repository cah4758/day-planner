var timeDisplayEl = $("#currentDay");


//WHEN I open the planner
//THEN the current day is displayed at the top of the calendar
var displayDate = moment().format("MMMM Do, YYYY");
timeDisplayEl.text(displayDate);

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours

