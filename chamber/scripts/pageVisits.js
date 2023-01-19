

let firstvisit = new Date();
localStorage.setItem('dateVisited', firstvisit.getTime());

let start = parseInt(localStorage.getItem('dateVisited'));

let end = new Date().getTime();

console.log(start, end);

function getNumberOfDays(start, end) {
    
    const oneDay = 1000 * 60 * 60 * 24;
    
    const diffInTime = end - start;
    
    const diffInDays = Math.round(diffInTime / oneDay);

    return diffInDays;
}


const lastVisit = document.querySelector(".visits");
lastVisit.textContent = getNumberOfDays(start, end);
console.log(lastVisit)
localStorage.setItem('dateVisited', end);








