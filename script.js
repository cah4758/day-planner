var timeDisplayEl = $("#currentDay");


var blockNine = $("#0900");
var blockTen = $("#1000");
var blockEleven = $("#1100");
var blockTwelve = $("#1200");
var blockThirteen = $("#1300");
var blockFourteen = $("#1400");
var blockFifteen = $("#1500");
var blockSixteen = $("#1600");
var blockSeventeen = $("#1700");

var timeBlocks = [blockNine = {
        boxName: blockNine,
        time: 09
    },
    blockTen = {
        boxName: blockTen,
        time: 10
    },
    blockEleven = {
        boxName: blockEleven,
        time: 11
    },
    blockTwelve = {
        boxName: blockTwelve,
        time: 12
    },
    blockThirteen = {
        boxName: blockThirteen,
        time: 13
    },
    blockFourteen = {
        boxName: blockFourteen,
        time: 14
    }, 
    blockFifteen = {
        boxName: blockFifteen,
        time: 15
    },
    blockSixteen = {
        boxName: blockSixteen,
        time: 16
    },
    blockSeventeen = {
        boxName: blockSeventeen,
        time: 17
    }];

//WHEN I open the planner
//THEN the current day is displayed at the top of the calendar
var displayDate = moment().format("MMMM Do, YYYY");
timeDisplayEl.text(displayDate);

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
var hourNow = moment().format("HH");
var checkTime = function(){
    for (i=0; i<timeBlocks.length; i++){
        if (hourNow == timeBlocks[i].time){
            console.log("present time");
            timeBlocks[i].boxName.toggleClass("present");
        } else if (hourNow > timeBlocks[i].time){
            console.log("previous time");
            timeBlocks[i].boxName.toggleClass("past");
        } else {
            console.log("future time");
            timeBlocks[i].boxName.toggleClass("future");
        }
    };
};

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage



checkTime();