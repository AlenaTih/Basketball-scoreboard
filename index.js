let homeScore = document.getElementById("home-score")
console.log(homeScore)
let guestScore = document.getElementById("guest-score")
console.log(guestScore)

let homeCount = 0
let guestCount = 0


function goalHome() {
    console.log("button clicked")
    homeCount += 1
    homeScore.textContent = homeCount
}

function goal2Home() {
    console.log("button clicked")
    homeCount += 2
    homeScore.textContent = homeCount
}

function goal3Home() {
    homeCount += 3
    homeScore.textContent = homeCount
}

function goal1Guest() {
    guestCount += 1
    guestScore.textContent = guestCount
}

function goal2Guest() {
    guestCount += 2
    guestScore.textContent = guestCount
}

function goal3Guest() {
    guestCount += 3
    guestScore.textContent = guestCount
}

function refresh() {
    homeCount = 0
    guestCount = 0
    homeScore.textContent = 0
    guestScore.textContent = 0
}

function winnerHighlight() {
        if (homeCount > guestCount) {
        homeScore.textContent = "Yay!"
    } else if (guestCount > homeCount) {
        guestScore.textContent = "Yay!"
    } else {
        homeScore.textContent = "Draw"
        guestScore.textContent = "Draw"
    }
}




// if (condition1) {
  //  block of code to be executed if condition1 is true
// } else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
// } else {
  //  block of code to be executed if the condition1 is false and condition2 is false
// }
