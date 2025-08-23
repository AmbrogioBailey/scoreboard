let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let count = 0
let guestCount = 0


function btn1() {
    let point = count += 1
    homeScore.textContent = point    
}

function btn2() {
    let point = count += 2
    homeScore.textContent = point    
}

function btn3() {
    let point = count += 3
    homeScore.textContent = point    
}

function gbtn1() {
    let points = guestCount += 1
    guestScore.textContent = points    
}

function gbtn2() {
    let points = guestCount += 2
    guestScore.textContent = points    
}

function gbtn3() {
    let points = guestCount += 3
    guestScore.textContent = points    
}