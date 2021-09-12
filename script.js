var dateDisplayEl = $("#currentDay");
var saveBtn = $("#saveBtn");

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
        time: 09,
        memo: ""
    },
    blockTen = {
        boxName: blockTen,
        time: 10,
        memo: ""
    },
    blockEleven = {
        boxName: blockEleven,
        time: 11,
        memo: ""
    },
    blockTwelve = {
        boxName: blockTwelve,
        time: 12,
        memo: ""
    },
    blockThirteen = {
        boxName: blockThirteen,
        time: 13,
        memo: ""
    },
    blockFourteen = {
        boxName: blockFourteen,
        time: 14,
        memo: ""
    }, 
    blockFifteen = {
        boxName: blockFifteen,
        time: 15,
        memo: ""
    },
    blockSixteen = {
        boxName: blockSixteen,
        time: 16,
        memo: ""
    },
    blockSeventeen = {
        boxName: blockSeventeen,
        time: 17,
        memo: ""
    }];

//WHEN I open the planner
//THEN the current day is displayed at the top of the calendar
var displayDate = moment().format("MMMM Do, YYYY");
dateDisplayEl.text(displayDate);

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
saveBtn.on('click', function(event){
    event.preventDefault();
    console.log("saved!")
    var saveMemo = $('#description').value;
    localStorage.setItem("memoItem", JSON.stringify(saveMemo));
})

// WHEN I refresh the page
// THEN the saved events persist
// var populateMemos = function () {
//     var memoItem = JSON.parse(localStorage.getItem("memoItem"));

//     if(memoItem !== null){
//         $(".description").text = memoItem;
//     } else {
//         return;
//     }
// }

// populateMemos();
checkTime();