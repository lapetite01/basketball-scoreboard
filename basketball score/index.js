let points = 0;
let guestPoints = 0;
let scoreHome = document.getElementById("score");
let scoreGuest = document.getElementById("score-guest");
console.log(scoreHome);
console.log(scoreGuest);
function add1(){
    points +=1;
    scoreHome.textContent = points;
}
function add2(){
    points +=2;
    scoreHome.textContent = points;
}
function add3(){
    points +=3;
    scoreHome.textContent = points;
}
function addGuest1(){
    guestPoints +=1;
    scoreGuest.textContent = guestPoints;
}
function addGuest2(){
    guestPoints +=2;
    scoreGuest.textContent = guestPoints;
}
function addGuest3(){
    guestPoints +=3;
    scoreGuest.textContent = guestPoints;
}