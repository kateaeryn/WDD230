
const giturl = "https://kateaeryn.github.io/WDD230/learningactivity.json"


const card = document.querySelector('#learning');

async function GetActivities() {
    const response = await fetch(giturl);
    const links = await response.json();
    console.log(links);
    displayLinks(links);
}
GetActivities();

const displayLinks = (links) => {
    links.forEach((week) => {
        let section = document.createElement('ul');
        let weekNo = document.createElement('li');
        let assignment = document.createElement('a');
        weekNo.innerHTML = `${week[0]}`;      
        section.appendChild(weekNo);
        for (i in week) {
            assignment.innerHTML = `${week[i]}`;
            section.appendChild(assignment);
        }
        card.appendChild(section);
    });
}

