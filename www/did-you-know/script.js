const todayFactEl = document.getElementById("today-fact");
const randomFactEl = document.getElementById("random-fact");
const numberFactEl = document.getElementById("number-fact");
const factEl = document.getElementById("fact");

async function getEvent(path) {
    const resp = await fetch(`https://numbersapi.p.rapidapi.com/${path}?fragment=false&json=true`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "numbersapi.p.rapidapi.com",
            "x-rapidapi-key": "4167d82c33msh697f2dc5f4dda2ap10bd93jsn2e10415e6a09"
        }        
    })
    .catch(err => {
        console.log(err);
    });
    const respData = await resp.json();

    factEl.innerText = (respData['year'] ? "On this day in " + respData['year'] : respData['number']) + ": " + respData['text'];
}

function todaysDate(){
    var todaysDate = new Date();
    var theMonth = todaysDate.getMonth() + 1; // Months are 0 indexed.
    var theDay = todaysDate.getDate();

    return{theMonth, theDay};
}

function getTodaysEvent(){
    var dateFields = todaysDate();
    getEvent(dateFields.theMonth + "/" + dateFields.theDay + "/date");
}

function getRandomEvent() {
    var randomAPIs = ["random/date", "random/year", "random/math", "random/trivia"]
    getEvent(randomAPIs[Math.floor(Math.random() * 4)]);
}

function getNumberFact() {
    getEvent("random/math")
}

// Listen for button clicks
todayFactEl.addEventListener("click", getTodaysEvent);

// Listen for button clicks
randomFactEl.addEventListener("click", getRandomEvent);

// Listen for button clicks
numberFactEl.addEventListener("click", getNumberFact);

getTodaysEvent(); // On page load, grab an event from today.
