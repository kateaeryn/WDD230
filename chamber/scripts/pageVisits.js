

let firstvisit = new Date();
localStorage.setItem('dateVisited', firstvisit.getTime());

let start = (localStorage.getItem('set'));
console.log(start);
let end = new Date().getTime();

console.log(end);

function getNumberOfDays(start, end) {
    
    const oneDay = 1000 * 60 * 60 * 24;
    
    const diffInTime = end - start;
    console.log(diffInTime);
    const diffInDays = Math.round(diffInTime / oneDay);

    return diffInDays;
}


const lastVisit = document.querySelector(".visits");
lastVisit.textContent = getNumberOfDays(start, end);
console.log(lastVisit)
localStorage.setItem('dateVisited', end);








